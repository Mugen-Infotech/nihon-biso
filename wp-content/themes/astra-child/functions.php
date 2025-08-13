<?php
// Enqueue parent theme styles
function astra_child_enqueue_styles()
{
    wp_enqueue_style('astra-parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'astra_child_enqueue_styles');


add_action('wp_footer', function () {
    if (! is_page(42)) {
        echo do_shortcode('[elementor-template id="532"]');
    }
});
