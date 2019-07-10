import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProcductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct =  '[Product] Set Current Product',
    ClearCurrentProduct =  '[Product] Clear Current Product',
    InitializeCurrentProduct =  '[Product] Initialize Current Product',

}

export class ToggleProductCode implements Action {
    readonly type = ProcductActionTypes.ToggleProductCode;

    public constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProcductActionTypes.SetCurrentProduct;

    public constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProcductActionTypes.SetCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProcductActionTypes.InitializeCurrentProduct;
}

export type ProductActions = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct;
