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

<script>
(function(){
  const uploadArea = document.getElementById('custom-upload-area');
  const fileInput = document.getElementById('custom-upload');
  const previewBox = document.getElementById('image-preview');
  const counter = document.getElementById('image-counter');
  const errorBox = document.getElementById('image-error');
  const MAX_IMAGES = 5;

  let imagesArray = [];

  if(!uploadArea || !fileInput || !previewBox) return;

  uploadArea.addEventListener('click', () => fileInput.click());

  uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.classList.add('hover');
  });
  uploadArea.addEventListener('dragleave', e => {
    e.preventDefault();
    uploadArea.classList.remove('hover');
  });
  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('hover');
    handleFiles(e.dataTransfer.files);
  });

  fileInput.addEventListener('change', () => handleFiles(fileInput.files));

  function handleFiles(files){
    errorBox.textContent = '';
    for(let file of files){
      if(!file.type.startsWith('image/')) continue;
      if(imagesArray.length >= MAX_IMAGES){
        // Add your error message here if needed
        // errorBox.textContent = "Maximum 5 images allowed";
        break;
      }
      imagesArray.push(file);
      addPreview(file, imagesArray.length - 1);
    }
    updateFileInput();
    updateCounter();
  }

  function addPreview(file, index){
    const reader = new FileReader();
    reader.onload = e => {
      const container = document.createElement('div');
      container.classList.add('preview-item');
      container.dataset.index = index;

      const img = document.createElement('img');
      img.src = e.target.result;
      img.title = file.name;

      const filename = document.createElement('div');
      filename.textContent = file.name;
      filename.classList.add('filename');

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = '×';
      btn.classList.add('delete-btn');
      btn.addEventListener('click', () => {
        // Remove only this image
        const idx = imagesArray.indexOf(file);
        if(idx > -1){
          imagesArray.splice(idx, 1);
          container.remove();
          updateFileInput();
          updateCounter();
        }
      });

      container.appendChild(img);
      container.appendChild(filename);
      container.appendChild(btn);
      previewBox.appendChild(container);
    };
    reader.readAsDataURL(file);
  }

  function updateFileInput(){
    const dataTransfer = new DataTransfer();
    imagesArray.forEach(file => dataTransfer.items.add(file));
    fileInput.files = dataTransfer.files;

  // Update CF7 hidden file field
  const cf7FileField = document.getElementById('cf7-file-field');
	  if(cf7FileField){
		cf7FileField.files = dataTransfer.files;
	  }
	}


  function updateCounter(){
    counter.textContent = `${imagesArray.length} / ${MAX_IMAGES} images uploaded`;
  }
})();
</script>



</body>

</html>