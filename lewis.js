$(document).ready(function(){
          
         var container = $(".content-container");
         var container_left = parseInt(container.css('marginLeft'));
         var container_width = parseInt(container.css('width'));
         var wrapper = $(".wrapper");
         var slide_height = parseInt(wrapper.css('height'));
         var page_holder = $(".page-holder");
          
         var clicks = 0;
         var mbclicks = 0;
    
    function closenav() {
        $( ".nav-container" ).animate({
          marginLeft: "-195px",
          },200); $(".hamburger").animate({
           opacity: "1",
       },200); $(".close-button").animate({
           opacity: "0",
       },200); container.animate({
           marginLeft: "5%",
       },200); container.animate({
           width: "90%",
       },200); $(".recent-post-container").animate({
           marginLeft: "0",
       },200);
      
        }
    function delayclosenav() {
        $( ".nav-container" ).delay(400).animate({
          marginLeft: "-195px",
          },200); $(".hamburger").delay(400).animate({
           opacity: "1",
       },200); $(".close-button").delay(400).animate({
           opacity: "0",
       },200); container.delay(400).animate({
           marginLeft: "5%",
       },200); container.delay(400).animate({
           width: "90%",
       },200); $(".recent-post-container").delay(400).animate({
           marginLeft: "0",
       },200);
    }
    function closemobnav() {
        $(".mb-hamburger").animate({
           opacity: "1",
       },200); $(".mb-close-button").animate({
           opacity: "0",
       },200); $( ".mobile-nav-container" ).animate({
           marginTop: "-330px",
       },200);
    }
    function delayclosemobnav() {
    $(".mb-hamburger").delay(400).animate({
           opacity: "1",
       },200); $(".mb-close-button").delay(400).animate({
           opacity: "0",
       },200); $( ".mobile-nav-container" ).delay(400).animate({
           marginTop: "-330px",
       },200);
    }
          
    $( ".hamburger" ).click(function() {
       $( ".nav-container" ).animate({
           marginLeft: "0",
       },200); $(".hamburger").animate({
           opacity: "0",
       },200); $(".close-button").animate({
           opacity: "1",
       },200); container.animate({
           marginLeft: container_left + 195,
       },200); $( ".mobile-nav-container" ).animate({
           marginTop: "-20px",
       },200); container.animate({
           marginLeft: container_left + 195,
       },200); $(".recent-post-container").animate({
           marginLeft: container_left + 155,
       },200);
      
        clicks++;
        
        if (clicks%2 == 0) {
          
          closenav();
      
        }
  });
    
    
    /* MOBILE */
    $( ".mb-hamburger" ).click(function() {
       $(".mb-hamburger").animate({
           opacity: "0",
       },200); $(".mb-close-button").animate({
           opacity: "1",
       },200); $( ".mobile-nav-container" ).animate({
           marginTop: "-20px",
       },200);
      
        mbclicks++;
        
        if (mbclicks%2 == 0) {
          
            closemobnav();
          
        }
  });
    
    
    
    
    $( ".home-btn" ).click(function() {
       wrapper.animate({
           opacity: 0,
       },200);
        page_holder.delay(200).animate({
           marginTop: 0,
       },200); 
        wrapper.delay(200).animate({
           opacity: 1,
       },100);
        $(".recent-post-container").fadeIn(200);
        
      $( ".home-slider").animate({
          marginLeft: "-30%",
      },200);
      $( ".bio-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".blog-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".research-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".publications-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".courses-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".consulting-slider").animate({
          marginLeft: "-140%",
      },200);
        
        $( ".mb-home-slider").animate({
          marginLeft: "33%",
      },200);
      $( ".mb-bio-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-blog-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-research-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-publications-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-courses-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-consulting-slider").animate({
          marginLeft: "120%",
      },200);
        
      delayclosenav();
      clicks = 0;
        
      delayclosemobnav();
       mbclicks = 0;
        
  });     
    
  $( ".blog-btn" ).click(function() {
      wrapper.animate({
           opacity: 0,
       },200);
       page_holder.delay(200).animate({
           marginTop: 590*-1,
       },200); 
      wrapper.delay(200).animate({
           opacity: 1,
       },100);
      $(".recent-post-container").fadeOut(200);
      
      $( ".home-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".blog-slider").animate({
          marginLeft: "-30%",
      },200);
      $( ".bio-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".research-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".publications-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".courses-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".consulting-slider").animate({
          marginLeft: "-140%",
      },200);
      
       $( ".mb-home-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-blog-slider").animate({
          marginLeft: "33%",
      },200);
      $( ".mb-bio-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-research-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-publications-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-courses-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-consulting-slider").animate({
          marginLeft: "120%",
      },200);
      
      delayclosenav();
      clicks = 0;
      
      delayclosemobnav();
      mbclicks = 0;
        
  });
    
   $( ".bio-btn" ).click(function() {
       wrapper.animate({
           opacity: 0,
       },200);
       page_holder.delay(200).animate({
           marginTop: 590*-2,
       },200); 
       wrapper.delay(200).animate({
           opacity: 1,
       },100);
       $(".recent-post-container").fadeOut(200);
       
       $( ".home-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".blog-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".bio-slider").animate({
          marginLeft: "-30%",
      },200);
      $( ".research-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".publications-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".courses-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".consulting-slider").animate({
          marginLeft: "-140%",
      },200);
       
        $( ".mb-home-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-blog-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-bio-slider").animate({
          marginLeft: "33%",
      },200);
      $( ".mb-research-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-publications-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-courses-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-consulting-slider").animate({
          marginLeft: "120%",
      },200);
       
       delayclosenav();
       clicks = 0;
       
       delayclosemobnav();
       mbclicks = 0;
        
  });
    
    $( ".research-btn" ).click(function() {
        wrapper.animate({
           opacity: 0,
       },200);
       page_holder.delay(200).animate({
           marginTop: 590*-3,
       },200);
        wrapper.delay(200).animate({
           opacity: 1,
       },100);
        $(".recent-post-container").fadeOut(200);
        
        $( ".home-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".bio-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".blog-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".research-slider").animate({
          marginLeft: "-30%",
      },200);
      $( ".publications-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".courses-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".consulting-slider").animate({
          marginLeft: "-140%",
      },200);
        
         $( ".mb-home-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-bio-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-blog-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-research-slider").animate({
          marginLeft: "33%",
      },200);
      $( ".mb-publications-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-courses-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-consulting-slider").animate({
          marginLeft: "120%",
      },200);
        
        delayclosenav();
        clicks = 0;
        
        delayclosemobnav();
       mbclicks = 0;
        
  });
    
    $( ".publications-btn" ).click(function() {
        wrapper.animate({
           opacity: 0,
       },200);
       page_holder.delay(200).animate({
           marginTop: 590*-4,
       },200); 
        wrapper.delay(200).animate({
           opacity: 1,
       },100);
        $(".recent-post-container").fadeOut(200);
        
        $( ".home-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".bio-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".blog-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".research-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".publications-slider").animate({
          marginLeft: "-30%",
      },200);
      $( ".courses-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".consulting-slider").animate({
          marginLeft: "-140%",
      },200);
        
         $( ".mb-home-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-bio-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-blog-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-research-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-publications-slider").animate({
          marginLeft: "33%",
      },200);
      $( ".mb-courses-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-consulting-slider").animate({
          marginLeft: "120%",
      },200);
        
       delayclosenav();
      clicks = 0;
        
        delayclosemobnav();
       mbclicks = 0;
        
  });
    
    $( ".courses-btn" ).click(function() {
        wrapper.animate({
           opacity: 0,
       },200);
       page_holder.delay(200).animate({
           marginTop: 590*-5,
       },200); 
        wrapper.delay(200).animate({
           opacity: 1,
       },100);
        $(".recent-post-container").fadeOut(200);
        
        $( ".home-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".bio-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".blog-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".research-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".publications-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".courses-slider").animate({
          marginLeft: "-30%",
      },200);
      $( ".consulting-slider").animate({
          marginLeft: "-140%",
      },200);
        
         $( ".mb-home-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-bio-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-blog-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-research-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-publications-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-courses-slider").animate({
          marginLeft: "33%",
      },200);
      $( ".mb-consulting-slider").animate({
          marginLeft: "120%",
      },200);
        
        delayclosenav();
      clicks = 0;
        
        delayclosemobnav(); 
       mbclicks = 0;
        
  });
    
    
    $( ".consulting-btn" ).click(function() {
       wrapper.animate({
           opacity: 0,
       },200);
       page_holder.delay(200).animate({
           marginTop: 590*-6,
       },200); 
       wrapper.delay(200).animate({
           opacity: 1,
       },100);
        $(".recent-post-container").fadeOut(200);
       
       $( ".home-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".bio-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".blog-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".research-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".publications-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".courses-slider").animate({
          marginLeft: "-140%",
      },200);
      $( ".consulting-slider").animate({
          marginLeft: "-30%",
      },200);
       
        $( ".mb-home-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-bio-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-blog-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-research-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-publications-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-courses-slider").animate({
          marginLeft: "120%",
      },200);
      $( ".mb-consulting-slider").animate({
          marginLeft: "33%",
      },200);
        
        delayclosenav();
      clicks = 0;
        
        delayclosemobnav();
       mbclicks = 0;
        
  });
          
          
          
          
    $('.butt').click(function(e) {
       e.preventDefault();
       href = $(this).attr('href');
       $( ".float, .mfloat" ).animate({ "top": "+=15px" },300);
       $( ".text-containerhm1" ).animate({ 
       marginLeft: "-100%",
       },400);
       $('.float, .mfloat').delay(200).animate({ "top": "-=500px" }, 1000, function() {
        window.location = "sanford1.html";
    });
});
          
    $('.button1').click(function(e) {
       e.preventDefault();
       href = $(this).attr('href');
       $( ".button1" ).animate({ 
       opacity: "1",
       },200);
       $('.button1').animate({ 
       opacity: "0",
       }, 400, function() {
        window.location = "sanford.html";
    });
});
          
    $('.button2').click(function(e) {
       e.preventDefault();
       href = $(this).attr('href');
       $( ".button2" ).animate({ 
       opacity: "1",
       },200);
       $('.button2').animate({ 
       opacity: "0",
       }, 400, function() {
        window.location = "sanford1.html";
    });
});
          
    $('.button3').click(function(e) {
       e.preventDefault();
       href = $(this).attr('href');
       $( ".button3" ).animate({ 
       opacity: "1",
       },200);
       $('.button3').animate({ 
       opacity: "0",
       }, 400, function() {
        window.location = "sanford2.html";
    });
});
          
     $('.button4').click(function(e) {
       e.preventDefault();
       href = $(this).attr('href');
       $( ".button4" ).animate({ 
       opacity: "1",
       },200);
       $('.button4').animate({ 
       opacity: "0",
       }, 400, function() {
        window.location = "sanford3.html";
    });
});

});
      