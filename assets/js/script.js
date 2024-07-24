
document.querySelectorAll('[data-sidebar-btn]').forEach(button => {
    button.addEventListener('click', function () {
        const sidebar = document.querySelector('[data-sidebar]');
        sidebar.classList.toggle('active');
    });
});

document.querySelectorAll('.navbar-link').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.navbar-link').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const page = this.getAttribute('data-nav-link');
        document.querySelectorAll('article').forEach(article => {
            if (article.getAttribute('data-page') === page) {
                article.classList.add('active');
            } else {
                article.classList.remove('active');
            }
        });
    });
});
