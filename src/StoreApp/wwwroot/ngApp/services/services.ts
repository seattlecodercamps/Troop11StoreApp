namespace StoreApp.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('StoreApp').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('StoreApp').service('myService', MyService);
    }
