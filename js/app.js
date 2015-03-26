/* Went way too overkill by declaring everything here.... w.e. */


var firstname = 'panashe';
var lastname = 'mahachi';
var github = 'https://github.com/panashemahachi';

var App = Ember.Application.create({
});

window.App.ready = function () {
    $(document).ajaxStart(function () {
        NProgress.start();
    });

    $(document).ajaxStop(function () {
        NProgress.done();
    });
};


App.Router.map(function(){
	this.route('about', {path: '/about'});
	this.route('resume', {path: '/resume'});
	this.resource('projects', {path: '/projects'});
	this.resource('designs', {path: '/designs'});

});

/* Not gonna implement a backend for now.  Already overkill? */
// Projects

App.PROJECTS = [{
	description: true,
	knownLanguages: ' Java, Ruby, JavaScript, Python, Racket, HTML/CSS/SCSS',
	platforms: 'Ruby on Rails, Android, EmberJS, AngularJS, Bootstrap',
	sectionText: 'i\'m\ always working on something.',
	github: github

},{
    title: 'EyeCheck',
    role: 'Full Stack Developer',
    projectDescription: 'Flint is...',
    link: 'http://google.com',
    image: 'flint.png',
    skillsUsed: '',
    work: true,
    app: false,
    web: true
  },
  {
    title: 'EyeCheck 2',
    role: 'Full Stack Developer 2',
    projectDescription: 'Flint is...',
    link: 'http://google.com',
    image: 'flint.png',
    skillsUsed: '',
    category: 'work',
    app: true,
    web: true
  }];

// Return projects
App.ProjectsRoute = Ember.Route.extend({
	model: function(){
		return App.PROJECTS;
	}

});

// Designs

App.DESIGNS = [{
	description: true,
	tools: 'Sketch 3, Photoshop, Origami',
	sectionText: 'i\'m just getting into design',
	working: 'by the time you\'re reading this i\'m probably reading "The Design of Everyday Things"',

}];

App.DesignsRoute = Ember.Route.extend({

	model: function(){
		return App.DESIGNS;
	}

});

App.IndexController = Ember.Controller.extend({

	fullname: 'panashe mahachi',
	shortdescription: 'hacker and entrepreneur',
	twitter: 'https://twitter.com/panashemahachi',
	github: github,
	linkedin: 'https://www.linkedin.com/in/pmahachi',
	email: 'pkmahach@uwaterloo.ca',
	quora: 'http://www.quora.com/Panashe-Mahachi'
});

App.AboutController = Ember.Controller.extend({
	firstname: firstname,
	lastname: lastname,
	school: 'University of Waterloo',
	major: 'Computer Science',
	pronounciation: 'panashh mahahchi',
	mydescription: ['Lover of technology and an individual intrigued by startup founders'],
	picture: 'imgs/profile.png',
	aboutme: 'about me'

});


