var playerlife = 8;

$("#lives").hover (
  function() {
    playerlife++;
    
    $("#lives").html ('Cheeze: '+ playerlife);
  
    }
 
  /*The lines below will show a popup that says 'YOU LOSE!' and rewrite the Player Life to be 8.
 alert("YOU EATZ CHEEZE!");
 playerlife = 8
 $("#lives").html ('Player Life: '+ playerlife);
 */   
  
);


$("#text").click (
  function() {
    playerlife=playerlife+9999999999;
    
    $("#lives").html ('Cheeze: '+ playerlife);
  
    }
  
);