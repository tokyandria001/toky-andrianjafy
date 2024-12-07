gsap.registerPlugin(ScrollTrigger);

const sectionPrincipale = {
    element: document.querySelector('.section-principale'),
    projets: document.querySelectorAll('.projet:not(:last-child)'), 
};

let lenis;

const initLenis = () => {
    lenis = new Lenis({
        lerp: 0.05,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
};

const initAnimation = () => {
    for (let i = 0; i < sectionPrincipale.projets.length; i++) {
        sectionPrincipale.projets[i].style.zIndex = sectionPrincipale.projets.length - i;
    }

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: sectionPrincipale.element,
            start: 'top top',
            end: '+=4000',
            scrub: 1,
            pin: true,
            snap: 1 / sectionPrincipale.projets.length,
        },
    });

    sectionPrincipale.projets.forEach((projet, index) => {
        if (index === sectionPrincipale.projets.length) return;

        const mediaProjet = projet.querySelectorAll('.media-projet'),
            vignetteProjet = projet.querySelectorAll('.vignette-projet');

        gsap.set([mediaProjet, vignetteProjet], { clipPath: 'inset(0% 0% 0% 0%)' });

        timeline.to(
            [mediaProjet, vignetteProjet], 
            {
                clipPath: 'inset(0% 100% 0% 0%)',
                filter: 'blur(10px)',
            },
            index
        ).to(projet, { pointerEvents: 'none' });
    });
};

window.addEventListener("DOMContentLoaded", () => {
    initLenis();
    initAnimation();

    document.querySelector('.media-texte').addEventListener('click', () => lenis.scrollTo(0));
});
