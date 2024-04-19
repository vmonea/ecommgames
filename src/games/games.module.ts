import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Games } from "./entities/games.entity";
import { GamesService } from "./entities/services/games.service";
import { GamesController } from "./controllers/games.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Games])],
    providers: [GamesService],
    controllers: [GamesController],
    exports: [TypeOrmModule]
})

export class GamesModule{ }