import { Controller, Post, Body } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductController {
    constructor (private readonly productsService: ProductService) {}

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ): any {
        this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
    }
}