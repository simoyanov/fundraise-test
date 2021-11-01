$( document ).ready(function() {
    console.log( "ready!" );


    
});

function copy(e) {
    navigator.clipboard.writeText(e);
  }