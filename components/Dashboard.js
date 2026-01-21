import Sidebar from './common/Sidebar.js';

export default {
    components: { Sidebar },
    data() {
        return { isSidebarOpen: false }
    },
    computed: {
        isKasirPage() { return this.$route.path === '/sales/kasir'; }
    },
    template: `
    <div class="layout-wrapper">
        <Sidebar @close-menu="isSidebarOpen = false" />
        
        <main class="main-content" :class="{ 'pushed': isSidebarOpen }" @click="closeIfOpen">
            <div v-if="isSidebarOpen" class="pushed-overlay"></div>

            <header class="header-wrapper">
                <button @click.stop="isSidebarOpen = !isSidebarOpen" class="btn-header">
                    <i :class="isSidebarOpen ? 'ri-close-line' : 'ri-menu-2-fill'"></i>
                </button>

                <div v-if="!isSidebarOpen">
                    <button v-if="isKasirPage" @click.stop="pilihMember" class="btn-header">
                        <i class="ri-user-add-line" style="color: var(--primary-yellow);"></i>
                    </button>
                    <router-link v-else to="/sales/kasir" class="btn-header">
                        <i class="ri-shopping-cart-2-line" style="color: var(--primary-yellow);"></i>
                    </router-link>
                </div>
            </header>
            
            <section class="content-body">
                <router-view></router-view>
            </section>
        </main>
    </div>
    `,
    methods: {
        closeIfOpen() { if (this.isSidebarOpen) this.isSidebarOpen = false; },
        pilihMember() { alert('Pilih Member'); }
    }
}
