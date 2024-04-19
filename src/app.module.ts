import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Games } from './games/entities/games.entity';
import { GamesModule } from './games/games.module';
import { Categorias } from './categorias/entities/categoria.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_ecommgames',
      entities: [Games, Categorias],
      synchronize: true,
      logging: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

