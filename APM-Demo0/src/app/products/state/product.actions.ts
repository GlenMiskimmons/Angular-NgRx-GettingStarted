import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProcductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct =  '[Product] Set Current Product',
    ClearCurrentProduct =  '[Product] Clear Current Product',
    InitializeCurrentProduct =  '[Product] Initialize Current Product',
    Load = '[Product] Load Products',
    LoadSuccess = '[Product] Load Products Success',
    LoadFailure = '[Product] Load Products Failure',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSuccess = '[Product] Update Product Success',
    UpdateProductFailure = '[Product] Update Product Failure'
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
    readonly type = ProcductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProcductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
    readonly type = ProcductActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProcductActionTypes.LoadSuccess;

    public constructor(public payload: Product[]) { }
}

export class LoadFailure implements Action {
    readonly type = ProcductActionTypes.LoadFailure;

    public constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
    readonly type = ProcductActionTypes.UpdateProduct;

    public constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
    readonly type = ProcductActionTypes.UpdateProductSuccess;

    public constructor(public payload: Product) { }
}

export class UpdateProductFailure implements Action {
    readonly type = ProcductActionTypes.UpdateProductFailure;

    public constructor(public payload: string) { }
}
export type ProductActions = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct
    | Load
    | LoadSuccess
    | LoadFailure
    | UpdateProduct
    | UpdateProductSuccess
    | UpdateProductFailure;
