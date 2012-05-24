// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#adfaff');
// Titanium.UI.setBackgroundImage('');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Pestaña 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'sintelti_icon.png',
    title:'Registro',
    window:win1
});

Ti.include('win1.js');

// var mylogger = require('logger');
// 
// mylogger.info('Hello from logger.js');
// 
// //
// // create controls tab and root window
// //
// var win2 = Titanium.UI.createWindow({  
    // title:'Pestaña 2',
    // backgroundColor:'#fff',
    // url: 'win2.js'
// });

// var tab2 = Titanium.UI.createTab({  
    // icon:'sintelti_icon.png',
    // title:'Pestaña 2',
    // window:win2
// });

var botonGuardar = Titanium.UI.createButton ({
	title:'Guardar Información',
	top:250,
	left:110,
	height:35,
	width:250
});

win1.add(botonGuardar);

botonGuardar.addEventListener('click',function(){
	botonGuardar.title = 'Click',
	botonGuardar.color = 'green',
	botonGuardar.backgroundColor = 'red'
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
// tabGroup.addTab(tab2);


// open tab group
tabGroup.open();
