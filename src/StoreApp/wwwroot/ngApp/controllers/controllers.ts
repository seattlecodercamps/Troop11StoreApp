namespace StoreApp.Controllers {

    export class HomeController {
        public products;
        public newProduct;

        public add() {
            this.productService.save(this.newProduct);
        }

        constructor(private productService:StoreApp.Services.ProductService) {
            this.products = productService.listProducts();
        }
    }


    export class EditController {
        private productToEdit;

        constructor(
            private productService: StoreApp.Services.ProductService,
            private $stateParams: ng.ui.IStateParamsService
        ) {
            let id = $stateParams['id'];
            this.productToEdit = productService.get(id);
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
