import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityRepository, Repository } from 'typeorm'
import { User } from 'src/entities/user.entity'

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async findByUsername(username: string): Promise<User[]> {
        return await this.userRepository.createQueryBuilder()
            .where('username = :username', { username })
            .getMany()
    }
}