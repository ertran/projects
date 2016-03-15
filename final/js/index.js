//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
                  
    console.log('ready');
 // Set up the scene, camera, and renderer as global variables.

  $('nav p').hide();
  

  //listen for a click on the question
  $('nav h1').click(function(){
    
    $('nav p').slideToggle(),$('nav p.answer').fadeToggle(400);
    }
})

