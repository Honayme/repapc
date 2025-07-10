// src/js/main.js

// Import CSS
import '../css/tailwind.css'

// Import des bibliothèques
import { Swiper } from 'swiper'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { Fancybox } from '@fancyapps/ui'
import AOS from 'aos'
import { tsParticles } from '@tsparticles/engine'
import { loadBasic } from '@tsparticles/basic'
import { loadLinksPreset } from "@tsparticles/preset-links";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";


// Import CSS des bibliothèques
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import 'aos/dist/aos.css'
import 'accordion-js/dist/accordion.min.css';

// Configuration Swiper
Swiper.use([Navigation, Pagination, Autoplay, EffectFade])

// Rendre les bibliothèques disponibles globalement
window.Swiper = Swiper
window.Fancybox = Fancybox
window.AOS = AOS
window.tsParticles = tsParticles
window.loadBasic = loadBasic
window.loadLinksPreset = loadLinksPreset
window.loadTrianglesPreset = loadTrianglesPreset


// Initialisation d'AOS
AOS.init({
    once: true,
})

// Import et exécution du code custom
import './custom.js'
