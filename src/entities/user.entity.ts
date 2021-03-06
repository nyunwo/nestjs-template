import {
    Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
    ManyToOne
} from 'typeorm'
import { Role } from './role.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30, unique: true })
    username: string;

    @Column({ length: 50, nullable: true })
    password: string;

    @Column({ length: 30, nullable: true })
    salt: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => Role, role => role.users )
    role: Role;

}
