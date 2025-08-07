  <header class="bg-primary text-white fixed-top w-100 z-50">
        <div class="container">
            <div class="row align-items-center py-2">
                <div class="col-md-auto d-flex align-items-center gap-3">
                    <div class="logo-container" style="width: 32px; height: 32px;">
                        <?php if (has_custom_logo()) : ?>
                            <?php the_custom_logo(); ?>
                        <?php else : ?>
                            <img src="<?php echo get_theme_mod('biso_logo'); ?>"
                                alt="<?php bloginfo('name'); ?> ロゴ"
                                width="32"
                                height="32"
                                class="img-fluid">
                        <?php endif; ?>
                    </div>
                    <a class="fs-5 fw-bold text-white text-decoration-none"
                        href="<?php echo esc_url(home_url('/')); ?>">
                        <?php bloginfo('name'); ?>
                    </a>
                </div>
                <div class="col">
                    <nav class="d-none d-md-flex justify-content-end">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'main_menu',
                            'menu_id'=> 'biso_nav',
                            'menu_class' => 'navbar-nav flex-row',
                            'container' => false,
                            'fallback_cb' => false,
                            // 'items_wrap' => '%3$s',
                            // 'walker' => new Bootstrap_5_Nav_Walker(),
                            'add_li_class' => 'nav-item',
                            'add_link_class' => 'nav-link px-3 py-2 text-white text-decoration-none text-white'
                        ));
                        ?>
                    </nav>
                    <!-- Mobile menu button -->
                    <button class="navbar-toggler d-md-none bg-white bg-opacity-10 border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <!-- Mobile menu -->
            <div class="collapse navbar-collapse d-md-none" id="navbarNav">
                <!-- <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'menu_class' => 'navbar-nav',
                            'container' => false,
                            'fallback_cb' => false,
                            'walker' => new Bootstrap_5_Nav_Walker(),
                            'add_li_class' => 'nav-item',
                            'add_link_class' => 'nav-link text-white'
                        ));
                        ?> -->
            </div>
        </div>
    </header>