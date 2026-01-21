import Sidebar from './common/Sidebar.js';

export default {
    components: { Sidebar },
    data() {
        return { isSidebarOpen: false }
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

            <header class="flex items-center mb-8">
    <button 
        @click.stop="isSidebarOpen = !isSidebarOpen"
        class="flex items-center justify-center"
        style="
            width: 50px; 
            height: 50px; 
            border-radius: 15px; 
            border: 2px solid #f1f5f9; 
            background: white; 
            cursor: pointer;
            color: #334155; /* Warna ikon abu gelap agar terlihat */
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        "
    >
        <i :class="isSidebarOpen ? 'ri-close-line' : 'ri-menu-2-fill'" style="font-size: 1.5rem;"></i>
    </button>
</header>

            
            <section>
                <router-view></router-view>
            </section>
        </main>
    </div>
    `,
    methods: {
        closeIfOpen() {
            if (this.isSidebarOpen) {
                this.isSidebarOpen = false;
            }
        }
    }
}
