// 1. LISTADO DE INVITADOS (Igual que el original)
const invitados = [
    { nombre: "Sara Ferrotti", puestos: 1, idioma: "it" },
    { nombre: "Gianluca Ceccarrelli", puestos: 1, idioma: "it" },
    { nombre: "Francesco Dall' Ara", puestos: 1, idioma: "it" },
    { nombre: "Martina Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Letizia Ceccarelli", puestos: 2, idioma: "it" },
    { nombre: "Michele Ceccarelli", puestos: 1, idioma: "it" },
    { nombre: "Rita Ceccarelli", puestos: 2, idioma: "it" },
    { nombre: "Claudia Ferrotti", puestos: 2, idioma: "it" },
    { nombre: "Marco Serra", puestos: 2, idioma: "it" },
    { nombre: "Daniele Serra", puestos: 2, idioma: "it" },
    { nombre: "Federico Serra", puestos: 2, idioma: "it" },
    { nombre: "Maurizio Dall' Ara", puestos: 2, idioma: "it" },
    { nombre: "Bella González", puestos: 1, idioma: "es" },
    { nombre: "Jose Manuel García", puestos: 1, idioma: "es" },
    { nombre: "Luis García", puestos: 1, idioma: "es" },
    { nombre: "Belen Martínez", puestos: 1, idioma: "es" },
    { nombre: "Inmaculada Aponte", puestos: 2, idioma: "es" },
    { nombre: "Alejandro Prieto", puestos: 2, idioma: "es" },
    { nombre: "Juanjo Prieto", puestos: 1, idioma: "es" },
    { nombre: "María Sanjuan", puestos: 2, idioma: "es" },
    { nombre: "Victoria", puestos: 2, idioma: "es" },
    { nombre: "tita Mariló Antonio y Antonio", puestos: 3, idioma: "es" },
    { nombre: "Virginia Toni, Mario", puestos: 3, idioma: "es" },
    { nombre: "filo Aletti", puestos: 2, idioma: "it" },
    { nombre: "Riccardo Lughi", puestos: 1, idioma: "it" },
    { nombre: "Nico", puestos: 2, idioma: "it" },
    { nombre: "Brando", puestos: 1, idioma: "it" },
    { nombre: "Guido", puestos: 1, idioma: "it" },
    { nombre: "Gianmarco", puestos: 1, idioma: "it" },
    { nombre: "Nicola", puestos: 1, idioma: "it" },
    { nombre: "Silvia", puestos: 1, idioma: "it" },
    { nombre: "Alessandra", puestos: 1, idioma: "it" },
    { nombre: "Simo", puestos: 1, idioma: "it" },
    { nombre: "Rissa", puestos: 1, idioma: "it" },
    { nombre: "Jesus Camacho", puestos: 1, idioma: "es" },
    { nombre: "Natalia Garrido", puestos: 2, idioma: "es" },
    { nombre: "Lara Troncoso", puestos: 1, idioma: "es" },
    { nombre: "Libania Hidalgo", puestos: 2, idioma: "es" },
    { nombre: "Isaac", puestos: 1, idioma: "es" },
    { nombre: "Nagore Manuel", puestos: 2, idioma: "es" },
    { nombre: "Pablo Castro", puestos: 2, idioma: "es" },
    { nombre: "Rosa Flores", puestos: 1, idioma: "es" },
    { nombre: "Rocío Perez", puestos: 1, idioma: "es" },
    { nombre: "María López", puestos: 2, idioma: "es" },
    { nombre: "Eva Jiménez", puestos: 1, idioma: "es" },
    { nombre: "Alicia", puestos: 1, idioma: "es" },
    { nombre: "Paula", puestos: 1, idioma: "es" },
    { nombre: "Andrea", puestos: 1, idioma: "es" },
    { nombre: "Clara Lleido", puestos: 1, idioma: "es" },
    { nombre: "Xavier Soto", puestos: 2, idioma: "es" },
    { nombre: "Hugo", puestos: 1, idioma: "es" },
    { nombre: "Pere", puestos: 1, idioma: "es" },
    { nombre: "Joshua", puestos: 1, idioma: "es" },
    { nombre: "Pedro Tena", puestos: 1, idioma: "es" },
    { nombre: "Pedro Manuel", puestos: 1, idioma: "es" },
    { nombre: "Abel", puestos: 1, idioma: "es" },
    { nombre: "tex", puestos: 1, idioma: "it" }
];

// 2. DICCIONARIO DE IDIOMAS COMPLETO
const i18n = {
    es: {
        "welcome-msg": "¡Hola! Estamos felices de que estés aquí.",
        "btn-search": "Descubrir mi invitación",
        "story-text": "Nuestra historia no se entiende sin un mapa, un idioma compartido y aquel Erasmus en Urbino. Queremos celebrar que, después de tantos viajes y kilómetros, nuestro destino favorito sigue siendo estar juntos. ¡Gracias por acompañarnos!",
        "rsvp-reserva": "¡Hola {name}! Hemos reservado {n} puesto(s) para ti.",
        "btn-open-rsvp": "Confirmar asistencia",
        "guest-1-label": "Invitad@ 1",
        "label-attendance": "¿Asistirá?",
        "opt-yes": "¡Allí estaré!",
        "opt-no": "No puedo, me lo pierdo",
        "label-bus": "¿Necesitará autobús?",
        "label-hotel": "¿Necesitará hotel?",
        "label-allergies": "¿Tiene alguna alergia o restricción?",
        "label-song": "Canción imprescindible para la fiesta:",
        "btn-submit": "Confirmar",
        "location-title": "El plan",
        "location-text": "Celebraremos en Casa Catani, Barisano. Queremos disfrutar del aire libre y la buena compañía.",
        "ceremonia-text":"La ceremonia tendrá lugar en la Sala de los Espejos, en el ayuntamiento de Cesena.",
        
        /* NUEVO CRONOGRAMA ES */
        "ceremony-time": "12:00",
        "ceremony-title": "Ceremonia",
        "ceremony-desc": "Comune di Cesena. Por favor, llegad al menos media hora antes (11:30).",
        "bus-time": "12:45",
        "bus-title": "Autobús",
        "bus-desc": "Salida hacia Casa Catani desde Cesena.",
        "party-time": "13:15",
        "party-title": "Recepción",
        "party-desc": "Inicio del cóctel y comida a Casa Catani. Vuelta en bus a Cesena (hora por confirmar).",

        "travel-title": "El viaje",
        "hotel-title-card": "Alojamiento",
        "hotel-text-card": "Estamos cerrando un hotel para todos. Os avisaremos pronto.",
        "vuelos-title": "Vuelos",
        "vuelos-text": "Aeropuerto recomendado: Bolonia (BLQ).",
        "transporte-title": "Transporte",
        "travel-text": "Aeropuerto de Boloña (BLQ). El Marconi Express os lleva a la estación central. Trenes a Forlì cada 30 min.",
        "btn-map": "Ver mapa",
        "btn-map2": "Ver mapa",
        "gift-title": "Un detalle para nosotros",
        "gift-text": "Vuestra presencia es el mejor regalo. Si deseáis hacernos un detalle:",
        "thanks-text": "Gracias por formar parte del viaje.",
        "error-msg": "No encontramos ese nombre. Revisa si está bien escrito.",
        "guestInput": "Introduce tu nombre y apellidos",
        "extra-guest-title": "Invitad@ {i}",
        "extra-name": "Nombre completo:",
        "select-no": "No",
        "select-yes": "Sí",
        "sending": "Enviando...",
        "sent-ok": "¡Datos guardados! Gracias.",
        "sent-error": "Error al enviar. Inténtalo de nuevo.",
        "deadline-text": "Por favor, confirmar antes del 30 de junio de 2026",
        "countdown-suffix": "PARA EL GRAN DÍA",
        "day-letter": "d",
        "hour-letter": "h",
        "minute-letter": "m",
        "ceremonia-titulo":"La Ceremonia",
        "casa-titulo":"La Celebración"
    },
    it: {
        "welcome-msg": "Ciao! Siamo felici che tu sia qui.",
        "btn-search": "Scopri il mio invito",
        "story-text": "La nostra storia non si capisce senza una mappa, una lingua condivisa e quell'Erasmus a Urbino. Vogliamo festeggiare che la nostra destinazione preferita rimane stare insieme.",
        "rsvp-reserva": "Ciao {name}! Abbiamo riservato {n} posto/i per te.",
        "btn-open-rsvp": "Conferma partecipazione",
        "guest-1-label": "Ospite 1",
        "label-attendance": "Parteciperà?",
        "opt-yes": "Ci sarò!",
        "opt-no": "Non posso, mi dispiace",
        "label-bus": "Avrà bisogno del pullman?",
        "label-hotel": "Avrà bisogno dell'hotel?",
        "label-allergies": "Hai qualche allergia o restrizione?",
        "label-song": "Quella canzone che non può mancare:",
        "btn-submit": "Conferma",
        "location-title": "Il piano",
       "location-text": "Festeggeremo a Casa Catani, Barisano. Vogliamo godere dell'aria aperta e della buona compagnia.",
        "ceremonia-text": "La cerimonia avrà luogo nella Sala degli Specchi, presso il comune di Cesena.",
        
        /* NUOVO CRONOGRAMA IT */
        "ceremony-time": "12:00",
        "ceremony-title": "Cerimonia",
        "ceremony-desc": "Comune di Cesena. Vi preghiamo di arrivare almeno mezz'ora prima (11:30).",
        "bus-time": "12:45",
        "bus-title": "Pullman",
        "bus-desc": "Partenza verso Casa Catani da Cesena.",
        "party-time": "13:15",
        "party-title": "Ricevimento",
        "party-desc": "Inizio del cocktail e pranzo a Casa Catani. Il ritorno in pullman a Cesena è ancora da confermare.",

        "travel-title": "Il viaggio",
        "hotel-title-card": "Alloggio",
        "hotel-text-card": "Stiamo definendo un hotel per tutti. Vi informeremo presto.",
        "vuelos-title": "Voli",
        "vuelos-text": "Aeroporto consigliato: Bologna (BLQ).",
        "transporte-title": "Trasporto",
        "travel-text": "Aeroporto di Bologna (BLQ). Marconi Express fino alla stazione. Treni per Forlì ogni 30 min.",
        "btn-map": "Vedi mappa",
        "btn-map2": "Vedi mappa",
        "gift-title": "Un pensiero per noi",
        "gift-text": "La vostra presenza è il regalo più grande. Se volete farci un pensiero:",
        "thanks-text": "Grazie per far parte del viaggio.",
        "error-msg": "Nome non trovato. Controlla se è scritto correttamente.",
        "guestInput": "Inserisci il tuo nome e cognome",
        "extra-guest-title": "Ospite {i}",
        "extra-name": "Nome completo:",
        "select-no": "No",
        "select-yes": "Sì",
        "sending": "Invio in corso...",
        "sent-ok": "Dati salvati! Grazie.",
        "sent-error": "Errore durante l'invio. Riprova.",
        "deadline-text": "Per favore, conferma entro il 30 giugno 2026",
        "countdown-suffix": "PER IL GRANDE GIORNO",
        "day-letter": "g",
        "hour-letter": "o",
        "minute-letter": "m",
        "ceremonia-titulo":"La Ceremonia",
        "casa-titulo":"Il Ricevimento"

    }
};

let currentLang = 'es';
let invitadoActual = null;
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzTYckj3NvUXX0Xn5uw3R36s0Sd0GYFvM3O4NCbv_alr80IYIaWGW14KIaCbW1SoP2V/exec";

const modal = document.getElementById("rsvp-modal");
const btnOpenModal = document.getElementById("btn-open-rsvp");
const spanClose = document.getElementsByClassName("close-modal")[0];

function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];
    
    // Resaltar el botón del idioma activo
    document.querySelectorAll('.language-picker button').forEach(btn => {
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    for (let key in t) {
        let el = document.getElementById(key);
        if (el) {
            if (el.tagName === 'INPUT') el.placeholder = t[key];
            else el.innerText = t[key];
        }
    }
    
    if (btnOpenModal) btnOpenModal.innerText = t["btn-open-rsvp"];
    document.querySelectorAll(".opt-no-text").forEach(el => el.innerText = t["select-no"]);
    document.querySelectorAll(".opt-yes-text").forEach(el => el.innerText = t["select-yes"]);
    
    if (invitadoActual) {
        actualizarMensajeReserva();
        toggleGuestFields();
    }
}

function validateGuest() {
    const input = document.getElementById('guestInput').value.toLowerCase().trim();
    const guest = invitados.find(i => i.nombre.toLowerCase() === input);

    if (guest) {
        invitadoActual = guest; 
        
        // Transición suave al validar
        const accessSection = document.getElementById('access-section');
        const heroPhoto = document.getElementById('hero-photo');
        
        accessSection.style.opacity = '0';
        accessSection.style.transform = 'scale(0.95)';
        heroPhoto.style.opacity = '0';

        // Esperamos a que termine el fade-out para mostrar el contenido
        setTimeout(() => {
            accessSection.style.display = 'none';
            heroPhoto.style.display = 'none'; 
            
            const mainContent = document.getElementById('main-content');
            const rsvpGreeting = document.getElementById('rsvp-greeting');
            
            mainContent.style.display = 'block';
            rsvpGreeting.style.display = 'block';
            btnOpenModal.style.display = 'inline-block';
            
            // Forzamos el reflow antes de añadir la clase de opacidad
            void mainContent.offsetWidth;
            
            mainContent.classList.add('show-content');
            rsvpGreeting.classList.add('show-content');
            
            setLanguage(guest.idioma);
            initScrollAnimations(); // Iniciamos el efecto scroll al cargar el contenido
        }, 500);

    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.innerText = i18n[currentLang]["error-msg"];
        errorMsg.style.display = 'block';
    }
}

function toggleGuestFields() {
    const container = document.getElementById('guests-container');
    const t = i18n[currentLang];
    container.innerHTML = ''; 

    if (invitadoActual.puestos > 1) {
        for (let i = 1; i < invitadoActual.puestos; i++) {
            const guestDiv = document.createElement('div');
            guestDiv.className = 'guest-extra-fields';
            guestDiv.innerHTML = `
                <div style="margin: 30px 0; border-top: 1px dashed var(--naranja); padding-top: 20px;">
                    <p style="font-family: 'Playwrite CU'; color: var(--naranja); margin-bottom: 15px;">
                        ${t["extra-guest-title"].replace('{i}', i + 1)}
                    </p>
                    <div class="form-group">
                        <label>${t["extra-name"]}</label>
                        <input type="text" name="guest_name_${i}" required>
                    </div>
                    <div class="form-group">
                        <label>${t["label-attendance"]}</label>
                        <select name="guest_attendance_${i}" required>
                            <option value="si">${t["opt-yes"]}</option>
                            <option value="no">${t["opt-no"]}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>${t["label-bus"]}</label>
                        <select name="guest_bus_${i}" required>
                            <option value="no">${t["select-no"]}</option>
                            <option value="si">${t["select-yes"]}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>${t["label-hotel"]}</label>
                        <select name="guest_hotel_${i}" required>
                            <option value="no">${t["select-no"]}</option>
                            <option value="si">${t["select-yes"]}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>${t["label-allergies"]}</label>
                        <textarea name="guest_allergies_${i}" rows="2"></textarea>
                    </div>
                </div>
            `;
            container.appendChild(guestDiv);
        }
    }
}

function actualizarMensajeReserva() {
    let msg = i18n[currentLang]["rsvp-reserva"];
    msg = msg.replace('{name}', invitadoActual.nombre).replace('{n}', invitadoActual.puestos);
    document.getElementById('rsvp-greeting').innerText = msg;
}

function updateCountdown() {
    const weddingDate = new Date('September 12, 2026 12:00:00').getTime();
    
    const x = setInterval(function() {
        const t = i18n[currentLang];
        const now = new Date().getTime();
        const diff = weddingDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const el = document.getElementById('countdown');
        if (el) {
            el.innerHTML = `
                <div>${days}${t["day-letter"]} ${hours}${t["hour-letter"]} ${minutes}${t["minute-letter"]}</div>
                <small style="font-size: 0.8rem; display: block;">${t["countdown-suffix"]}</small>
            `;
        }
    }, 1000);
}

// Apertura y cierre del modal con animaciones
if (btnOpenModal) {
    btnOpenModal.onclick = function() { 
        modal.style.display = "flex"; // Requisito inicial para la transición
        setTimeout(() => modal.classList.add("show"), 10);
    }
}
if (spanClose) {
    spanClose.onclick = function() { 
        modal.classList.remove("show"); 
        setTimeout(() => modal.style.display = "none", 400); // Esperar a que acabe la animación
    }
}
window.onclick = function(event) {
    if (event.target == modal) { 
        modal.classList.remove("show"); 
        setTimeout(() => modal.style.display = "none", 400);
    }
}
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const t = i18n[currentLang];
    const btn = document.getElementById('btn-submit');
    const originalText = btn.innerText;
    btn.innerText = t["sending"];
    btn.disabled = true;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.nombre_principal = invitadoActual.nombre;

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)
    })
    .then(() => {
        alert(t["sent-ok"]);
        btn.innerText = t["btn-submit"];
        btn.disabled = false;
        setTimeout(() => { modal.style.display = "none"; }, 1000);
    })
    .catch(error => {
        console.error('Error:', error);
        alert(t["sent-error"]);
        btn.innerText = originalText;
        btn.disabled = false;
    });
});

updateCountdown();
// Lógica para animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // El elemento animará cuando el 15% sea visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejamos de observar para que no se anime 2 veces
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.section-container, .info-card, .timeline__item, .decoracion-img');
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-up');
        // Pequeño delay dinámico opcional si los elementos están en grid
        if (el.classList.contains('info-card')) {
            el.style.transitionDelay = `${index * 0.1}s`; 
        }
        observer.observe(el);
    });
}
setLanguage('es'); // Inicialización por defecto