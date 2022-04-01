/* $(document).ready(function () {
    
    $("button").click(function () { 
        $("ul li:nth-child(3)").hide();
        
    });
    
});
$(document).ready(function () {
    
    $("a").click(function () { 
        $('a[target="_blank"]').hide();
        
    });
    
}); */

$(document).ready(function () {
    
    $("#on").click(function() { 
      $("#img1").hide();
  
    });
});

$(document).ready(function () {
    
    $("#off").click(function() { 
      $("#img2").hide();
  
    });
});
$(document).ready(function () {
    
    $("#on").click(function() { 
      $("#img2").show();
  
    });
});

$(document).ready(function () {
    
    $("#off").click(function() { 
      $("#img1").show();
    });
});