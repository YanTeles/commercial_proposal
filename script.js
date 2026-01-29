// script.js - SEM FIREBASE (Apenas Visual + WhatsApp)

// 1. LÓGICA DA DATA DE VALIDADE (+15 dias)
const elValidade = document.getElementById('validade');

if(elValidade) {
    const hoje = new Date();
    const validade = new Date(hoje);
    validade.setDate(validade.getDate() + 15); // Soma 15 dias
    elValidade.innerText = validade.toLocaleDateString('pt-BR');
}

// 2. LÓGICA DO BOTÃO DE APROVAR
const btnAprovar = document.getElementById('btn-aprovar');

if (btnAprovar) {
    btnAprovar.addEventListener('click', () => {
        
        // Efeito visual simples de "clique"
        const textoOriginal = btnAprovar.innerText;
        btnAprovar.innerText = "Abrindo WhatsApp...";
        btnAprovar.style.opacity = "0.7";
        btnAprovar.style.backgroundColor = "#29FFB2"; // Verde Neon
        btnAprovar.style.color = "#0B0D18"; // Texto Escuro

        // Aguarda meio segundo e abre o WhatsApp
        setTimeout(() => {
            // --- CONFIGURE SEU NÚMERO AQUI ---
            const numero = "5511999999999"; 
            
            const mensagem = encodeURIComponent("Olá! Analisei a proposta comercial e gostaria de aprovar o início do projeto.");
            
            // Abre em nova aba
            window.open(`https://wa.me/${31985270034}?text=${"Opa, tudo certo com a proposta! Vamos fechar o projeto."}`, '_blank');

            // Restaura o botão
            btnAprovar.innerText = textoOriginal;
            btnAprovar.style.opacity = "1";
        }, 500);
    });
}