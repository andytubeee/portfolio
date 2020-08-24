$(() => {
  // Page onload
  document.querySelector('body').onload = () => {
    // document.getElementById('alwaysFullscreen').style.height =
    //   $(window).height() + 'px';
  };
  // Learn more button click
  $('#learnmoreBtn').click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('#scrollDown').offset().top,
      },
      1000
    );
  });

  $('.school-txt').click(() => window.open('https://jam.wrdsb.ca/', '_blank'));
});
