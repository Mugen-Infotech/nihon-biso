<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <header id="site-header" class="bg-[#2563eb] text-white fixed w-full top-0 z-50 transition-transform duration-300 translate-y-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-14">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 flex items-center justify-center">
                        <?php
                        if (function_exists('the_custom_logo')) {
                            the_custom_logo(); // Uses WP logo set in "Customize"
                        } else {
                            echo '<img src="' . get_template_directory_uri() . '/assets/logo.svg" alt="Logo" class="w-full h-full" />';
                        }
                        ?>
                    </div>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="text-lg font-bold whitespace-nowrap hover:text-blue-100 transition-colors">
                        日本ビソー株式会社
                    </a>
                </div>

                <nav class="hidden md:flex">
                    <?php
                    $navigation_items = [
                        ['name' => '会社紹介',   'href' => '/company'],
                        ['name' => '業務案内',   'href' => '/services'],
                        ['name' => '対応エリア', 'href' => '/area'],
                        ['name' => '廃棄物ガイド', 'href' => '/waste-guide'],
                        ['name' => '作業実績',   'href' => '/work-results'],
                        ['name' => 'ブログ',     'href' => '/blog'],
                        ['name' => '採用情報',   'href' => '/careers'],
                        ['name' => 'お問い合わせ', 'href' => '/contact'],
                        ['name' => 'Webお見積り', 'href' => '/estimate'],
                    ];

                    foreach ($navigation_items as $item) {
                        echo '<a href="' . esc_url(home_url($item['href'])) . '" class="px-3 py-2 text-sm hover:text-blue-200 transition-colors whitespace-nowrap">'
                            . esc_html($item['name']) .
                            '</a>';
                    }
                    ?>
                </nav>
            </div>
        </div>
    </header>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let lastScrollY = window.scrollY;
            const header = document.getElementById("site-header");

            window.addEventListener("scroll", function() {
                if (window.scrollY > lastScrollY) {
                    header.classList.add("-translate-y-full");
                    header.classList.remove("translate-y-0");
                } else {
                    header.classList.remove("-translate-y-full");
                    header.classList.add("translate-y-0");
                }
                lastScrollY = window.scrollY;
            });
        });
    </script>