// Funcionalidade de dark mode e light mode
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const headerH1 = document.querySelector('header h1');
    const figcaptions = document.querySelectorAll('figcaption');
    const toggleButton = themeToggle;

    // Função para aplicar o tema
    const applyTheme = (isLight) => {
        if (isLight) {
            // Light mode: fundo branco, letras pretas
            body.style.backgroundColor = '#ffffff';
            body.style.color = '#000000';
            headerH1.style.color = '#000000';
            figcaptions.forEach(fig => fig.style.color = '#000000');
            toggleButton.style.color = '#000000';
            themeToggle.textContent = '☀️';
        } else {
            // Dark mode: fundo preto, letras brancas
            body.style.backgroundColor = '#000000';
            body.style.color = '#ffffff';
            headerH1.style.color = '#ffffff';
            figcaptions.forEach(fig => fig.style.color = '#ffffff');
            toggleButton.style.color = '#ffffff';
            themeToggle.textContent = '🌙';
        }
    };

    // Verifica preferência salva
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isLight = savedTheme === 'light';
    applyTheme(isLight);

    // Evento de clique
    themeToggle.addEventListener('click', () => {
        const currentIsLight = body.style.backgroundColor === 'rgb(255, 255, 255)'; // #ffffff
        const newIsLight = !currentIsLight;
        applyTheme(newIsLight);
        localStorage.setItem('theme', newIsLight ? 'light' : 'dark');
    });

    // Evento para perfis
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach(profile => {
        profile.addEventListener('click', (e) => {
            const name = profile.getAttribute('data-name');
            const image = profile.getAttribute('data-image');
            if (name && image) {
                localStorage.setItem('perfilAtivoNome', name);
                localStorage.setItem('perfilAtivoImagem', image);
            }
        });
    });
});