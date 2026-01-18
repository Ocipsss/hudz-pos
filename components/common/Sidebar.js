export default {
  props: ['isOpen'],
  template: `
    <div v-if="isOpen" 
         @click="$emit('close')"
         class="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300">
    </div>

    <aside :class="isOpen ? 'left-0' : '-left-80'"
           class="fixed top-0 h-full w-72 bg-white z-50 transition-all duration-300 shadow-2xl flex flex-col">
      
      <div class="p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <i class="ri-store-2-line text-2xl"></i>
          </div>
          <div>
            <div class="font-bold text-lg leading-tight">Sinar Pagi</div>
            <div class="text-xs opacity-80 flex items-center gap-1">
              <span class="w-2 h-2 bg-green-400 rounded-full"></span> Admin Kasir
            </div>
          </div>
        </div>
      </div>

      <nav class="flex-1 overflow-y-auto py-4 custom-scrollbar">
        <div class="px-6 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-[2px]">Utama</div>
        <menu-item to="/" icon="ri-dashboard-3-line" label="Dashboard" @click="$emit('close')"></menu-item>
        
        <div class="px-6 py-2 mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-[2px]">Transaksi</div>
        <menu-item to="/sales/kasir" icon="ri-calculator-line" label="Kasir Utama" @click="$emit('close')"></menu-item>
        <menu-item to="/sales/digital-svc" icon="ri-smartphone-line" label="Digital Service" @click="$emit('close')"></menu-item>
        <menu-item to="/sales/data-jasa" icon="ri-customer-service-2-line" label="Biaya Jasa" @click="$emit('close')"></menu-item>
        
        <div class="px-6 py-2 mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-[2px]">Data & Stok</div>
        <menu-item to="/inventory/produk" icon="ri-box-3-line" label="Daftar Produk" @click="$emit('close')"></menu-item>
        <menu-item to="/finance/analisa" icon="ri-pie-chart-line" label="Analisa Laris" @click="$emit('close')"></menu-item>
        <menu-item to="/settings/member" icon="ri-user-star-line" label="Data Member" @click="$emit('close')"></menu-item>

        <div class="px-6 py-2 mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-[2px]">Sistem</div>
        <menu-item to="/settings/perangkat" icon="ri-printer-line" label="Printer & Scanner" @click="$emit('close')"></menu-item>
        <menu-item to="/settings/profil" icon="ri-settings-4-line" label="Pengaturan Toko" @click="$emit('close')"></menu-item>
      </nav>

      <div class="p-4 border-t border-gray-100 bg-gray-50 text-center">
        <button class="w-full py-2 text-sm text-red-500 font-medium hover:bg-red-50 rounded-lg transition border-none bg-transparent flex items-center justify-center gap-2">
          <i class="ri-logout-circle-line"></i> Logout
        </button>
      </div>
    </aside>
  `
};

// Sub-komponen MenuItem (Internal)
export const MenuItem = {
  props: ['to', 'icon', 'label'],
  template: `
    <router-link :to="to" class="flex items-center gap-4 px-6 py-3 text-gray-600 no-underline hover:bg-blue-50 hover:text-blue-600 transition-all border-l-4 border-transparent active:scale-95" active-class="bg-blue-50 text-blue-600 border-blue-600">
      <i :class="icon" class="text-xl"></i>
      <span class="text-sm font-semibold">{{ label }}</span>
    </router-link>
  `
};
