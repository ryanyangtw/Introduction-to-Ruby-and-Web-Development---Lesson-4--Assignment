$( document ).ready(function(){
  alert('fuck');
  $(document).on('click', '#hit_form input',function(){
    
    $.ajax({
      type: 'POST',
      url: '/game/player/hit'
    })  
    .done(function(msg) {
      $('#div-game').replaceWith(msg);
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
     //alert( "complete" );
    });

    //avoid link to #
    return false;
 
  });


  $(document).on('click', '#stay_form input',function(){
  
    $.ajax({
      type: 'POST',
      url: '/game/player/stay'
    })  
    .done(function(msg) {
      $('#div-game').replaceWith(msg);
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
     //alert( "complete" );
    });

    //avoid link to #
    return false;
   
  });

  $(document).on('click', '#dealer_hit_form input',function(){
  
    $.ajax({
      type: 'POST',
      url: '/game/dealer/hit'
    })  
    .done(function(msg) {
      $('#div-game').replaceWith(msg);
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
     //alert( "complete" );
    });

    //avoid link to #
    return false;
   
  });
  

});