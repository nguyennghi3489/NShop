(function(){
	var app = angular.module('store', [ ]);
	app.controller('StoreController',function(){
		this.products = gem;
	});

	app.directive('addProduct',function(){
		return{
			restrict: 'E',
			templateUrl:'add-product.html',
			controller:function(){
				this.product = {};
				this.addProduct = function(store){
					store.products.push(this.product);
					this.product = {};
				}
			},
			controllerAs:'productCtrl'
		};
	});

	app.controller('PanelController',function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	var gem = [{
		name: "Desctiption",
		price: 2.05,
		description: "helloworld",
		images:[{
			full:'img/img1.jpg',
			thumb:'img/img1.jpg',
		},{
			full:'img/img2.jpg',
			thumb:'img/img2.jpg',
		}],
		canPurchase: false,
		soldOut:false,
	},{
		name: "Desctiption",
		price: 2.15,
		description: "helloworld",
		canPurchase: true,
		soldOut:false,
	},{
		name: "Desctiption",
		price: 2.95,
		description: "helloworld",
		canPurchase: true,
		soldOut:false,
	}];
})();