<footer class="bg-[#2563eb] text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1">
                <a href="/" class="text-white text-xl tracking-wide">
                    日本ビソー株式会社
                </a>
                <p class="mt-4 text-sm">
                    〒221-0014<br />
                    横浜市神奈川区入江2-18 PPIH大口ビル208
                </p>
                <p class="mt-2 text-sm">
                    TEL: 045-401-7778（代表）<br />
                    FAX: 045-401-6948
                </p>
                <p class="mt-2 text-sm">
                    メール: info@nihon-biso.co.jp<br />
                    受付時間: 8：00〜17：00
                </p>
            </div>

            <?php
            $footer_navigation = [
                'company' => [
                    ['name' => '会社紹介', 'href' => '/company'],
                    ['name' => '業務案内', 'href' => '/services'],
                    ['name' => '対応エリア', 'href' => '/area'],
                    ['name' => '廃棄物ガイド', 'href' => '/waste-guide'],
                    ['name' => '作業実績', 'href' => '/work-results'],
                    ['name' => 'ブログ', 'href' => '/blog'],
                ],
                'support' => [
                    ['name' => 'お問い合わせ', 'href' => '/contact'],
                    ['name' => 'Webお見積り', 'href' => '/estimate'],
                    ['name' => '採用情報', 'href' => '/careers'],
                ],
                'legal' => [
                    ['name' => 'プライバシーポリシー', 'href' => '/privacy-policy'],
                    ['name' => '利用規約', 'href' => '#'],
                    ['name' => 'サイトマップ', 'href' => '#'],
                ],
            ];
            ?>

            <div>
                <h3 class="text-white tracking-wide mb-4">企業情報</h3>
                <ul class="space-y-2">
                    <?php foreach ($footer_navigation['company'] as $item): ?>
                        <li>
                            <a href="<?php echo esc_url($item['href']); ?>" class="text-sm hover:text-green-200 transition-colors">
                                <?php echo esc_html($item['name']); ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <div>
                <h3 class="text-white tracking-wide mb-4">サポート</h3>
                <ul class="space-y-2">
                    <?php foreach ($footer_navigation['support'] as $item): ?>
                        <li>
                            <a href="<?php echo esc_url($item['href']); ?>" class="text-sm hover:text-green-200 transition-colors">
                                <?php echo esc_html($item['name']); ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <div>
                <h3 class="text-white tracking-wide mb-4">法的情報</h3>
                <ul class="space-y-2">
                    <?php foreach ($footer_navigation['legal'] as $item): ?>
                        <li>
                            <a href="<?php echo esc_url($item['href']); ?>" class="text-sm hover:text-green-200 transition-colors">
                                <?php echo esc_html($item['name']); ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>

        <div class="mt-8 pt-8 border-t border-blue-300 text-center">
            <p class="text-sm">&copy; 2024 日本ビソー株式会社 All rights reserved.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>