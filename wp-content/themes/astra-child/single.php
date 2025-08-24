<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header(); ?>






	<div >



	<?php
		echo \Elementor\Plugin::instance()->frontend->get_builder_content_for_display(2098);
	?>



	</div>



<?php if ( astra_page_layout() === 'right-sidebar' ) { ?>

	<?php get_sidebar(); ?>

<?php } ?>

<?php get_footer(); ?>
