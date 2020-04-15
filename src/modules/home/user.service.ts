import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityRepository, Repository } from 'typeorm'
import { User } from 'src/entities/user.entity'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async findByUsername(username: string): Promise<User> {
        return await this.userRepository.createQueryBuilder()
            .where('username = :username', { username })
            .getOne()
    }

    async addUser(username: string): Promise<any> {
        return await this.userRepository.createQueryBuilder()
            .insert()
            .into(User)
            .values({ username: username })
            .execute()
    }

    async updatePasswd(username: string, password: string): Promise<any> {
        return await this.userRepository.createQueryBuilder()
            .update(User)
            .set({ password: password })
            .where('username = :username', { username })
            .execute()
    }

    async deleteUser(username: string): Promise<any>{
        return await this.userRepository.createQueryBuilder()
            .delete()
            .from(User)
            .where('username = :username', {username})
            .execute()
    }
}