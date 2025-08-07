<?php
$news_items = [
  ['date' => '2024.12.26', 'title' => '電子公告を掲載しました'],
  ['date' => '2024.11.29', 'title' => '年末年始の回収について'],
  ['date' => '2023.12.27', 'title' => '電子公告を掲載しました'],
  ['date' => '2023.12.04', 'title' => '★★一緒に働いてくださる方を募集中★★'],
  ['date' => '2022.12.23', 'title' => '電子公告を掲載しました'],
];
?>

<section class="py-16 w-full bg-orange-500/10">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl md:text-3xl tracking-wide text-center mb-8">
      NEWS
      <span class="block text-sm text-gray-600 mt-1">ニュース</span>
    </h2>
    <div class="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
      <?php foreach ($news_items as $item): ?>
        <div class="flex items-start gap-6 p-4 border-b last:border-b-0 hover:bg-white transition-colors">
          <time class="text-orange-800 whitespace-nowrap font-medium"><?php echo esc_html($item['date']); ?></time>
          <p class="text-gray-800 hover:text-orange-600 cursor-pointer"><?php echo esc_html($item['title']); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>