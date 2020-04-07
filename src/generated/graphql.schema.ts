
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UserInput {
    username: string;
    password?: string;
}

export abstract class IMutation {
    abstract addUser(userData?: UserInput): User | Promise<User>;
}

export class Person {
    name?: string;
    age?: number;
}

export abstract class IQuery {
    abstract say(): Person | Promise<Person>;

    abstract getUser(id?: number): User | Promise<User>;
}

export class User {
    id: number;
    password?: string;
    salt?: string;
    username: string;
}
