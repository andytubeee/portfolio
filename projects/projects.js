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

    //Tree Companion
    $('button.tc-demo').click(() => window.open("https://www.youtube.com/watch?v=QqRB1BK4_zk", "_blank"));
    $('button.tc-repo').click(() => window.open("http://www.github.com/andytubeee/Tree_Companion", "_blank"));

    // VegLife
    $('button.vgl-demo').click(() => window.open("https://www.youtube.com/watch?v=DRxRsoKW0oE", "_blank"));
    $('button.vgl-repo').click(() => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Unfortunately, the repository is deleted on GitHub, sorry for your inconvenience.',
            footer: 'Please check out my other projects.'
        });
    });


});