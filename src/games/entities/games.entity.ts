import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_games"})
export class Games{

    @PrimaryGeneratedColumn() // Chave Primária e Auto_Increment
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    imagem: string;

    @IsNotEmpty()
    @Column("int")
    preco: number;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string;
    tema: any;

}