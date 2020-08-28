// Particles effect
particlesJS.load('particles', '../js/p.json');

$(() => {
    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Contact me scroll
    $('a.contactme-txt').click(() => {
        $('html, body').animate({ scrollTop: $(document).height() }, 800);
        return false;
    });
});