import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Product } from '../product';
import * as RootState from '../../state/app.state';
import { ProductActions, ProcductActionTypes } from './product.actions';
import { pipe } from '@angular/core/src/render3/pipe';

export interface State extends RootState.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProductId: number | null;
    products: Product[];
    error: string;
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
};

const getProductFeatureSelector = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(getProductFeatureSelector, state => state.showProductCode);
export const getCurrentProductId = createSelector(getProductFeatureSelector, state => state.currentProductId);
export const getCurrentProduct = createSelector(getProductFeatureSelector, getCurrentProductId, (state, currentProductId) => {
    if (currentProductId === 0) {
        return {
            id: 0,
            productName: '',
            productCode: 'New',
            description: '',
            starRating: 0
        };
    } else {
        return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
    }
});
export const getProducts = createSelector(getProductFeatureSelector, state => state.products);
export const getError = createSelector(getProductFeatureSelector, state => state.error);

export function reducer(state = initialState, action: ProductActions): ProductState {
    switch(action.type) {
        case ProcductActionTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            };
        case ProcductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProductId: action.payload.id
            };
        case ProcductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProductId: null
            };
        case ProcductActionTypes.InitializeCurrentProduct:
            return {
                ...state,
                currentProductId: 0
            };
        case ProcductActionTypes.LoadSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            };
        case ProcductActionTypes.LoadFailure:
            return {
                ...state,
                products: [],
                error: action.payload
            };
        case ProcductActionTypes.UpdateProductSuccess:
            const updatedProducts = state.products.map(item => action.payload.id === item.id ? action.payload : item);
            return {
                ...state,
                products: updatedProducts,
                currentProductId: action.payload.id,
                error: ''
            };
        case ProcductActionTypes.UpdateProductFailure:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
