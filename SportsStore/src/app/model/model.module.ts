import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.database";
import { Cart } from "./cart.model";
import { OrderRepository } from "./order.repository";
import { Order } from "./order.model";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, Order,
        OrderRepository, { provide: StaticDataSource, useClass: RestDataSource }]
})
export class ModelModule { }