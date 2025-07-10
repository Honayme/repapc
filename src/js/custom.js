// Imports des modules
import { Swiper } from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import AOS from 'aos';

import Accordion from 'accordion-js';


// Configuration Swiper
Swiper.use([Navigation, Autoplay]);

// Gestion de la direction RTL
const direction = window.localStorage.getItem('direction') || 'ltr';
if (direction === 'rtl') {
    const animateElements1 = document.querySelectorAll('[data-aos="fade-left"]');
    const animateElements2 = document.querySelectorAll('[data-aos="fade-right"]');

    requestAnimationFrame(() => {
        animateElements1.forEach((element) => {
            element.setAttribute('data-aos', 'fade-right');
        });

        animateElements2.forEach((element) => {
            element.setAttribute('data-aos', 'fade-left');
        });
    });
}

// Initialisation AOS
AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

// Loader
const screen_loader = document.getElementsByClassName('screen_loader');
if (screen_loader?.length) {
    setTimeout(() => {
        requestAnimationFrame(() => {
            document.body.removeChild(screen_loader[0]);
        });
    }, 200);
}

// Mobile menu js
const toggleMenu = () => {
    const menus = document.querySelector('.menus');
    const overlay = document.querySelector('.overlay');
    requestAnimationFrame(() => {
        menus.classList.toggle('open-menus');
        overlay.classList.toggle('hidden');
    });
};

// Search Bar - Header
const search = () => {
    const searchBar = document.querySelector('.search-bar');
    requestAnimationFrame(() => {
        searchBar.classList.toggle('open-search-bar');
    });
};

// Scroll to top
const scrollToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

window.onscroll = function () {
    setOnScroll();
};

const setOnScroll = () => {
    let scrollpos = window.scrollY;
    requestAnimationFrame(() => {
        if (scrollpos > 0) {
            document.getElementById('scrollToTopBtn')?.classList.remove('hidden');
            document.getElementById('top-header')?.classList.add('sticky-header');
        } else {
            document.getElementById('scrollToTopBtn')?.classList.add('hidden');
            document.getElementById('top-header')?.classList.remove('sticky-header');
        }
    });
};
setOnScroll();

// Light - Dark Mode
const toggleTheme = (isFirstTime = false) => {
    let theme = window.localStorage.getItem('theme') || 'light';

    if (!isFirstTime) {
        theme = theme === 'light' ? 'dark' : 'light';
    }
    window.localStorage.setItem('theme', theme);

    requestAnimationFrame(() => {
        if (theme === 'dark') {
            document.querySelector('body').classList.add('dark');
        } else {
            document.querySelector('body').classList.remove('dark');
        }
    });
};

toggleTheme(true);

// RTL
const toggleDirection = (isFirstTime = false) => {
    let direction = window.localStorage.getItem('direction') || 'ltr';

    if (!isFirstTime) {
        direction = direction === 'ltr' ? 'rtl' : 'ltr';
    }
    window.localStorage.setItem('direction', direction);

    requestAnimationFrame(() => {
        if (direction === 'rtl') {
            document.querySelector('html').setAttribute('dir', 'rtl');
        } else {
            document.querySelector('html').setAttribute('dir', 'ltr');
        }
        if (!isFirstTime) {
            window.location.reload();
        }
    });
};
toggleDirection(true);

// Current year
const ele = document.querySelectorAll('.curr-year');
if (ele?.length) {
    const date = new Date();
    const fullyear = date.getFullYear();
    for (let i = 0; i < ele.length; i++) {
        ele[i].innerHTML = fullyear;
    }
}


function VanillaCounter() {
    let elements = document.querySelectorAll('[data-vanilla-counter]')
    elements.forEach(i => {
        let data = {
            startAt: parseInt(i.getAttribute('data-start-at')),
            endAt: parseInt(i.getAttribute('data-end-at')),
            delay: parseInt(i.getAttribute('data-delay')) || 0,
            format: '{}',
            time: parseInt(i.getAttribute('data-time')) || 1000
        }
        if (i.getAttribute('data-format')) {
            data.format = i.getAttribute('data-format')
        } else if (i.innerHTML != "") {
            data.format = i.innerHTML
        }
        console.log(data.format)
        if (data.startAt == null) {
            throw new Error('data-start-at attribute is required')
        }
        if (data.endAt == null) {
            throw new Error('data-end-at attribute is required')
        }
        var counter = data.startAt
        i.innerHTML = data.format.replace('{}', counter)
        var intervalTime = Math.ceil(data.time / (data.endAt - data.startAt))
        setTimeout(() => {
            var interval = setInterval(intervalHandler, intervalTime)
            function intervalHandler() {
                counter += (data.endAt - data.startAt) / Math.abs(data.endAt - data.startAt) * 1
                i.innerHTML = data.format.replace('{}', counter)
                if (counter == data.endAt) {
                    clearInterval(interval)
                }
            }
        }, data.delay)
    })
}

// Accordion

const initAccordion = () => {
    const accordionContainer = document.querySelector('.accordion-container');
    if (accordionContainer) {
        const acc = new Accordion('.accordion-container', {
            duration: 400,
            showMultiple: false,
            onlyChildNodes: true,
            // Ajoute ces configurations pour correspondre à tes classes HTML
            elementClass: 'ac',
            triggerClass: 'ac-trigger',
            panelClass: 'ac-panel'
        });

        // Optionnel : ouvrir le premier accordéon
        if (acc && typeof acc.open === 'function') {
            acc.open(0);
        }
    }
};


// Testimonial Slider
const initTestimonialSlider = () => {
    const testimonialSlider = document.querySelector('.mySwiper');
    if (testimonialSlider) {
        const swiper = new Swiper('.mySwiper', {
            modules: [Navigation, Autoplay], // ← Ajout des modules
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            speed: 1000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.testimonial-swiper-button-next',
                prevEl: '.testimonial-swiper-button-prev',
            },
        });
    }
};

// Partner Slider
const initPartnerSlider = () => {
    const partnerSlider = document.querySelector('.partner-swiper');
    if (partnerSlider) {
        const swiper2 = new Swiper('.partner-swiper', {
            modules: [Autoplay], // ← Ajout du module
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 7,
                },
            },
        });
    }
};



const initIndustrySlider = () => {
    const industrySlider = document.querySelector('.industry-slider');
    if (industrySlider) {
        const swiper = new Swiper('.industry-slider', {
            modules: [Autoplay],
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
            },
        });
    }
};



// Logo nav scroll effect
const initLogoNavEffect = () => {
    const header = document.getElementById('top-header');
    const scrollThreshold = 10;

    if (header) {
        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                if (window.scrollY > scrollThreshold) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        });
    }
};


const initParticles = async () => {
    const particlesContainer = document.getElementById('tsparticles');
    if (particlesContainer) {
        await window.loadBasic(window.tsParticles);

        await window.tsParticles.load({
            id: "tsparticles",
            options: {
                preset: "triangles", // <-- Ajoute cette ligne pour utiliser le preset triangles
                background: {
                    color: {
                        value: "transparent"
                    }
                },
                fpsLimit: 120,
                fullScreen: {
                    enable: false
                },
                // Tu peux surcharger les options du preset ici si besoin
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out"
                        },
                        random: false,
                        speed: 2,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "triangle"
                    },
                    size: {
                        value: { min: 1, max: 5 }
                    }
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        onClick: {
                            enable: true,
                            mode: "push"
                        }
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 1
                            }
                        },
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        }
                    }
                },
                detectRetina: true
            }
        });
    }
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    VanillaCounter();
    initAccordion();
    initTestimonialSlider();
    initPartnerSlider();
    initIndustrySlider();
    initParticles().catch(console.error);
    initLogoNavEffect();
});

// Rendre les fonctions disponibles globalement pour les boutons
window.toggleMenu = toggleMenu;
window.search = search;
window.scrollToTop = scrollToTop;
window.toggleTheme = toggleTheme;
window.toggleDirection = toggleDirection;
window.VanillaCounter = VanillaCounter
