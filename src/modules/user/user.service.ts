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

    async addUser(username: string, password: string, salt: string): Promise<any> {
        let res
        try {
            res = await this.userRepository.createQueryBuilder()
                .insert()
                .into(User)
                .values({ username, password, salt })
                .execute()
        } catch (e) {
            if (e.code == 'ER_DUP_ENTRY') {
                throw '用户名已被使用'
            } else {
                throw e
            }
        }
        return res
    }

    async findByUsername(username: string): Promise<User> {
        return await this.userRepository.createQueryBuilder()
            .where('username = :username', { username })
            .getOne()
    }



    // async updatePasswd(username: string, password: string): Promise<any> {
    //     return await this.userRepository.createQueryBuilder()
    //         .update(User)
    //         .set({ password: password })
    //         .where('username = :username', { username })
    //         .execute()
    // }

    // async deleteUser(username: string): Promise<any>{
    //     return await this.userRepository.createQueryBuilder()
    //         .delete()
    //         .from(User)
    //         .where('username = :username', {username})
    //         .execute()
    // }
}