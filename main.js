  $("path, circle").hover(function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });

  jQuery(document).ready(function() {
    $("#stateE").text("Oregon");
    $("#crimeE").text("40");
    $("#dangerE").text("LOW");
  });

  $("#g5").click(function() {
    $('table tr td').each(function() {
      var customerId = $(this).find(".stateE");    
      console.log("ENT: " + customerId)
    });

    var state = $(".state").text().replace(/State: /g,'');
    var crimeE = $(".rate").text().replace(/Crime Rate: /g,'');
    
    if(crimeE > 75) {
      addRow(state, crimeE, "HIGH");
      $("path:hover, circle:hover").css('fill', '#ff0011');
    }
    else if(crimeE < 75 && crimeE > 50) {
      addRow(state, crimeE, "MEDIUM");
      $("path:hover, circle:hover").css('fill', '#ffcc00');
    }
    else if(crimeE < 50 && crimeE > 25) {
      addRow(state, crimeE, "LOW");
      $("path:hover, circle:hover").css('fill', '#99cc33');
    }
    else {
      addRow(state, crimeE, "VERY SAFE");
      $("path:hover, circle:hover").css('fill', '#339900');
    }
  })

  $("path, circle").mouseleave(function(e) {
    $('#info-box').css('display','none');
  });
  
  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();
  
  function addRow(state, crime, danger) {
    $("table tr:last").after("<tr><td id='stateE'>" + state + "</td><td id='crimeE'>" + crime + 
      "</td><td id='dangerE'>" + danger + "</td></tr>");
  }

  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(ios) {
    $('a').on('click touchend', function() {
      var link = $(this).attr('href');
      window.open(link,'_blank');
      return false;
    });
  }