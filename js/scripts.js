angular.module('AstroWeightCalculator', []);

angular
	.module('AstroWeightCalculator')
	.controller('weightCalc', weightCalc);

function weightCalc() {

	var vm = this;

	vm.planets = [
		['Pluto', 0.06],
		['Neptune', 1.148],
		['Uranus', 0.917],
		['Saturn', 1.139],
		['Jupiter', 2.640],
		['Mars', 0.3895],
		['Moon', 0.1655],
		['Earth', 1],
		['Venus', 0.9032],
		['Mercury', 0.377],
		['Sun', 27.9],
	];

	vm.doMath = function doMath(weight, gravity) {
		var sum = weight * gravity;
		return sum;
	}

};
