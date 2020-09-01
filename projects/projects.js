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

    // View project btn
    $('btn.intro-btn').click(() => {
        $('html, body').animate({ scrollTop: $('#scrollDown').offset().top, }, 800);
        return false;
    });

    // Refresh the page when user clicks project text again on the same page
    $('a.projects-txt').click(() => location.reload());

    // Project Devpost Links
    $('img.tc-img').click(() => window.open("https://devpost.com/software/treecompanion", "_blank"));
});