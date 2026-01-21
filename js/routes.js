import Placeholder from '../components/common/Placeholder.js';
import DashboardLayout from '../components/Dashboard.js';

const routes = [
    {
        path: '/',
        component: DashboardLayout,
        children: [
            { path: '', name: 'Dashboard', component: Placeholder },
            
            // Sales Modules
            { path: 'sales/kasir', name: 'Kasir', component: Placeholder },
            { path: 'sales/transaksi', name: 'Riwayat Transaksi', component: Placeholder },
            { path: 'sales/jasa', name: 'Data Jasa', component: Placeholder },
            
            // Inventory Modules
            { path: 'inventory/produk', name: 'Daftar Produk', component: Placeholder },
            { path: 'inventory/stok', name: 'Stock Monitor', component: Placeholder },
            { path: 'inventory/tambah', name: 'Tambah Produk', component: Placeholder },
            
            // Finance Modules
            { path: 'finance/laporan', name: 'Laporan Harian', component: Placeholder },
            { path: 'finance/arus-uang', name: 'Arus Uang', component: Placeholder },
            { path: 'finance/piutang', name: 'Piutang Penjualan', component: Placeholder },
            
            // Settings Modules
            { path: 'settings/profil', name: 'Profil Toko', component: Placeholder },
            { path: 'settings/user', name: 'Manajemen User', component: Placeholder },
            { path: 'settings/perangkat', name: 'Pengaturan Perangkat', component: Placeholder },
        ]
    }
];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
