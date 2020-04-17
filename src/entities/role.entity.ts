import {
    Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
    OneToMany
} from 'typeorm'
import { User } from './user.entity'

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30, unique: true })
    name: string;

    @Column({ length: 30, unique: true })
    showName: string;

    @Column({ length: 50, nullable: true })
    note: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(type => User, user => user.role)
    users: User[];

}
