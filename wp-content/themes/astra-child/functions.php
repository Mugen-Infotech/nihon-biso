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

// function custom_category_list_with_count() {
//     $categories = get_categories();
//     $output = '<ul class="custom-cat-list">';
//     foreach($categories as $category) {
//         $output .= '<li>' . 
//             '<a href="' . get_category_link($category->term_id) . '">' . 
//             $category->name . ' (' . $category->count . ')</a>' . 
//         '</li>';
//     }
//     $output .= '</ul>';
//     return $output;
// }
// add_shortcode('category_list_count', 'custom_category_list_with_count');



// Register Shortcode
function get_categories_with_counts_shortcode_x()
{
    $categories = get_categories([
        'hide_empty' => false, // show categories even if count = 0
    ]);

    ob_start(); // Start capturing HTML
    foreach ($categories as $category) {
?>
        <!-- <div class="custom-category-item" data-cat-id="<?php echo esc_attr($category->term_id); ?>">
            <h3><?php echo esc_html($category->name); ?></h3>
            <span><?php echo esc_html($category->count); ?> posts</span>
        </div> -->


        <div class="elementor-element elementor-element-afd081e e-con-full e-flex e-con e-child" data-id="afd081e" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="elementor-element elementor-element-5b50e4c elementor-widget elementor-widget-heading" data-id="5b50e4c" data-element_type="widget" data-widget_type="heading.default">
                <p class="elementor-heading-title elementor-size-default"><?php echo esc_html($category->name); ?></p>
            </div>
            <div class="elementor-element elementor-element-98320ca elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="98320ca" data-element_type="widget" data-widget_type="heading.default">
                <p class="elementor-heading-title elementor-size-default"><?php echo esc_html($category->count); ?> </p>
            </div>
        </div>
<?php
    }
    return ob_get_clean(); // Return HTML
}


function get_categories_with_counts_shortcode() {
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


function show_category_data_shortcode($atts) {
    $atts = shortcode_atts([
        'field' => '',
    ], $atts);

    return isset($_GET[$atts['field']]) ? esc_html($_GET[$atts['field']]) : '';
}
add_shortcode('show_category_data', 'show_category_data_shortcode');


add_filter( 'elementor/widget/render_content', function( $content, $widget ) {
    $content = do_shortcode( $content );
    return $content;
}, 10, 2 );



function first_50_chars_shortcode( $atts = [] ) {
    global $post; // Get the current post in the loop
    if ( ! $post ) return '';

    $content = get_post_field( 'post_content', $post->ID ); // Get content of current post
    $content = wp_strip_all_tags( $content ); // Remove HTML
    return mb_strimwidth( $content, 0, 200, '...', 'UTF-8' ); // Trim to 50 characters
}
add_shortcode('first50', 'first_50_chars_shortcode');
