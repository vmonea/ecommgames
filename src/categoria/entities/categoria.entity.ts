import { IsNotEmpty } from "class-validator";
import { Games } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string
    
    @OneToMany(()=> Games, (games) => games.categoria)
    categoria: Games[]
    games: any;

}   