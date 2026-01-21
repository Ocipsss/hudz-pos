export default {
    template: `
    <aside id="sidebar">
        <div class="brand text-center lg:text-left">SINAR PAGI</div>
        
        <nav>
            <ul @click="$emit('close-menu')">
                <li><router-link to="/"><i class="ri-dashboard-3-line"></i> Dashboard</router-link></li>
                <li><router-link to="/sales/kasir"><i class="ri-calculator-line"></i> Penjualan</router-link></li>
                <li><router-link to="/sales/digital"><i class="ri-smartphone-line"></i> Layanan Digital</router-link></li>
                
                <li class="py-2"></li>
                
                <li><router-link to="/sales/transaksi"><i class="ri-history-line"></i> Riwayat</router-link></li>
                <li><router-link to="/inventory/stok"><i class="ri-compass-3-line"></i> Stok</router-link></li>
                <li><router-link to="/settings/profil"><i class="ri-settings-line"></i> Pengaturan</router-link></li>
            </ul>
        </nav>
    </aside>
    `
}
