namespace StoreApp.Services {


    export class ProductService {
        private ProductResource;

        public listProducts() {
            return this.ProductResource.query();
        }

        public get(id) {
            return this.ProductResource.get({id:id});
        }

        public save(product) {
            return this.ProductResource.save(product);
        }

        constructor($resource: ng.resource.IResourceService) {
            this.ProductResource = $resource('/api/products/:id');
        }

    }

    angular.module('StoreApp').service('productService', ProductService);


   
}
