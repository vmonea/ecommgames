import { IsNotEmpty } from "class-validator";
import { Games } from "src/games/entities/games.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categorias"})
export class Categorias {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string
    
    @OneToMany(()=> Games, (games) => games.tema)
    postagem: Games[]

}   