import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../categoria.entity";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private CategoriasRepository: Repository<Categoria>
    ) { }

    async findAll(): Promise<Categoria[]> {
        return await this.CategoriasRepository.find({
            relations: {
                games: true
            }
        });
    }

    async findById(id: number): Promise<Categoria> {

        let Categorias = await this.CategoriasRepository.findOne({
            where: {
                id
            },
            relations: {
                games: true
            }
        });

        if (!Categorias)
            throw new HttpException('Categorias não encontrado!', HttpStatus.NOT_FOUND);

        return Categorias;
    }

    async findByDescricao(descricao: string): Promise<Categoria[]> {
        return await this.CategoriasRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                games: true
            }
        })
    }

    async create(Categorias: Categoria): Promise<Categoria> {
        return await this.CategoriasRepository.save(Categorias);
    }

    async update(Categorias: Categoria): Promise<Categoria> {

        let buscaCategorias = await this.findById(Categorias.id);

        if (!buscaCategorias || !Categorias.id)
            throw new HttpException('Categoria não encontrado!', HttpStatus.NOT_FOUND);

        return await this.CategoriasRepository.save(Categorias);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaCategorias = await this.findById(id);

        if (!buscaCategorias)
            throw new HttpException('Categoria não encontrado!', HttpStatus.NOT_FOUND);

        return await this.CategoriasRepository.delete(id);

    }

}