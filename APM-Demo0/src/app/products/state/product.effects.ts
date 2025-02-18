import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions,
        private productService: ProductService) { }

        @Effect()
        loadProducts = this.actions$.pipe(
            ofType(productActions.ProductActionTypes.Load),
            mergeMap((action: productActions.Load) => this.productService.getProducts().pipe(
                map((products: Product[]) => (new productActions.LoadSuccess(products))),
                catchError((err) => of(new productActions.LoadFailure(err)))
            )));

        @Effect()
        updateProduct: Observable<Action> = this.actions$.pipe(
            ofType(productActions.ProductActionTypes.UpdateProduct),
            map((action: productActions.UpdateProduct) => action.payload),
            mergeMap((product: Product) =>
                this.productService.updateProduct(product).pipe(
                    map(updatedProduct => (new productActions.UpdateProductSuccess(updatedProduct))),
                    catchError(err => of(new productActions.UpdateProductFailure(err)))
                )
            )
        );

        @Effect()
        createProduct: Observable<Action> = this.actions$.pipe(
            ofType(productActions.ProductActionTypes.CreateProduct),
            map((action: productActions.CreateProduct) => action.payload),
            mergeMap((newProduct: Product) =>
                this.productService.createProduct(newProduct).pipe(
                    map((newProduct: Product) => (new productActions.CreateProductSuccess(newProduct))),
                    catchError((error: string) => of(new productActions.DeleteProductFailure(error)))
                )
            )
        );

        @Effect()
        deleteProduct: Observable<Action> = this.actions$.pipe(
            ofType(productActions.ProductActionTypes.DeleteProduct),
            map((action: productActions.DeleteProduct) => action.payload),
            mergeMap((productId: number) =>
                this.productService.deleteProduct(productId).pipe(
                    map(() => (new productActions.DeleteProductSuccess(productId))),
                    catchError((error) => of(new productActions.DeleteProductFailure(error)))
                )
            )
        );
}
