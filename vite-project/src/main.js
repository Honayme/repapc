/* ===================================================================
 * IMPORTATION DES LIBRAIRIES (CSS & JS)
 * Vite va regrouper tous ces fichiers dans un seul bundle optimisé.
 * =================================================================== */

// --- Librairies installées via NPM ---

// Swiper (Slider)
import 'swiper/css'; // Importe le CSS de base de Swiper

// AOS (Animations au défilement)
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe le CSS de AOS

// FancyBox (Lightbox pour images/vidéos)
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css"; // Importe le CSS de FancyBox

// tsParticles (Particules animées)
import { tsParticles } from "tsparticles-engine";
// (Note : l'initialisation de tsParticles se fait souvent dans le script custom)

// --- Fichiers locaux que nous avons copiés ---

// CSS
import './assets/css/accordion.min.css';
import './assets/css/style.css'; // Votre style principal, importé en dernier !

// JS
import './assets/js/vanilla-counter.js';
import './assets/js/accordion.min.js';
import './assets/js/custom.js'; // Votre script principal qui contient la logique

/* ===================================================================
 * INITIALISATION DES LIBRAIRIES
 * Ce code s'exécutera une fois que la page sera chargée.
 * =================================================================== */

// Initialise AOS (Animate on Scroll)
AOS.init({
    duration: 800, // durée de l'animation
    once: true     // l'animation ne se joue qu'une fois
});

// Initialise FancyBox pour tous les éléments avec l'attribut data-fancybox
Fancybox.bind("[data-fancybox]", {
    // Vos options de configuration pour Fancybox si vous en avez
});

// Le reste de votre code (Swiper, Counter, tsParticles, etc.)
// est probablement déjà initialisé dans votre fichier `custom.js`.
// Si ce n'est pas le cas, nous pourrons ajouter leur initialisation ici.
