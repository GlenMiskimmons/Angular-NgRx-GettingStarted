import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Product } from '../product';
import * as RootState from '../../state/app.state';
import { ProductActions, ProcductActionTypes } from './product.actions';

export interface State extends RootState.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
};

const getProductFeatureSelector = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(getProductFeatureSelector, state => state.showProductCode);
export const getCurrentProduct = createSelector(getProductFeatureSelector, state => state.currentProduct);
export const getProducts = createSelector(getProductFeatureSelector, state => state.products);

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
                currentProduct: { ...action.payload }
            };
        case ProcductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProduct: null
            };
        case ProcductActionTypes.InitializeCurrentProduct:
            return {
                ...state,
                currentProduct: {
                    id: 0,
                    productName: '',
                    productCode: 'New',
                    description: '',
                    starRating: 0
                }
            };
        default:
            return state;
    }
}
