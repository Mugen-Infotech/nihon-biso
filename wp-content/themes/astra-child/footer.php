<?php

/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astra
 * @since 1.0.0
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

?>
<?php astra_content_bottom(); ?>
</div> <!-- ast-container -->
</div><!-- #content -->
<?php
astra_content_after();

astra_footer_before();

astra_footer();

astra_footer_after();
?>
</div><!-- #page -->
<?php
astra_body_bottom();
wp_footer();
?>

<script>
	// Header Animation
	document.addEventListener("DOMContentLoaded", function() {
		// Inject CSS styles into <head>
		const style = document.createElement('style');
		style.innerHTML = `
    #masthead {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      transition: top 0.3s ease-in-out;
    }
  `;
		document.head.appendChild(style);

		// Scroll detection logic
		let lastScrollTop = 0;
		const header = document.getElementById("masthead");

		if (header) {
			window.addEventListener("scroll", function() {
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

				if (scrollTop > lastScrollTop) {
					// Scrolling down — hide header fully
					header.style.top = `-${header.offsetHeight}px`;
				} else {
					// Scrolling up — show header
					header.style.top = "0";
				}

				lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
			});
		}
	});

	// Sticky nav animation
	const btn = document.querySelector('.elementor-element-b422347');
	let scrollTimer;

	window.addEventListener('scroll', () => {
		// While scrolling: move slightly left
		btn.style.transform = 'translateY(-50%) translateX(-8px)';

		// Clear previous timer
		clearTimeout(scrollTimer);

		// When scrolling stops: move back to right: 0
		scrollTimer = setTimeout(() => {
			btn.style.transform = 'translateY(-50%) translateX(0)';
		}, 150); // delay in ms
	});
</script>


</body>

</html>