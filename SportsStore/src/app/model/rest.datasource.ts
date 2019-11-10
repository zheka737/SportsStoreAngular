import { Injectable } from "@angular/core";
import {
    HttpClient
} from "@angular/common/http";

import { Observable } from "rxjs";
import { delay } from 'rxjs/operators'
import { Product } from "./product.model";
import { Order } from "./order.model";


const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;

    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products")
            .pipe(delay(3000));
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + 'order', order)
            .pipe(delay(3000));
    }
}