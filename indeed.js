function myGetIndeed(sourceArray) 
  {
  var url = "https://indeedpassthrough.herokuapp.com/indeed";
  url += '?' + 
  
  $.ajax({
    url: url,
    method: 'GET',
    }).done(function(result) {
      $("#results").empty();
      for (var i = 0; i < 10; i++) {
        //console.log(result["results"][i]["title"]);
		
        $("#results1").append("<div class='job'><a target='_blank' href='#' class='jobtitle'></a><span class='company_location'><span class='company'></span> - <span class='location'></span></span></div>");
        
      }
      
    }).fail(function(err) {
      throw err;
  });
 }
	
