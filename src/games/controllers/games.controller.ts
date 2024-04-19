import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Games } from "../entities/games.entity";
import { GamesService } from "../entities/services/games.service";


@Controller("/games")
export class GamesController{

    constructor(private readonly gamesService: GamesService){}

    @Get()
    @HttpCode(HttpStatus.OK) // Status 200 do HTTP
    findAll(): Promise<Games[]>{
        return this.gamesService.findAll();
    }
}