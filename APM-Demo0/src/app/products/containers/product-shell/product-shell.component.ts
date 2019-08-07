import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../../product';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../state';
import * as productActions from '../../state/product.actions';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './product-shell.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductShellComponent implements OnInit {
    errorMessage$: Observable<string>;
    displayCode$: Observable<boolean>;
    products$: Observable<Product[]>;
    selectedProduct$: Observable<Product>;

    constructor(private store: Store<fromProduct.State>) { }

    ngOnInit(): void {
      this.store.dispatch(new productActions.Load());

      this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
      this.products$ = this.store.pipe(select(fromProduct.getProducts));
      this.selectedProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
      this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
    }

    checkChanged(value: boolean): void {
      this.store.dispatch(new productActions.ToggleProductCode(value));
    }

    newProduct(): void {
      this.store.dispatch(new productActions.InitializeCurrentProduct());
    }

    productSelected(product: Product): void {
      this.store.dispatch(new productActions.SetCurrentProduct(product));
    }

    productSelectedClear(): void {
        this.store.dispatch(new productActions.ClearCurrentProduct());
    }

    productCreated(product: Product): void {
        this.store.dispatch(new productActions.CreateProduct(product));
    }

    productDeleted(productId: number): void {
        this.store.dispatch(new productActions.DeleteProduct(productId));
    }

    productUpdated(product: Product): void {
        this.store.dispatch(new productActions.UpdateProduct(product));
    }
}
