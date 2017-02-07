$(document).ready(function(){
          
         var container = $(".content-container");
         var container_left = parseInt(container.css('marginLeft'));
         var container_width = parseInt(container.css('width'));
         var wrapper = $(".wrapper");
         var slide_height = parseInt(wrapper.css('height'));
         var page_holder = $(".page-holder");
    
         var home = $('.home');
         var blog = $('.blog');
         var bio = $('.bio');
         var research = $('.research');
         var publications = $('.publications');
         var courses = $('.courses');
         var consulting = $('.consulting');
    
         var slider = $('.slider');
         var mbslider = $('.mb-slider');
          
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
        $( ".nav-container" ).delay(500).animate({
          marginLeft: "-195px",
          },200); $(".hamburger").delay(500).animate({
           opacity: "1",
       },200); $(".close-button").delay(500).animate({
           opacity: "0",
       },200); container.animate({
           marginLeft: "5%",
       },200); container.animate({
           width: "90%",
       },200); $(".recent-post-container").delay(300).animate({
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
    $(".mb-hamburger").delay(500).animate({
           opacity: "1",
       },200); $(".mb-close-button").delay(500).animate({
           opacity: "0",
       },200); $( ".mobile-nav-container" ).delay(500).animate({
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
           marginLeft: container_left + 100,
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
       container.fadeOut(200);
       home.delay(300).fadeIn(200);
       $(".recent-post-container").fadeIn(200);
        
      
        slider.animate({
          marginLeft: "-140%",
      },200);
        $( ".home-slider").animate({
          marginLeft: "-30%",
      },200);
        
        mbslider.animate({
          marginLeft: "120%",
      },200);
        $( ".mb-home-slider").animate({
          marginLeft: "33%",
      },200);
        
      delayclosenav();
      clicks = 0;
        
      delayclosemobnav();
       mbclicks = 0;
        
  });     
    
  $( ".blog-btn" ).click(function() {
       container.fadeOut(200);
       blog.delay(300).fadeIn(200);
      $(".recent-post-container").fadeOut(200);
      
      slider.animate({
          marginLeft: "-140%",
      },200);
        $( ".blog-slider").animate({
          marginLeft: "-30%",
      },200);
      
       mbslider.animate({
          marginLeft: "120%",
      },200);
        $( ".mb-blog-slider").animate({
          marginLeft: "33%",
      },200);
      
      delayclosenav();
      clicks = 0;
      
      delayclosemobnav();
      mbclicks = 0;
        
  });
    
   $( ".bio-btn" ).click(function() {
       container.fadeOut(200);
       bio.delay(300).fadeIn(200); 
       $(".recent-post-container").fadeOut(200);
       
       slider.animate({
          marginLeft: "-140%",
      },200);
        $( ".bio-slider").animate({
          marginLeft: "-30%",
      },200);
       
        mbslider.animate({
          marginLeft: "120%",
      },200);
        $( ".mb-bio-slider").animate({
          marginLeft: "33%",
      },200);
       
       delayclosenav();
       clicks = 0;
       
       delayclosemobnav();
       mbclicks = 0;
        
  });
    
    $( ".research-btn" ).click(function() {
        container.fadeOut(200);
       research.delay(300).fadeIn(200);
      $(".recent-post-container").fadeOut(200);
        
        slider.animate({
          marginLeft: "-140%",
      },200);
        $( ".research-slider").animate({
          marginLeft: "-30%",
      },200);
        
         mbslider.animate({
          marginLeft: "120%",
      },200);
        $( ".mb-research-slider").animate({
          marginLeft: "33%",
      },200);
        
        delayclosenav();
        clicks = 0;
        
        delayclosemobnav();
       mbclicks = 0;
        
  });
    
    $( ".publications-btn" ).click(function() {
        container.fadeOut(200);
       publications.delay(300).fadeIn(200);
      $(".recent-post-container").fadeOut(200);
        
        slider.animate({
          marginLeft: "-140%",
      },200);
        $( ".publications-slider").animate({
          marginLeft: "-30%",
      },200);
        
         mbslider.animate({
          marginLeft: "120%",
      },200);
        $( ".mb-publications-slider").animate({
          marginLeft: "33%",
      },200);
        
       delayclosenav();
      clicks = 0;
        
        delayclosemobnav();
       mbclicks = 0;
        
  });
    
    $( ".courses-btn" ).click(function() {
        container.fadeOut(200);
       courses.delay(300).fadeIn(200);
      $(".recent-post-container").fadeOut(200);
        
        slider.animate({
          marginLeft: "-140%",
      },200);
        $( ".courses-slider").animate({
          marginLeft: "-30%",
      },200);
        
         mbslider.animate({
          marginLeft: "120%",
      },200);
        $( ".mb-courses-slider").animate({
          marginLeft: "33%",
      },200);
        
        delayclosenav();
      clicks = 0;
        
        delayclosemobnav(); 
       mbclicks = 0;
        
  });
    
    
    $( ".consulting-btn" ).click(function() {
       container.fadeOut(200);
       consulting.delay(300).fadeIn(200);
      $(".recent-post-container").fadeOut(200);
       
       slider.animate({
          marginLeft: "-140%",
      },200);
        $( ".consulting-slider").animate({
          marginLeft: "-30%",
      },200);
       
        mbslider.animate({
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
          
          

});
      
