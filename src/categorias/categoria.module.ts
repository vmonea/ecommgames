import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categorias } from "./entities/categoria.entity";
import { CategoriaService } from "./entities/services/categoria.services";
import { CategoriaController } from "./controllers/categoria.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Categorias])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [TypeOrmModule]
})
export class CategoriaModule {}