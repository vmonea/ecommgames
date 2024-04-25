import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { CategoriaService } from "src/categoria/entities/services/categoria.services";
import { Games } from "../produto.entity";

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Games)
        private gamesRepository: Repository<Games>,
        private categoriaService:CategoriaService
    ) { }

    async findAll(): Promise<Games[]> {
        return await this.gamesRepository.find({
            relations:{
                categoria: true,
                usuario: true
            }
        });
    }

    async findById(id: number): Promise<Games> {

        let games = await this.gamesRepository.findOne({
            where: {
                id
            },
            relations:{
                categoria: true,
                usuario: true
            }
        });

        if (!games)
            throw new HttpException('Jogo não encontrado!', HttpStatus.NOT_FOUND);

        return games;
    }

    async findByTitulo(titulo: string): Promise<Games[]> {
        return await this.gamesRepository.find({
            where:{
                nome: ILike(`%${titulo}%`)
            },
            relations:{
                categoria: true,
                usuario: true
            }
        })
    }

    async create(games: Games): Promise<Games> {
       
        if (games.categoria){
            
            let categoria = await this.categoriaService.findById(games.categoria.id)

            if (!categoria)
                throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
            
            return await this.gamesRepository.save(games);

        }

        return await this.gamesRepository.save(games);
    }

    async update(games: Games): Promise<Games> {
        
        let buscaGames: Games = await this.findById(games.id);

        if (!buscaGames || !games.id)
            throw new HttpException('Jogo não encontrado!', HttpStatus.NOT_FOUND);

        if (games.categoria){
            
            let categoria = await this.categoriaService.findById(games.categoria.id)
                
            if (!categoria)
                throw new HttpException('categoria não encontrado!', HttpStatus.NOT_FOUND);
                
            return await this.gamesRepository.save(games);
    
        }
        
        return await this.gamesRepository.save(games);
    }

    async delete(id: number): Promise<DeleteResult> {
        
        let buscaGames = await this.findById(id);

        if (!buscaGames)
            throw new HttpException('Games não encontrada!', HttpStatus.NOT_FOUND);

        return await this.gamesRepository.delete(id);

    }

}