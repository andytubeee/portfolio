$(() => {
  // Page onload
  document.querySelector('body').onload = () => {
    // document.getElementById('alwaysFullscreen').style.height =
    //   $(window).height() + 'px';
    document.getElementById('introTopTxt').style.marginTop =
      ($('#alwaysFullscreen').height() - $('#introTopTxt').height()) / 2 + 'px';
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
});
