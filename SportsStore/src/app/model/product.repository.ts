import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.database";
import { Product } from "./product.model";
import { p } from "@angular/core/src/render3";


@Injectable()
export class ProductRepository {
    products: Product[];
    categories: string[];
    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => {
                    return array.indexOf(c) == index
                }).sort();
        });
    }

    getProducts(category: string = null): Product[] {
        return this.products.filter(p => category == null ||
            category == p.category);
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }
    
    getCategories(): string[] {
        return this.categories;
    }

}