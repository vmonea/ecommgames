import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Games } from "src/produto/entities/produto.entity"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    public id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    public nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    public usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    public senha: string

    @Column({length: 5000 }) 
    public foto: string

    @OneToMany(() => Games, (games) => games.usuario)
    games: Games[]

}