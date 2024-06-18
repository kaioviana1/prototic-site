document.addEventListener("DOMContentLoaded", function() {
    const phraseElement = document.getElementById("effect-phrase");
    const phrases = [
        "Sua satisfação é nossa prioridade",
        "Qualidade e confiança",
        "Excelência em serviços",
        "Sempre ao seu lado"
    ];

    phraseElement.addEventListener("click", function() {
        const currentPhrase = phraseElement.textContent;
        let newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        
        // Evita que a nova frase seja igual à atual
        while (newPhrase === currentPhrase) {
            newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        }

        phraseElement.textContent = newPhrase;
    });

    // Scroll suave para a seção "Sobre Nós"
    const aboutUsLink = document.querySelector('nav ul li a[href="#sobre-nos-section"]');
    aboutUsLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("sobre-nos-section").scrollIntoView({ behavior: "smooth" });
    });

    // Scroll suave para a seção "Contato"
    const contatoLink = document.querySelector('nav ul li a[href="#contato-section"]');
    contatoLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("contato-section").scrollIntoView({ behavior: "smooth" });
    });
});
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = this.querySelector("input[type='email']").value;
    alert("Obrigado por assinar nossa newsletter com o email: " + email);
});
// Adicionar evento para exibir o menu em telas menores
window.addEventListener('resize', function() {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth <= 768) {
        nav.classList.remove('active');
    }
});
