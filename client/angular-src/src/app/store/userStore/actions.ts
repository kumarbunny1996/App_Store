import { Action } from '@ngrx/store';

export enum ActionTypes {
    Home = '[Home Page] Home',
}

export class Home implements Action{
    readonly type = ActionTypes.Home;
    constructor(public payload: {name: string}){}
}

export type Union = Home;
