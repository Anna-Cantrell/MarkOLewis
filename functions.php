<?php


function lewis_scripts() {
	wp_enqueue_style( 'dev', get_template_directory_uri() . '/dev.css', array(), '3.3.6' );
	wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_script( 'lewis', get_template_directory_uri() . '/lewis.js', array('jquery'), '3.3.6', true );
}

add_action( 'wp_enqueue_scripts', 'lewis_scripts' );

/*
function appstat_google_fonts() {
				wp_register_style('OpenSans', 'http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');
				wp_enqueue_style( 'OpenSans');
    
                wp_register_style('Pacifico', 'https://fonts.googleapis.com/css?family=Pacifico');
				wp_enqueue_style( 'Pacifico');
                
                wp_register_style('Permanent Marker', 'https://fonts.googleapis.com/css?family=Permanent+Marker');
				wp_enqueue_style( 'Permanent Marker');
    
		}

add_action('wp_print_styles', 'appstat_google_fonts');
*/

function theme_typekit() {
      wp_enqueue_script( 'theme_typekit', 'https://use.typekit.net/ndz4opl.js', '', false);
  }
  add_action( 'wp_enqueue_scripts', 'theme_typekit' );

  function theme_typekit_inline() {
    if ( wp_script_is( 'theme_typekit', 'done' ) ) { ?>
      <script>try{Typekit.load();}catch(e){}</script>
    <?php }
  }
  add_action( 'wp_head', 'theme_typekit_inline' );



