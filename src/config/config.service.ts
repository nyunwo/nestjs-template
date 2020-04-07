import { Injectable } from '@nestjs/common'
import * as configConstants from './config.constant'

export class ConfigService {
    constructor() {

    }

    public get(key: string): string{
        return configConstants[key]
    }

    public getNumber(key: string): number{
        return configConstants[key]
    }
}