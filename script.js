// --- Mostrar carta ---
    const btnMostrar = document.getElementById('mostrarCarta');
    const carta = document.getElementById('carta');
    btnMostrar.addEventListener('click', () => {
      carta.classList.add('mostrar');
      btnMostrar.style.display = 'none';
    });

    // --- Botões Sim / Não ---
    const botaoNao = document.getElementById('nao');
    const botaoSim = document.getElementById('sim');

    botaoNao.addEventListener('mouseover', () => {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);
      botaoNao.style.position = 'absolute';
      botaoNao.style.left = `${x}px`;
      botaoNao.style.top = `${y}px`;
    });

    botaoSim.addEventListener('click', () => {
      alert('HEHEHEHE! 😍 Eu também te amo minha princesa 💖');
      criarCoracoes();
    });

    // --- Corações animados ---
    function criarCoracoes() {
      for (let i = 0; i < 20; i++) {
        const coracao = document.createElement('div');
        coracao.classList.add('coraçao');
        coracao.innerHTML = '💗';
        coracao.style.left = Math.random() * window.innerWidth + 'px';
        coracao.style.bottom = '0';
        coracao.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(coracao);
        setTimeout(() => coracao.remove(), 45000);
      }
    }

    // --- Contador de tempo juntos ---
    const contador = document.getElementById('contador');
    const inicio = new Date('2019-10-26'); // coloque a data do começo do namoro

    function atualizarContador() {
      const agora = new Date();
      const diff = agora - inicio;
      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const anos = Math.floor(dias / 365);
      const meses = Math.floor((dias % 365) / 30);
      const diasRestantes = dias - (anos * 365 + meses * 30);

      contador.innerHTML = `Estamos juntos há <b>${anos}</b> anos, <b>${meses}</b> meses e <b>${diasRestantes}</b> dias 💕`;
    }
    atualizarContador();
    setInterval(atualizarContador, 1000 * 60 * 60 * 6);

    // --- Música ---
    const musica = document.getElementById('musica');
    const musicaBotao = document.getElementById('musicaBotao');
    let tocando = false;

    musicaBotao.addEventListener('click', () => {
      if (!tocando) {
        musica.play();
        musicaBotao.innerHTML = '⏸️';
        tocando = true;
      } else {
        musica.pause();
        musicaBotao.innerHTML = '🎵';
        tocando = false;
      }

    });

