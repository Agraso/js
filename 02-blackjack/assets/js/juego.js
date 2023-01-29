const miModulo = (()=> {
    'use strict'
    /**
     * 2C = Two of Clubs (Treboles)
     * 2D = Two of Diaminds (Diamantes)
     * 2H = Two of Hearts (Corazones)
     * 2S = Two of Spades (Espadas)
     */
    
    let deck         = [];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];
    
    let puntosJugadores = [];
    
    //Referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo')
    
    const smalls = document.querySelectorAll('small')
    
    const divCartasJugadores = document.querySelectorAll('.divCartas')
    
    //Esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
            
        }
    
        smalls.forEach( elem => elem.innerText = 0);
        divCartasJugadores.forEach( elem => elem.innerHTML = '');
    
        btnDetener.disabled = false;
        btnPedir.disabled = false;
    
    };

    // Esta funcion crea una baraja y la desordena
    const crearDeck = () => {
        deck =[];

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo); 
            }
        }
    
        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo); 
            }
        }
        return _.shuffle(deck);
    }
    
    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop()
    }
    
    //Esta funcion me dice que carta es
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
                (valor === 'A') ? 11 : 10
                : valor * 1;
    }

    // Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
        smalls[turno].innerText = puntosJugadores[turno]
        return puntosJugadores[turno]

    }

    const crearCarta = (carta, turno) =>{
        const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasJugadores[turno].append(imgCarta);
    }
    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosMinimos === puntosComputadora) {
                alert('Empate')
            } else if (puntosMinimos > 21) {
                alert('Has Perdido!!!')
            } else if (puntosComputadora > 21){
                alert('Has Ganado!!!')
            }else if (puntosComputadora > puntosMinimos) {
                alert('Has Perdido!!!')
            }
        }, 15);
    }
    
    //turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do { 
            const carta = pedirCarta();
            const puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
        
            crearCarta(carta, puntosJugadores.length - 1)
            
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
        
    };
    
    //Eventos
    btnPedir.addEventListener('click', () => {
        
    
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
    
    
        //<img class="carta" src="assets/cartas/2c.png" alt="">
        crearCarta(carta, 0);
    
        if (puntosJugador > 21) {
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)
            btnPedir.disabled = true
        } else if (puntosJugador === 21 ){
            btnPedir.disabled = true
        }
    });
    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores);
    });
    
    btnNuevo.addEventListener('click', () => {

        inicializarJuego();    
    });

    return {
        nuevoJuego: inicializarJuego
    };


})();



