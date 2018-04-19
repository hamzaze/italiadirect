var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});

var $$ = Dom7;

var isAjaxLoaded=false;
var pathToAjaxDispatcher="http://www.intellicomstudios.net/italiadirect/php/ajaxDispatcher1.php";
var ajaxLoader="<div class='ajaxLoader left50 top50 abs'><div class='fineloader'></div></div>";
var ajaxLoaderWithBackground="<div class='overlayWhite'>" + ajaxLoader + "</div>";

$$(document).on("click", "[data-action='addedititem']", function(e){
    e.preventDefault();
    var $this=$$(this);
    
    var postData={};
    postData["context"]=$this.attr("data-context");
    
    switch(postData["context"]){
        case "sendOrder":
            var postData=app.formToJSON("#frmOrderFE");

        break;
    }
    console.log(postData);
});