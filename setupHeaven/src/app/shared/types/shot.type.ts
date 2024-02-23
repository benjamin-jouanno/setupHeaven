export interface IShot {
    id: string;
    title: string;
    username: string;
    subtitle?: string;
    description?: string;
    cptConfig?: ICptConfig;
    themes: ITheme[];
    setupObjects: ISetupObject[];
    shotPictures: any;
}

export interface ICptConfig {
    cpu: string;
    gpu: string;
    motherboard: string;
    ram: string;
    case: string;
    hdd: string;
    ssd: string;
}

export interface ITheme {
    tagName: TAG_NAME
}

export interface ISetupObject {
    ObjectType: string;
    title: string;
}

export enum TAG_NAME {
    cosy = 'cosy',
    gaming = 'gaming',
    work = 'work',
    rgb = 'rgb',
    pastel = 'pastel',
    studying = 'studying',
    minimal = 'minimal',
    anime = 'anime'
}