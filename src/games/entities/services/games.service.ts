import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Games } from "../games.entity";
import { Repository } from "typeorm";

@Injectable()
export class GamesService{
    constructor(
        @InjectRepository(Games)
        private postagemRepository: Repository<Games>
    ){}

    async findAll(): Promise<Games[]>{
        return await this.postagemRepository.find();
    }
}