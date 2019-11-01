angular.module('app.controllers', [])
	.controller('MainController', ['$scope', '$http', function($scope, $http){
		$http.get('api').then(function(response) {

			//Site name
			$scope.siteTitle = response.data.site_title;

			// Tagline
			$scope.tagline = response.data.tagline;

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
		
		//Get current page (?page=2, ?page=3 etc)
		const currPage = window.location.search;

		// Get all the posts on the current page 
		$http.get('api/' + currPage).then(function(response) {

			//Categories
			$scope.categories = response.data.categories;

			// Posts
			$scope.posts = response.data.posts;

			// posts pagination
			$scope.pagination = response.data.pagination;

		});
	}])

	// Search posts
	.controller('PostsSearchController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

		//Get search term
		const searchTerm = window.location.search;

		$http.get('api/posts/search' + searchTerm).then(function(response) {

			//Categories
			$scope.categories = response.data.categories;

			// Posts
			$scope.posts = response.data.posts;

			// posts pagination
			$scope.pagination = response.data.pagination;

			});
	}])


	// Posts by Category
	.controller('PostsByCategoryController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		
		//Get Category id
		const cat_id = $routeParams.cat_id;

		//Get current page (?page=2, ?page=3 etc)
		const currPage = window.location.search;

		$http.get('api/categories/posts/' + cat_id + currPage).then(function(response) {

			//Categories
			$scope.categories = response.data.categories;

			// Posts
			$scope.posts = response.data.posts;

			// posts pagination
			$scope.pagination = response.data.pagination;

			});
	}])

	// Posts by author
	.controller('PostsByAurhorController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		
		//Get author id
		const author_id = $routeParams.author_id;

		//Get current page (?page=2, ?page=3 etc)
		const currPage = window.location.search;
		
		$http.get('api/posts/byauthor/' + author_id + currPage).then(function(response) {

			//Categories
			$scope.categories = response.data.categories;

			// Posts
			$scope.posts = response.data.posts;

			// posts pagination
			$scope.pagination = response.data.pagination;

		});
	}])

	// Single post
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		const slug = $routeParams.slug;
		$http.get('api/' + slug).then(function(response) {
			
			//Single post
			$scope.post = response.data.post;

			//Comments
			$scope.comments = response.data.comments;

		});
	}])

	// Post comment
	.controller('PostCommentController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		const slug = $routeParams.slug;
		$http.get('api/' + slug).then(function(response) {

			let post_id = response.data.post.id

			$scope.newComment = {
				slug: $routeParams.slug,
				post_id: post_id,
				name: $scope.name,
				email: $scope.email,
				comment: $scope.comment
			};

			$scope.createComment = function(){
			  $http.post('api/comments/create/' + post_id, $scope.newComment);
			};
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