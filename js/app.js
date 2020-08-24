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
      2000
    );
  });

  $('.school-txt').click(() => window.open('https://jam.wrdsb.ca/', '_blank'));

  var mySkills = document.querySelectorAll('li.skillListItem');
  mySkills.forEach((skills) => {
    skills.onmouseenter = () => console.log(skills.innerHTML);
  });
});
