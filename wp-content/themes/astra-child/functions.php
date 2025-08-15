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
        'hide_empty' => false,
    ]);
    $current_cat = isset($_GET['filter_cat']) ? intval($_GET['filter_cat']) : 0;

    ob_start();

    echo '<div class="category-cards-wrapper">';

    echo ' <a href="<?php echo esc_url($category_link); ?>" class="elementor-widget-wrap elementor-flex-align-center elementor-element-populated elementor-inline-flex category-link" style="text-decoration: none;">
            <div class="elementor-heading-title elementor-size-default category-name">
              すべて
            </div>
      
        </a>';
    foreach ($categories as $category) {
        // Use your blog page URL + query param
        $category_link = add_query_arg('filter_cat', $category->term_id, site_url('/blogs/'));
        $active_class = ($current_cat === $category->term_id) ? ' active' : '';

?>
        <a href="<?php echo esc_url($category_link); ?>" class="elementor-widget-wrap elementor-flex-align-center elementor-element-populated elementor-inline-flex category-link<?php echo $active_class; ?>"

        style="text-decoration: none;">
            <div class="elementor-heading-title elementor-size-default category-name">
                <?php echo esc_html($category->name); ?>
            </div>
            <div class="elementor-badge elementor-badge-number category-badge">
                <?php echo esc_html($category->count); ?>
            </div>
        </a>
<?php
    }
    echo '</div>';
    return ob_get_clean();
}


// add_shortcode('categories_with_counts', 'get_categories_with_counts_shortcode');



add_shortcode('category_cards', 'category_cards_shortcode');


function shortcode_latest_sticky_post_data($atts)
{
    $atts = shortcode_atts(array(
        'data' => 'title', // default
    ), $atts, 'latest_sticky_post');

    // Get sticky posts
    $sticky_posts = get_option('sticky_posts');

    if (empty($sticky_posts)) {
        return '';
    }

    // Query the latest sticky post
    $args = array(
        'post__in'            => $sticky_posts,
        'posts_per_page'      => 1,
        'ignore_sticky_posts' => 1,
        'orderby'             => 'date',
        'order'               => 'DESC'
    );

    $query = new WP_Query($args);

    if (! $query->have_posts()) {
        return '';
    }

    $sticky_post = $query->posts[0]; // get the post object directly

    // Make sure functions use this post
    $post_id = $sticky_post->ID;



    $result = '';
    switch (strtolower($atts['data'])) {

        case 'title':
            $result = get_the_title($post_id);
            break;

        case 'url':
            $result = esc_url(get_permalink($post_id));
            break;

        case 'image':
            if (has_post_thumbnail($post_id)) {
                $result = esc_url_raw(get_the_post_thumbnail_url($post_id, 'full'));
            } else {
                $result = esc_url_raw(get_template_directory_uri() . '/assets/default-placeholder.png');
            }
            break;

        case 'category':
            $categories = get_the_category($post_id);
            if (! empty($categories)) {
                $result = esc_html($categories[0]->name);
            }
            break;

        case 'date':
            $result = get_the_date('', $post_id);
            break;

        case 'author':
            $result = esc_html(get_the_author_meta('display_name', $sticky_post->post_author));
            break;

        case 'tags':
            $tags = get_the_tags($post_id);
            if (! empty($tags)) {
                $tag_spans = array();
                foreach ($tags as $tag) {
                    $tag_spans[] = '<span class="post-tag">' . esc_html($tag->name) . '</span>';
                }
                $result = implode(' ', $tag_spans);
            }
            break;

        case 'excerpt':
            $content = get_post_field('post_content', $post_id);
            $content = wp_strip_all_tags($content);
            $result  = esc_html(mb_strimwidth($content, 0, 200, '...', 'UTF-8'));
            break;

        default:
            $result = '';
            break;
    }

    return $result;
}

add_shortcode('latest_sticky_post', 'shortcode_latest_sticky_post_data');

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


add_action('elementor/query/featured_posts', function ($query) {
    $sticky_posts = get_option('sticky_posts');
    if (! empty($sticky_posts)) {
        $query->set('post__in', $sticky_posts);
        $query->set('ignore_sticky_posts', 1); // Prevent normal sticky behavior
    } else {
        $query->set('post__in', array(0)); // No sticky posts, return empty
    }
});


add_action('elementor/query/blog_loop', function ($query) {
    if (isset($_GET['filter_cat']) && !empty($_GET['filter_cat'])) {
        $cat_id = intval($_GET['filter_cat']);
        $query->set('cat', $cat_id); // filter by category
    }
});
