import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct =  '[Product] Set Current Product',
    ClearCurrentProduct =  '[Product] Clear Current Product',
    InitializeCurrentProduct =  '[Product] Initialize Current Product',
    Load = '[Product] Load Products',
    LoadSuccess = '[Product] Load Products Success',
    LoadFailure = '[Product] Load Products Failure',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSuccess = '[Product] Update Product Success',
    UpdateProductFailure = '[Product] Update Product Failure',
    CreateProduct = '[Product] Create Product',
    CreateProductSuccess = '[Product] Create Product Success',
    CreateProductFailure = '[Product] Create Product Failure',
    DeleteProduct = '[Product] Delete Product',
    DeleteProductSuccess = '[Product] Delete Product Success',
    DeleteProductFailure = '[Product] Delete Product Failure'
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;

    public constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    public constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;

    public constructor(public payload: Product[]) { }
}

export class LoadFailure implements Action {
    readonly type = ProductActionTypes.LoadFailure;

    public constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;

    public constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UpdateProductSuccess;

    public constructor(public payload: Product) { }
}

export class UpdateProductFailure implements Action {
    readonly type = ProductActionTypes.UpdateProductFailure;

    public constructor(public payload: string) { }
}

export class CreateProduct implements Action {
    readonly type = ProductActionTypes.CreateProduct;

    public constructor(public payload: Product) { }
}

export class CreateProductSuccess implements Action {
    readonly type = ProductActionTypes.CreateProductSuccess;

    public constructor(public payload: Product) { }
}

export class CreateProductFailure implements Action {
    readonly type = ProductActionTypes.CreateProductFailure;

    public constructor(public payload: string) { }
}

export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DeleteProduct;

    public constructor(public payload: number) { }
}

export class DeleteProductSuccess implements Action {
    readonly type = ProductActionTypes.DeleteProductSuccess;

    public constructor(public payload: number) { }
}

export class DeleteProductFailure implements Action {
    readonly type = ProductActionTypes.DeleteProductFailure;

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
    | UpdateProductFailure
    | CreateProduct
    | CreateProductSuccess
    | CreateProductFailure
    | DeleteProduct
    | DeleteProductSuccess
    | DeleteProductFailure;
