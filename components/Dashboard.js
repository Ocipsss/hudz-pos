// Dashboard.js - Full Version
import Sidebar from './common/Sidebar.js';

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            isSidebarOpen: false
        }
    },
    template: `
    <div class="layout-wrapper" style="position: relative; overflow: hidden; min-height: 100vh;">
        <Sidebar @close-menu="isSidebarOpen = false" />
        
        <main 
            class="main-content" 
            :class="{ 'pushed': isSidebarOpen }"
            @click="closeIfOpen"
        >
            <div v-if="isSidebarOpen" class="pushed-overlay"></div>

            <header class="header-wrapper">
                <button 
                    @click.stop="isSidebarOpen = !isSidebarOpen"
                    style="
                        width: 45px; 
                        height: 45px; 
                        border-radius: 12px; 
                        border: 1px solid #eee; 
                        background: white; 
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                        transition: 0.2s;
                    "
                >
                    <i :class="isSidebarOpen ? 'ri-close-line' : 'ri-menu-2-fill'" 
                       style="font-size: 1.4rem; color: #333;"></i>
                </button>
            </header>
            
            <section class="content-body">
                <router-view></router-view>
            </section>
        </main>
    </div>
    `,
    methods: {
        closeIfOpen() {
            // Jika user klik area konten saat menu terbuka, maka tutup
            if (this.isSidebarOpen) {
                this.isSidebarOpen = false;
            }
        }
    }
}
