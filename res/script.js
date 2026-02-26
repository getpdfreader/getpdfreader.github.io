
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.work-card, #reveal-0, #reveal-1, #reveal-2, #reveal-3, #reveal-4').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(60px)';
            el.style.transition = 'all 1.4s cubic-bezier(0.22, 1, 0.36, 1)';
            observer.observe(el);
        });

        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.paddingTop = '1.25rem';
                nav.style.paddingBottom = '1.25rem';
                nav.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.05)';
            } else {
                nav.style.paddingTop = '2rem';
                nav.style.paddingBottom = '2rem';
                nav.style.boxShadow = 'none';
            }
        });