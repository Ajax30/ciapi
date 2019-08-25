angular.module('app.controllers', [])
	.controller('MainController', ['$scope', '$http', function($scope, $http){
		$http.get('api').then(function(response) {

			// Tagline
			$scope.tagline = response.data.tagline;

			//Site name
			$scope.siteTitle = response.data.site_title;

			//Company name
			$scope.companyName = response.data.company_name;

			//Company email
			$scope.company_email = response.data.company_email;

			//Facebook
			$scope.facebook = response.data.facebook;

			//Instagram
			$scope.instagram = response.data.instagram;

			//Twitter
			$scope.twitter = response.data.twitter;

			// Pages
			$scope.pages = response.data.pages;

		});

	}])

	// All posts
	.controller('PostsController', ['$scope', '$http', function($scope, $http){
		$http.get('api').then(function(response) {

			//Categories
			$scope.categories = response.data.categories;

			// Posts
			$scope.posts = response.data.posts;

		});
	}])

	// Posts by author
	.controller('PostsByAurhorController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		const author_id = $routeParams.author_id;
		$http.get('api/posts/byauthor/' + author_id).then(function(response) {

			//Categories
			$scope.categories = response.data.categories;

			// Posts
			$scope.posts = response.data.posts;

		});
	}])

	// Posts by Category
	.controller('PostsByCategoryController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		const cat_id = $routeParams.cat_id;
		$http.get('api/categories/posts/' + cat_id).then(function(response) {

			//Categories
			$scope.categories = response.data.categories;

			// Posts
			$scope.posts = response.data.posts;

			});
	}])

	// Single post
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		const slug = $routeParams.slug;
		$http.get('api/' + slug).then(function(response) {
			
			//Send single post to the view
			$scope.post = response.data.post;

		});
	}])

	// Page
	.controller('PageController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		const pageId = $routeParams.id;
		$http.get('api/pages/page/' + pageId).then(function(response) {

			// Page
			$scope.page = response.data.page;

			//Categories
			$scope.categories = response.data.categories;

			// Posts
			$scope.posts = response.data.posts;

		});
	}])