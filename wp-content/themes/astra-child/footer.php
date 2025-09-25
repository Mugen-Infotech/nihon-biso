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
  (function() {

    const container = document.getElementById('uploader-5');
    if (!container) return; // Stop if container not on the page

    const uploadArea = document.getElementById('custom-upload-area');
    const fileInput = document.getElementById('custom-upload');
    const previewBox = document.getElementById('image-preview');
    const counter = document.getElementById('image-counter');
    const errorBox = document.getElementById('image-error');
    const MAX_IMAGES = 5;

    let imagesArray = [];

    if (!uploadArea || !fileInput || !previewBox) return;

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

    function addImage(file) {
      imagesArray.push(file); // allow duplicates
      addPreview(file, imagesArray.length - 1);
      updateFileInputs();
      updateCounter();
    }

    let errorTimeout;

    function showError(message) {
      errorBox.textContent = message;
      if (errorTimeout) clearTimeout(errorTimeout);
      errorTimeout = setTimeout(() => {
        errorBox.textContent = "";
        errorTimeout = null;
      }, 5000);
    }

    function handleFiles(files) {
      errorBox.textContent = '';

      for (let file of files) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) continue;
        
		if (imagesArray.length >= MAX_IMAGES) {
          showError(`最大 ${MAX_IMAGES} 枚までです`);
          break; // stop processing further files
        }

        if (file.size > 1 * 1024 * 1024) { // >1MB
          resizeImage(file, 1).then(resizedFile => {

            if (imagesArray.length >= MAX_IMAGES) {
              showError(`最大 ${MAX_IMAGES} 枚までです`);
              return;
            }
            addImage(resizedFile);
          }).catch(err => console.error("Resize failed", err));
        } else {
									            console.log("direct add");

          addImage(file); // directly add if <1MB
        }
      }
		
	  fileInput.value = '';
    }

    function resizeImage(file, maxSizeMB = 1, maxWidth = 1920, maxHeight = 1080) {
      return new Promise((resolve, reject) => {
        if (!file.type.startsWith("image/")) return reject("Not an image");

        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          // Maintain aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          let quality = 0.9;

          function attemptCompress() {
            canvas.toBlob(blob => {
              if (blob.size / 1024 / 1024 > maxSizeMB && quality > 0.1) {
                quality -= 0.1;
                attemptCompress();
              } else {
                resolve(new File([blob], file.name, {
                  type: blob.type
                }));
              }
            }, 'image/jpeg' , quality);
          }

          attemptCompress();
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
      });
    }


    function addPreview(file, index) {
      const reader = new FileReader();
      reader.onload = e => {
        const container = document.createElement('div');
        container.classList.add('preview-item');
        container.dataset.index = index;

        const img = document.createElement('img');
        img.src = e.target.result;
        img.title = file.name;

        //       const filename = document.createElement('div');
        //       filename.textContent = file.name;
        //       filename.classList.add('filename');

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = '×';
        btn.classList.add('delete-btn');
        btn.addEventListener('click', () => {
          // Remove only this image
          const idx = imagesArray.indexOf(file);
          if (idx > -1) {
            imagesArray.splice(idx, 1);
            container.remove();
            updateFileInputs();
            updateCounter();
            fileInput.value = '';
            errorBox.textContent = '';
          }
        });

        container.appendChild(img);
        //       container.appendChild(filename);
        container.appendChild(btn);
        previewBox.appendChild(container);
      };
      reader.readAsDataURL(file);
    }

    function updateFileInputs() {
      // Reset all 5 hidden fields first
      for (let i = 1; i <= 5; i++) {
        const input = document.getElementById(`cf7-file-field-${i}`);
        if (input) {
          input.value = "";
        }
      }

      // Map current imagesArray into fields
      imagesArray.forEach((file, idx) => {
        if (idx < 5) {
          const input = document.getElementById(`cf7-file-field-${idx+1}`);
          if (input) {
            const dt = new DataTransfer();
            dt.items.add(file);
            input.files = dt.files;
          }
        }
      });
    }




    function updateCounter() {
      counter.textContent = `アップロード済み写真数： ${imagesArray.length} / ${MAX_IMAGES}`;
    }


    // Expose a reset function
    window.customUploader = {
      reset: function() {
        imagesArray = [];
        previewBox.innerHTML = '';
        counter.textContent = `アップロード済み写真数： 0 / ${MAX_IMAGES}`;
        fileInput.value = '';
        updateFileInputs(); // clears hidden CF7 fields
      },
      updateFileInputs: updateFileInputs // optional to call manually if needed
    };


  })(window);

  document.addEventListener('wpcf7mailsent', function(event) {
    if (window.customUploader) {
      customUploader.reset();
    }
  }, false);

</script>



<script>
  (function() {
    const uploader10 = document.getElementById('uploader-10');
    if (!uploader10) return; // Stop if container not on the page

    const MAX_TOTAL_SIZE = 100 * 1024 * 1024; // 20MB
    const MAX_FILES = 10;

    const previewBox = document.getElementById("image-preview");
    const counter = document.getElementById("image-counter");
    const errorBox = document.getElementById("image-error");

    const cf7Ids = [
      "cf7-image-1", "cf7-image-2", "cf7-image-3", "cf7-image-4", "cf7-image-5",
      "cf7-image-6", "cf7-image-7", "cf7-image-8", "cf7-image-9", "cf7-image-10"
    ];

    let imagesArray = [];

    // --- Uploader elements ---
    const uploaders = [{
        container: document.getElementById("capture-uploader"),
        input: document.getElementById("capture-input")
      },
      {
        container: document.getElementById("file-uploader"),
        input: document.getElementById("file-input")
      }
    ];

    uploaders.forEach(({
      container,
      input
    }) => {

      // Click opens file dialog
      container.addEventListener("click", e => {
        if (e.target !== input) input.click();
      });

      // Drag & drop
      container.addEventListener("dragover", e => {
        e.preventDefault();
        container.classList.add("dragging");
      });
      container.addEventListener("dragleave", () => container.classList.remove("dragging"));
      container.addEventListener("drop", e => {
        e.preventDefault();
        container.classList.remove("dragging");
        handleFiles(e.dataTransfer.files);
		input.value = "";
      });

      // Input change
//       input.addEventListener("change", () => handleFiles(input.files));
		
		// Input change
	input.addEventListener("change", () => {
		const files = input.files;   // store selected files
		handleFiles(files);          // process them
		input.value = "";            // reset to allow same file next time
	});

    });

    let errorTimeout;

    function showError(message) {
      errorBox.textContent = message;

      // Clear previous timeout if still running
      if (errorTimeout) clearTimeout(errorTimeout);

      // Hide after 5 seconds
      errorTimeout = setTimeout(() => {
        errorBox.textContent = "";
        errorTimeout = null;
      }, 5000);
    }

    // --- Handle files ---
    function handleFiles(files) {
      errorBox.textContent = "";

      for (let file of files) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(file.type)) continue;
        
        if (imagesArray.length >= MAX_FILES) {
          showError(`最大 ${MAX_FILES} 枚までです`);
          break;
        } else {

          if (file.size > 1 * 1024 * 1024) {
            resizeImage(file, 1).then(resizedFile => {

              if (imagesArray.length >= MAX_FILES) {
               showError(`最大 ${MAX_FILES} 枚までです`);
                return; // stop adding
              }
              imagesArray.push(resizedFile);
              addPreview(resizedFile);
              updateCF7Fields();
              updateCounter();
            }).catch(err => {
              console.error("Resize failed", err);
            });
          } else {
            imagesArray.push(file);
            addPreview(file);
            updateCF7Fields();
            updateCounter();
          }
        }
      }
    }

    function resizeImage(file, maxSizeMB = 1, maxWidth = 1920, maxHeight = 1080) {
      return new Promise((resolve, reject) => {
        if (!file.type.startsWith("image/")) return reject("Not an image");

        const img = new Image();
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          // Maintain aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          // Convert to Blob and adjust quality if needed
          let quality = 0.9;

          function attemptCompress() {
            canvas.toBlob(blob => {
              if (blob.size / 1024 / 1024 > maxSizeMB && quality > 0.1) {
                quality -= 0.1; // reduce quality
                attemptCompress();
              } else {
                resolve(new File([blob], file.name, {
                  type: blob.type
                }));
              }
            }, 'image/jpeg' , quality);
          }

          attemptCompress();
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
      });
    }


    // --- Add preview ---
    function addPreview(file) {
      const reader = new FileReader();
      reader.onload = e => {
        const div = document.createElement("div");
        div.classList.add("preview-item");

        const img = document.createElement("img");
        img.src = e.target.result;
        div.appendChild(img);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "×";
        btn.classList.add('delete-btn');

        btn.addEventListener("click", () => {
          const idx = imagesArray.indexOf(file);
          if (idx > -1) {
            imagesArray.splice(idx, 1);
            div.remove();
            updateCF7Fields();
            updateCounter();

            // 🔥 reset file inputs so same image can be picked again
            uploaders.forEach(u => u.input.value = "");
          }
        });

        div.appendChild(btn);
        previewBox.appendChild(div);
      };
      reader.readAsDataURL(file);
    }

    // --- Update CF7 hidden fields ---
    function updateCF7Fields() {
      cf7Ids.forEach((id, idx) => {
        const input = document.getElementById(id);
        if (input) {
          const dt = new DataTransfer();
          if (imagesArray[idx]) dt.items.add(imagesArray[idx]);
          input.files = dt.files;
        }
      });
    }

    // --- Counter ---
    function updateCounter() {
      counter.textContent = `アップロード済み写真数： ${imagesArray.length} / ${MAX_FILES}`;
    }

    // --- Reset after CF7 send ---
    document.addEventListener("wpcf7mailsent", () => {
      imagesArray = [];
      previewBox.innerHTML = "";
      uploaders.forEach(u => u.input.value = "");
      updateCF7Fields();
      updateCounter();
      errorBox.textContent = "";
    });

  })();
</script>





</body>

</html>