<?php get_header(); ?>
<div class="cloud-holder"><div class="cloud"></div></div>



<div class="recent-post-container">
    
<div class="home-page-photo-container">
    
    <div class="home-page-photo">
      <?php $catquery = new WP_Query( 'cat=8&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
             
      <?php get_template_part( 'content', get_post_format() ); ?>
    </div>
  
    <?php endwhile; ?>
</div>
                
    <div class="recent-posts-headline">
        <div class="headline-holder">
        <p>Recent Blog Posts</p>
        </div>
                
                <div class="follow-button"></div>
                
                <div class="follow-holder">
                  <p class="follow-text">
                   <?php echo '<a href="https://www.linkedin.com/in/mark-lewis-30491548" target="_blank">follow</a>'; ?> 
                  </p>    
            </div>
                
        </div>
    
                
    <div class="recent-posts-holder">
        
<?php $catquery = new WP_Query( 'cat=14&posts_per_page=3' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
              
   <div class="recent-post">
       <!---
            <div class="recent-blog-image">
                <?//php get_template_part( 'content', get_post_format() ); ?>
            </div>
       --->
       
    <h2><a href="<?php echo get_permalink( $post->ID ); ?>"><?php the_title(); ?></a></h2>
    </div> 
              
              <?php endwhile; ?>
              </div>   
            
            </div> <!--- recent post container --->



<div class="wrapper">
    
          
       <div class="page-holder">
           
        <div class="content-container home"> 
            
           <div class="home-container">
                   <!--[if IE 8]>
                   <img class="logoie8" src="http://markolewis.com/wp-content/uploads/2017/01/mol-logo-2-bw-01.png" style="height:150px;" />
                   <![endif]--> 
               
               <div class="logo-home">
                   
            </div>
            
      </div>
           </div>
           
           
           <!--- BLOG PAGE --->
          
          <div class="content-container blog">
              <div class="small-logo-container"></div>
              
            <!---  
              <div class="picture-container">
              <?php /*
$catquery = new WP_Query( 'cat=9&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
             
				<?php get_template_part( 'content', get_post_format() ); ?>
  
			<?php endwhile; */ ?> 
              </div> --->
              
              <div class="blog-title">
               <div class="text-container">
            <?php
$catquery = new WP_Query( 'cat=3&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
  	
                   
        <div class="blog-title-holder">
            
            <div class="page-title"><?php the_title(); ?></div>
                 
                   <div class="follow-holder blog-follow">
                <div class="follow-button"></div>
                  <p class="follow-text">
                   <?php echo '<a href="https://www.linkedin.com/in/mark-lewis-30491548" target="_blank">follow</a>'; ?> 
                  </p>    
            </div>
         </div>
                   
            
                   
                   <div class="text-body">
             
				<?php get_template_part( 'content', get_post_format() ); ?>
                       <br><br>
                   </div>
  
			<?php endwhile; ?>
        
        </div> <!--- text-container --->
              </div> <!--- blog title --->
              
              <div class="posts-container">
              
              <?php
$catquery = new WP_Query( 'cat=14&posts_per_page=12' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
              
               
                      <div class="blog-post">
                          <div class="blog-image">
                   <?php get_template_part( 'content', get_post_format() ); ?>
                      </div>
                          <h2><a href="<?php echo get_permalink( $post->ID ); ?>"><?php the_title(); ?></a></h2>
                      </div>
                    
            
              
              <?php endwhile; ?>
              </div>
              
      
      </div> <!--- END BLOG PAGE --->
           
           
      
           <!--- BIO PAGE --->
           
      <div class="content-container bio"> 
          
          <div class="small-logo-container"></div>
              <div class="picture-container">
          <?php
$catquery = new WP_Query( 'cat=8&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
             
				<?php get_template_part( 'content', get_post_format() ); ?>
  
			<?php endwhile; ?>
          </div>
          <div class="text-container">
            <?php
$catquery = new WP_Query( 'cat=2&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
  	
        
             <div class="page-title"><?php the_title(); ?></div>
              
              <div class="text-body">
             
				<?php get_template_part( 'content', get_post_format() ); ?>
                  <br><br>
              </div>
  
			<?php endwhile; ?>
        
        </div> <!--- text-container --->
          
      </div> <!--- END BIO PAGE --->
           
           
           
           <!--- RESEARCH PAGE --->
          
          <div class="content-container research"> 
              <div class="small-logo-container"></div>
              <div class="picture-container">
              <?php
$catquery = new WP_Query( 'cat=10&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
             
				<?php get_template_part( 'content', get_post_format() ); ?>
  
			<?php endwhile; ?>
              </div>
      <div class="text-container">
            <?php
$catquery = new WP_Query( 'cat=4&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
  	
        
             <div class="page-title"><?php the_title(); ?></div>
          
          <div class="text-body">
             
				<?php get_template_part( 'content', get_post_format() ); ?>
              <br><br>
          </div>
  
			<?php endwhile; ?>
        
        </div> <!--- text-container --->
      </div> <!--- END RESEARCH PAGE --->
           
           
           
           <!--- PUBLICATIONS PAGE --->
          
          <div class="content-container publications"> 
              <div class="small-logo-container"></div>
              <div class="picture-container">
              <?php
$catquery = new WP_Query( 'cat=11&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
             
				<?php get_template_part( 'content', get_post_format() ); ?>
  
			<?php endwhile; ?>
              </div>
      <div class="text-container">
            <?php
$catquery = new WP_Query( 'cat=5&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
  	
        
             <div class="page-title"><?php the_title(); ?></div>
          
          <div class="text-body">
             
				<?php get_template_part( 'content', get_post_format() ); ?>
              <br><br>
          </div>
  
			<?php endwhile; ?>
        
        </div> <!--- text-container --->
      </div>  <!--- END PUBLICATIONS PAGE --->
          
           
           
           <!--- COURSES PAGE --->
           
          <div class="content-container courses"> 
              <div class="small-logo-container"></div>
              <div class="picture-container">
              <?php
$catquery = new WP_Query( 'cat=12&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
             
				<?php get_template_part( 'content', get_post_format() ); ?>
  
			<?php endwhile; ?>
              </div>
      <div class="text-container">
            <?php
$catquery = new WP_Query( 'cat=6&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
  	
        
             <div class="page-title"><?php the_title(); ?></div>
          
          <div class="text-body">
             
				<?php get_template_part( 'content', get_post_format() ); ?>
              <br><br>
          </div>
  
			<?php endwhile; ?>
        
        </div> <!--- text-container --->
      </div>  <!--- END COURSES PAGE --->
           
           
           
           <!--- CONSULTING PAGE --->
          
          <div class="content-container consulting">
              <div class="small-logo-container"></div>
              <div class="picture-container">
              <?php
$catquery = new WP_Query( 'cat=13&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
             
				<?php get_template_part( 'content', get_post_format() ); ?>
  
			<?php endwhile; ?>
              </div>
               <div class="text-container">
            <?php
$catquery = new WP_Query( 'cat=7&posts_per_page=1' ); while($catquery->have_posts()) : $catquery->the_post(); ?>
  	
        
             <div class="page-title"><?php the_title(); ?></div>
                   <div class="text-body">
             
				<?php get_template_part( 'content', get_post_format() ); ?>
                       <br><br>
                   </div>
  
			<?php endwhile; ?>
        
        </div> <!--- text-container --->
      
      </div>  <!--- END CONSULTING PAGE --->
              
          </div><!--- page holder --->
    
    <?php get_footer(); ?>
          
