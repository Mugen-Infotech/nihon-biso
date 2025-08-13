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

function custom_category_list_with_count() {
    $categories = get_categories();
    $output = '<ul class="custom-cat-list">';
    foreach($categories as $category) {
        $output .= '<li>' . 
            '<a href="' . get_category_link($category->term_id) . '">' . 
            $category->name . ' (' . $category->count . ')</a>' . 
        '</li>';
    }
    $output .= '</ul>';
    return $output;
}
add_shortcode('category_list_count', 'custom_category_list_with_count');

