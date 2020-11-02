import { User } from './../model/user';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    Home = '[Home Page] Home',
}

export class Home implements Action{
    readonly type = ActionTypes.Home;
    constructor(public payload: User){}
}

export type Union = Home;
