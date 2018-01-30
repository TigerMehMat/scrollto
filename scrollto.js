$("a.scrollto").click(function () {
  var $element = $(this),
      elementClick = $element.attr("href");

  elementClick = elementClick.substring(elementClick.lastIndexOf('#'));

  destination = jQuery(elementClick).offset().top+1;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300, function (){
    if($element.data('scrolltofocus')){
      $($element.data('scrolltofocus')).focus();
    }
  });
  return false;
});
