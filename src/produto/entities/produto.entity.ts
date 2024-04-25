import { IsNotEmpty, IsNumber } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.service";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2})
    preco: number;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string;
   

    @ManyToOne(() => Categoria, (categoria) => categoria.games, {
        onDelete: "CASCADE"
    })

    categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.games, {
        onDelete: "CASCADE"
    })
    usuario: Games



}