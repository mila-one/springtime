// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Spring Time',
	dialog: {
		title: 'Spring Time',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/cumpleaños/',
    	url: 'cumpleaños.html',
    	name: 'cumpleaños',
  		},
		{
		path: '/bodas/',
    	url: 'bodas.html',
    	name: 'bodas',
  		},
		{
		path: '/aniversarios/',
    	url: 'aniversarios.html',
    	name: 'aniversarios',
  		},
		{
		path: '/bouquet/',
    	url: 'bouquet.html',
    	name: 'bouquet',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnAlerta').on('click', function(){
    app.dialog.alert('Welcome to our shop!');
});



 

