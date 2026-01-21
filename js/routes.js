import Placeholder from '../components/common/Placeholder.js';
import DashboardLayout from '../components/Dashboard.js';

const routes = [
    {
        path: '/',
        component: DashboardLayout,
        children: [
            { path: '', name: 'Dashboard', component: Placeholder },
            
            // Sales
            { path: 'sales/kasir', name: 'Kasir', component: Placeholder },
            { path: 'sales/transaksi', name: 'Transaksi', component: Placeholder },
            { path: 'sales/nota', name: 'Struk & Nota', component: Placeholder },
            { path: 'sales/jasa', name: 'Data Jasa', component: Placeholder },
            { path: 'sales/digital', name: 'Digital Svc', component: Placeholder },
            
            // Inventory
            { path: 'inventory/produk', name: 'Daftar Produk', component: Placeholder },
            { path: 'inventory/tambah', name: 'Tambah Produk', component: Placeholder },
            { path: 'inventory/stok', name: 'Stock Monitor', component: Placeholder },
            
            // Finance
            { path: 'finance/harian', name: 'Laporan Harian', component: Placeholder },
            { path: 'finance/labarugi', name: 'Laba Rugi', component: Placeholder },
            { path: 'finance/arus-uang', name: 'Arus Uang', component: Placeholder },
            { path: 'finance/pengeluaran', name: 'Pengeluaran', component: Placeholder },
            { path: 'finance/piutang', name: 'Piutang Penjualan', component: Placeholder },
            { path: 'finance/analisa', name: 'Analisa Produk', component: Placeholder },
            
            // Settings
            { path: 'settings/profil', name: 'Profil Toko', component: Placeholder },
            { path: 'settings/user', name: 'Manajemen User', component: Placeholder },
            { path: 'settings/member', name: 'Data Member', component: Placeholder },
            { path: 'settings/perangkat', name: 'Perangkat', component: Placeholder },
        ]
    }
];

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
