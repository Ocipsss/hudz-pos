export default {
    template: `
    <div class="container-fluid py-5">
        <div class="text-center">
            <i :class="icon" style="font-size: 4rem; color: var(--primary-yellow);"></i>
            <h2 class="mt-3">Halaman {{ title }}</h2>
            <p class="text-muted">Fitur sedang dalam pengembangan.</p>
            <div class="mt-4">
                <kbd style="background: #eee; color: #666; padding: 5px 10px; border-radius: 5px;">
                    Path: {{ $route.path }}
                </kbd>
            </div>
        </div>
    </div>
    `,
    computed: {
        title() { return this.$route.name || 'Halaman' },
        icon() {
            const icons = {
                'Dashboard': 'ri-dashboard-3-fill',
                'Kasir': 'ri-shopping-cart-fill'
            };
            return icons[this.title] || 'ri-apps-2-fill';
        }
    }
}
