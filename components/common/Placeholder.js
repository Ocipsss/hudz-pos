export default {
    template: `
    <div class="container-fluid py-5">
        <article class="text-center">
            <i :class="icon" style="font-size: 4rem; color: var(--primary);"></i>
            <h2>Halaman {{ title }}</h2>
            <p>Fitur ini sedang dalam pengembangan.</p>
            <footer>
                <kbd>Path: {{ $route.path }}</kbd>
            </footer>
        </article>
    </div>
    `,
    computed: {
        title() { return this.$route.name || 'Halaman' },
        icon() { 
            const icons = {
                'Dashboard': 'ri-dashboard-3-fill',
                'Kasir': 'ri-shopping-cart-fill',
                'Inventory': 'ri-archive-fill'
            };
            return icons[this.title] || 'ri- archaeology-fill';
        }
    }
}
