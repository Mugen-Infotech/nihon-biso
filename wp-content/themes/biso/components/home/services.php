<?php
$services = [
  [
    'title' => '臨時回収（法人様）',
    'description' => 'オフィス家具や機器の回収',
    'icon' => 'truck',
    'image' => 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    'link' => '#',
  ],
  [
    'title' => '定期回収（法人様）',
    'description' => '企業向けの定期ごみ回収',
    'icon' => 'calendar',
    'image' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    'link' => '#',
  ],
  [
    'title' => '不用品回収',
    'description' => '家庭の不要品や大型ごみ',
    'icon' => 'package',
    'image' => 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    'link' => '#',
  ],
  [
    'title' => '生前整理・遺品整理',
    'description' => '遺品整理・生前整理のサポート',
    'icon' => 'home',
    'image' => 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    'link' => '#',
  ],
];
?>

<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl tracking-wide text-center mb-12">
      業務案内
      <span class="block text-sm text-gray-600 mt-2">Services</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <?php foreach ($services as $service): ?>
        <div class="group bg-white rounded-xl shadow-lg transition-all duration-300">
          <div class="relative h-48 rounded-t-xl overflow-hidden">
            <img
              src="<?php echo esc_url($service['image']); ?>"
              alt="<?php echo esc_attr($service['title']); ?>"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <?php if ($service['icon'] === 'truck'): ?>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V3H5v14h4zm4-6h5.586l1.707 1.707A1 1 0 0120 13v4h-7v-6zM5 21a1 1 0 100-2 1 1 0 000 2zm14 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
              <?php elseif ($service['icon'] === 'calendar'): ?>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
                </svg>
              <?php elseif ($service['icon'] === 'package'): ?>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12l-8 4-8-4m16 0l-8-4-8 4m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
                </svg>
              <?php elseif ($service['icon'] === 'home'): ?>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-6 9 6v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              <?php endif; ?>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl tracking-wide mb-2"><?php echo esc_html($service['title']); ?></h3>
            <p class="text-gray-600 mb-4"><?php echo esc_html($service['description']); ?></p>
            <a href="<?php echo esc_url($service['link']); ?>"
              class="block text-center border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md py-2 px-4 transition-colors">
              詳しく見る
            </a>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>