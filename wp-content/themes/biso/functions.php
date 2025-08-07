    <?php
    /**
     * Twenty Twenty functions and definitions
     *
     * @link https://developer.wordpress.org/themes/basics/theme-functions/
     *
     * @package WordPress
     * @subpackage Twenty_Twenty
     * @since Twenty Twenty 1.0
     */

    function my_minimal_theme_scripts()
    {
        wp_enqueue_style('my-minimal-theme-style', get_stylesheet_uri());
    }
    add_action('wp_enqueue_scripts', 'my_minimal_theme_scripts');

    function yourtheme_enqueue_styles()
    {
        wp_enqueue_style('tailwind', get_template_directory_uri() . '/style.css', [], '1.0');
    }
    add_action('wp_enqueue_scripts', 'yourtheme_enqueue_styles');
    ?>
