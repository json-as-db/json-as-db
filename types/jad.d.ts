export interface JadOptions {
    tableName: string;
}

export interface JadConfig {
    jadDbPath: string;
    jadDbName?: string;
}

export interface JadItem {
    _id: string;
    [key: string]: any;
}

export type JadTable = JadItem[];

export interface JadDatabase {
    [key: string]: JadTable;
}

export type JadGetData = Promise<JadDatabase>;
export type JadCreate = Promise<string>;
export type JadGet = Promise<JadTable>;
export type JadGetById = Promise<object>;
export type JadUpdate = Promise<void>;
export type JadDeleteById = Promise<void>;

export interface Jad {
    create(object: object): JadCreate;
    get(): JadGet;
    getById(id: string): JadGetById;
    update(id: string, object: object): JadUpdate;
    deleteById(id: string): JadDeleteById;
}

