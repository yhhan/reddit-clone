import { IsEmail, Length } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

@Entity("users")
export class Users {
    
    @Index()
    @IsEmail(undefined, {message: "이메일 주소가 잘못되었습니다"})
    @Length(1,255, {message: "이메일 주소는 비워둘 수 없습니다."})
    @Column({unique: true})
    email: string;

    @Index()
    @Column()
    firstName: string;

    @Column()
    lastName: string

    @Column()
    age: number

}
