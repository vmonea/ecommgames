import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categorias } from "../categoria.entity";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categorias)
        private CategoriasRepository: Repository<Categorias>
    ) { }

    async findAll(): Promise<Categorias[]> {
        return await this.CategoriasRepository.find({
            relations: {
                postagem: true
            }
        });
    }

    async findById(id: number): Promise<Categorias> {

        let Categorias = await this.CategoriasRepository.findOne({
            where: {
                id
            },
            relations: {
                postagem: true
            }
        });

        if (!Categorias)
            throw new HttpException('Categorias não encontrado!', HttpStatus.NOT_FOUND);

        return Categorias;
    }

    async findByDescricao(descricao: string): Promise<Categorias[]> {
        return await this.CategoriasRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                postagem: true
            }
        })
    }

    async create(Categorias: Categorias): Promise<Categorias> {
        return await this.CategoriasRepository.save(Categorias);
    }

    async update(Categorias: Categorias): Promise<Categorias> {

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