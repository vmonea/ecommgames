import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Games } from './produto/entities/produto.entity';
import { GamesModule } from './produto/produto.module';
import { Categoria } from './categoria/entities/categoria.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_ecommgames',
      entities: [Games, Categoria],
      synchronize: true,
      logging: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

