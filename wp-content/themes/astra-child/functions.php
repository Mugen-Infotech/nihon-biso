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



// Register Shortcode
function get_categories_with_counts_shortcode()
{
    $categories = get_categories([
        'hide_empty' => false, // show categories even if count = 0
    ]);

    ob_start(); // Start capturing HTML

    echo '<div class="category-cards-wrapper">';
    foreach ($categories as $category) {
?>






        <div class="elementor-widget-wrap elementor-flex-align-center elementor-element-populated elementor-inline-flex">
            <div class="elementor-heading-title elementor-size-default category-name">
                <?php echo esc_html($category->name); ?>
            </div>
            <div class="elementor-badge elementor-badge-number category-badge">
                <?php echo esc_html($category->count); ?>
            </div>
        </div>



<?php
    }

    echo '</div>';
    return ob_get_clean(); // Return HTML
}


add_shortcode('category_cards', 'category_cards_shortcode');





function get_categories_with_counts_shortcode_x()
{
    $categories = get_categories(['hide_empty' => false]);
    ob_start();

    // foreach ($categories as $category) {
    //     // Pass data to Elementor template via dynamic tags
    //     echo do_shortcode('[elementor-template id="783"]'); // Replace 1234 with your template ID
    // }

    foreach ($categories as $category) {
        set_query_var('cat_name', $category->name);
        set_query_var('cat_count', $category->count);

        echo do_shortcode('[elementor-template id="783"]');
    }


    //     foreach ($categories as $category) {
    //     echo do_shortcode(
    //         '[elementor-template id="783" cat_name="' . esc_attr($category->name) . '" cat_count="' . esc_attr($category->count) . '"]'
    //     );
    // }

    return ob_get_clean();
}

add_shortcode('category_counts', 'get_categories_with_counts_shortcode');


function show_category_data_shortcode($atts)
{
    $atts = shortcode_atts([
        'field' => '',
    ], $atts);

    return isset($_GET[$atts['field']]) ? esc_html($_GET[$atts['field']]) : '';
}
add_shortcode('show_category_data', 'show_category_data_shortcode');


add_filter('elementor/widget/render_content', function ($content, $widget) {
    $content = do_shortcode($content);
    return $content;
}, 10, 2);



function first_50_chars_shortcode($atts = [])
{
    global $post; // Get the current post in the loop
    if (! $post) return '';

    $content = get_post_field('post_content', $post->ID); // Get content of current post
    $content = wp_strip_all_tags($content); // Remove HTML
    return mb_strimwidth($content, 0, 200, '...', 'UTF-8'); // Trim to 50 characters
}
add_shortcode('first50', 'first_50_chars_shortcode');
