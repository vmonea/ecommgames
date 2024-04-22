import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Games } from "./entities/produto.entity";
import { GamesService } from "./entities/services/produto.service";
import { GamesController } from "./controllers/produto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Games])],
    providers: [GamesService],
    controllers: [GamesController],
    exports: [TypeOrmModule]
})

export class GamesModule{ }