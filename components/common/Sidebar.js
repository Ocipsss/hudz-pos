export default {
    template: `
    <aside id="sidebar">
        <div class="brand">HUDZ MART</div>
        
        <nav style="height: calc(100vh - 150px); overflow-y: auto; padding-right: 10px;">
            <ul @click="$emit('close-menu')">
                <li><router-link to="/"><i class="ri-dashboard-3-line"></i> Dashboard</router-link></li>
                
                <li class="menu-label">Penjualan</li>
                <li><router-link to="/sales/kasir"><i class="ri-calculator-line"></i> Kasir</router-link></li>
                <li><router-link to="/sales/transaksi"><i class="ri-history-line"></i> Transaksi</router-link></li>
                <li><router-link to="/sales/nota"><i class="ri-file-paper-2-line"></i> Struk & Nota</router-link></li>
                <li><router-link to="/sales/jasa"><i class="ri-customer-service-2-line"></i> Data Jasa</router-link></li>
                <li><router-link to="/sales/digital"><i class="ri-smartphone-line"></i> Digital Svc</router-link></li>

                <li class="menu-label">Inventori</li>
                <li><router-link to="/inventory/produk"><i class="ri-database-2-line"></i> Daftar Produk</router-link></li>
                <li><router-link to="/inventory/tambah"><i class="ri-add-box-line"></i> Tambah Produk</router-link></li>
                <li><router-link to="/inventory/stok"><i class="ri-eye-line"></i> Stock Monitor</router-link></li>

                <li class="menu-label">Keuangan</li>
                <li><router-link to="/finance/harian"><i class="ri-calendar-check-line"></i> Laporan Harian</router-link></li>
                <li><router-link to="/finance/labarugi"><i class="ri-line-chart-line"></i> Laba Rugi</router-link></li>
                <li><router-link to="/finance/arus-uang"><i class="ri-exchange-funds-line"></i> Arus Uang</router-link></li>
                <li><router-link to="/finance/pengeluaran"><i class="ri-shopping-bag-3-line"></i> Pengeluaran</router-link></li>
                <li><router-link to="/finance/piutang"><i class="ri-hand-coin-line"></i> Piutang</router-link></li>
                <li><router-link to="/finance/analisa"><i class="ri-pie-chart-2-line"></i> Analisa Produk</router-link></li>

                <li class="menu-label">Sistem</li>
                <li><router-link to="/settings/profil"><i class="ri-store-2-line"></i> Profil Toko</router-link></li>
                <li><router-link to="/settings/user"><i class="ri-user-settings-line"></i> Manajemen User</router-link></li>
                <li><router-link to="/settings/member"><i class="ri-p2p-line"></i> Data Member</router-link></li>
                <li><router-link to="/settings/perangkat"><i class="ri-cpu-line"></i> Perangkat</router-link></li>
            </ul>
        </nav>
    </aside>
    `
}
