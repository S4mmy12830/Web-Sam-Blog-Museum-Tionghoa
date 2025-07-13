document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    
    // Apply the saved theme if it exists
    if (currentTheme) {
        body.setAttribute('data-theme', currentTheme);
        
        // Update the icon based on the current theme
        if (currentTheme === 'dark') {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    }
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        // Toggle between dark and light themes
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '🌙';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '☀️';
        }
    });

    const project = document.getElementById('projects');
    const saweria = document.getElementById('saweria');

    project.addEventListener('click', () => {
        this.location.href = "https://sam-blog-main.vercel.app/Main-Sam-Blog;/html/index.html";
    });

    saweria.addEventListener('click', () => {
        this.location.href = "https://saweria.co/SammmCode";
    });

});