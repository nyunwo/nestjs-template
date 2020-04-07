
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Person {
    name?: string;
    age?: number;
}

export abstract class IQuery {
    abstract say(): Person | Promise<Person>;

    abstract getUser(): User | Promise<User>;
}

export class User {
    id: number;
    password?: string;
    salt?: string;
    username: string;
}
