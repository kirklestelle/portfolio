// Create app
angular.module('myApp', ['ui.router', 'firebase'])

// Configure app for multiple page layout
.config(function($stateProvider) {
	$stateProvider
		.state('about', {
			url:'/',
			templateUrl: 'templates/landing.html',
			controller: 'AboutController'
		})
		.state('portfolio', {
			url:'/portfolio',
			templateUrl: 'templates/portfolio.html',
			controller: 'PortfolioController'
		})
		.state('resume', {
			url:'/resume',
			templateUrl: 'templates/resume.html',
			controller: 'ResumeController'
		})
})

// About page controller (homepage)
.controller('AboutController', function($scope, $firebaseObject){
	var ref = new Firebase('https://ksl-portfolio.firebaseio.com/')
	$scope.about = "Hi there! My name is Kirk Lestelle, and I am currently an undergraduate at the University of Washington studying Human Centered Design & Engineering with a focus in Human Computer Interaction. I am passionate about using technology to create interactive, life empowering experiences for people. If applied correctly, technology has the potential to help people accomplish their goals and dreams, whether it's improving mobility with a prosthesis or simply navigating a more efficient webpage interface. As long as the service or product is thoroughly immersive, I believe users can achieve a lot when they spend more time doing what they want rather than troubleshooting usability flaws. This is where I find that my skills in the User Experience field can do something special by equipping people with the intuitive tools to shape their circumstances."
})

// Portfolio page controller
.controller('PortfolioController', function($scope, $firebaseArray){
	var ref = new Firebase('https://ksl-portfolio.firebaseio.com/')
	var projectsRef = ref.child('portfolio')
	$scope.projects = $firebaseArray(projectsRef)
})

// Resume page controller
.controller('ResumeController', function($scope, $firebaseObject){
	var ref = new Firebase('https://ksl-portfolio.firebaseio.com/')
	var contactRef = ref.child('resume')
	$scope.contact = $firebaseObject(contactRef)
})
