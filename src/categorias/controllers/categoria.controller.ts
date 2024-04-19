import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categorias } from "../entities/categoria.entity";
import { CategoriaService } from "../entities/services/categoria.services";

@Controller("/Categorias")
export class CategoriaController {
  constructor(private readonly CategoriaService: CategoriaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categorias[]> {
    return this.CategoriaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categorias> {
    return this.CategoriaService.findById(id);
  }

  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findBydescricao(@Param('descricao') descricao: string): Promise<Categorias[]> {
    return this.CategoriaService.findByDescricao(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Categoria: Categorias): Promise<Categorias> {
    return this.CategoriaService.create(Categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Categoria: Categorias): Promise<Categorias> {
    return this.CategoriaService.update(Categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.CategoriaService.delete(id);
  }

}