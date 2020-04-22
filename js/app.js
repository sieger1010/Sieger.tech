$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    if (window.innerWidth > 992) {
      $nav.toggleClass('bg-black', $(this).scrollTop() > $nav.height());
    }    
  });
});

if (window.innerWidth < 992) {
  document.querySelector(".navbar").classList.add('bg-black');
}
