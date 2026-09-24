// Dispara el confeti en la intro y luego cambia al menú
function iniciarSorpresa() {
    
    // Configuración del confeti (Canvas Confetti)
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // Fuego artificial desde la izquierda
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      // Fuego artificial desde la derecha
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    // Esperar 1.5 segundos y enviar a la pantalla del menú
    setTimeout(() => {
        goToScreen('menu');
    }, 1500);
}

// Función principal para ocultar y mostrar secciones
function goToScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    
    screens.forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
        setTimeout(() => {
            targetScreen.classList.add('active');
        }, 50);
    }
}