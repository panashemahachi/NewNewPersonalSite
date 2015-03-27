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
    title: 'Vidyard (Incoming)',
    role: 'Software Engineering Intern',
    roleDescription: 'About to start!',
    link: 'http://vidyard.com',
	img: 'http://www.vidyard.com/wp-content/themes/cobragang/img/logos/vidyard/website_logo_big.png',
    skillsUsed: ['Rails', 'TBA'],
    work: true,
    app: false,
  },
{
    title: 'EyeCheck (Velocity)',
    role: 'Full Stack Developer',
    roleDescription: 'Redesigned the web presence with a brand new website and content curation system.  While doing so I led the entire web strategy, made hiring decisions and pushed code seen by thousands with the potential to reach millions.',
    link: 'http://eyecheck.co',
	img: 'http://velocity.uwaterloo.ca/wp-content/uploads/2014/05/EyeCheck-Logo-e1424729383645.png',
    skillsUsed: ['Rails', 'jQuery', 'Design', 'HTML/CSS'],
    work: true,
    app: false,
  },
  {
    title: 'Apprentice',
    projectDescription: 'Created an analytics platform for a multiday conference that allowed students to view their personal progression.  Worked under extreme deadlines (coded the platform in a weekend and it was used a couple days later by delegates / executives). ',
    quickDescription: 'Web App / Analytics Dashboard',
    img: 'imgs/apprentice2.png',
    link: 'http://uwapprentice.ca',
    github: 'https://github.com/panashemahachi/UWA-Website',
    skillsUsed: ['Rails', 'jQuery', 'HTML/CSS/SASS'],
    web: true
  },{
    title: 'Stuffff',
    projectDescription: 'To get practice with AWS I created a file storage system that allowed my friends and I to store our files in the cloud safely.  Features included optional sharing between users and the public.  (The project was essentially Dropbox).',
    quickDescription: 'AWS File Storage System',
    img: 'imgs/stuffff2.png',
    link: 'http://stuffff.herokuapp.com',
    github: 'https://github.com/panashemahachi/Stuffff',
    skillsUsed: ['AWS','Rails', 'jQuery', 'HTML/CSS/SASS'],
    web: true
  },{
    title: 'I AM A TOP PROSPECT',
    projectDescription: 'Created an online platform geared towards connecting high school athletes to top-tier trainers and nutritionists.  Cold called and garnered interest from some of the top US college basketball trainers. (I was 15 at the time).',
    quickDescription: 'Connection Platform',
    img: 'imgs/topprospect2.png',
    skillsUsed: ['PHP', 'HTML/CSS', 'Negotiation'],
    web: true
  },{
    title: 'Bitcoin Hub',
    projectDescription: 'Bitcoin Hub is an Android widget that has the current bitcoin price from many exchanges and a live chart. I created this app because I wanted to track the price of bitcoin on-the-go and get up-to-the-second updates in a convenient manner.',
    quickDescription: 'Android Widget',
    img: 'imgs/bitcoinhub2.png',
    skillsUsed: ['Java', 'Android'],
    github: 'https://github.com/panashemahachi/Bitcoin-Hub',
    link: 'https://play.google.com/store/apps/details?id=com.pmahachi.btcprice',
    app: true
  },
  {
    title: 'D2L',
    role: 'Client Marketing Assistant',
    roleDescription: 'Cleaned all client data in the CRM to enable more targeted and efficient email marketing. Used Excel advanced functions to analyze and report corporate event outcomes to management.',
    link: 'http://d2l.com',
	img: 'http://d2l-web.s3.amazonaws.com/wp-content/uploads/trademark-logo-d2l.png',
    skillsUsed: ['Marketing', 'Excel Advanced Functions'],
    nonTech: true
  }
  ];

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
	major: 'Computer Science (First Year)',
	pronounciation: 'panashh mahahchi',
	mydescription: ['Lover of technology and an individual intrigued by startup founders'],
	picture: 'imgs/profile.png',
	aboutme: 'about me',
	aboutmeText: ['My name is Panashe Mahachi and I am a first year Computer Science student at the University of Waterloo.','As a product of the very entrepreneurial Waterloo Region, I constantly look for opportunities to create or contribute to interesting and meaningful projects. I have technical skills as well as valuable soft skills that enable me to take on various roles when trying to						take on a challenge.','I am passionate about learning technology, productivity and social problems.','In my spare time I love reading finance/technology related articles, working on projects and watching fireside chats.']

});


