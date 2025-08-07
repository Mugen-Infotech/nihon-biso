<?php 
// Theme title
add_theme_support('title-tag');

function biso_css_js_file_calling() {
    // Theme stylesheet
    wp_enqueue_style('biso-style', get_stylesheet_uri());
    
    // Bootstrap CSS
    wp_register_style('bootstrap', get_template_directory_uri().'/css/bootstrap.css', array(), '5.3.7', 'all');
    
    // Custom CSS
    wp_register_style('custom', get_template_directory_uri().'/css/custom.css', array(), '1.0.0', 'all');
    
    // Enqueue registered styles
    wp_enqueue_style('bootstrap');
    wp_enqueue_style('custom');
    
    // JavaScript files
    // jQuery is often needed and comes with WordPress
    wp_enqueue_script('jquery');
    
    // Bootstrap JS - depends on jQuery
    wp_register_script('bootstrap', get_template_directory_uri().'/js/bootstrap.js', array('jquery'), '5.3.7', true);
    
    // Custom JS - depends on jQuery and Bootstrap
    wp_register_script('custom', get_template_directory_uri().'/js/main.js', array('jquery', 'bootstrap'), '1.0.0', true);
    
    // Enqueue registered scripts
    wp_enqueue_script('bootstrap');
    wp_enqueue_script('custom');
}

// Correct hook name: wp_enqueue_scripts (with an 's')
add_action('wp_enqueue_scripts', 'biso_css_js_file_calling');


function biso_customizer_registration($wp_customize){
    $wp_customize->add_section('biso_header_area', array(
        'title' => __('Header Area', 'nihon-biso'),
        'description'=> 'Customize header'
    ));

     $wp_customize->add_setting('biso_logo', array(
        'default'=> get_bloginfo('template_directory').'/img/logo.svg',

     ));

     $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'biso_logo',array(
        'label'=> "Logo upload",
        'setting'=> 'biso_logo',
        'section'=> 'biso_header_area'
     )));
}

add_action('customize_register','biso_customizer_registration');

register_nav_menu('main_menu', __('Main Menu', 'nihon-biso'));