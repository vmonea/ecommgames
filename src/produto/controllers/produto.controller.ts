import { Controller, Get, Post, Put, Delete, HttpCode, HttpStatus, Param, Body, HttpException, UseGuards, ParseIntPipe } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Games } from "../entities/produto.entity";
import { GamesService } from "../entities/services/produto.service";

@UseGuards(JwtAuthGuard)
@Controller("/postagens")
export class PostagemController {
  constructor(private readonly gamesService: GamesService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Games[]> {
    return this.gamesService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Games> {
    return this.gamesService.findById(id);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findByTitulo(@Param('titulo') titulo: string): Promise<Games[]> {
    return this.gamesService.findByTitulo(titulo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() games: Games): Promise<Games> {
    return this.gamesService.create(games);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() games: Games): Promise<Games> {
    return this.gamesService.update(games);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.gamesService.delete(id);
  }

}