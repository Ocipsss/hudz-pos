export default {
  template: `
    <div class="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div class="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
        <i class="ri-tools-line text-5xl text-blue-500 animate-pulse"></i>
      </div>
      <h2 class="text-2xl font-bold text-gray-800 m-0">Segera Hadir</h2>
      <p class="text-gray-500 mt-2 max-w-xs">
        Halaman ini sedang dalam tahap pengembangan untuk sistem POS Sinar Pagi.
      </p>
      <button @click="$router.back()" class="mt-6 px-6 py-2 bg-blue-600 text-white border-none rounded-lg shadow-md active:scale-95 transition">
        <i class="ri-arrow-left-line"></i> Kembali
      </button>
    </div>
  `
};
