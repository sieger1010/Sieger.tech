$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('bg-black', $(this).scrollTop() > $nav.height());
  });
});
