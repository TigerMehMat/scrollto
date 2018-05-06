(function($){
  jQuery.fn.scrollto = function(options){
    // Зададим список свойств и укажем для них значения по умолчанию.
    // Если при вызове метода будут указаны пользовательские
    // варианты некоторых из них, то они автоматически перепишут
    // соответствующие значения по умолчанию
    options = $.extend({
      speed:300, //цвет элемента над которым нет курсора
      top:1 //цвет элемента на который наведен курсор
    }, options);

    var make = function(){
      $(this).click(function(e){
        var $element = $(this),
            elementClick = $element.attr("href");
        e.preventDefault();

        elementClick = elementClick.substring(elementClick.lastIndexOf('#'));

        destination = jQuery(elementClick).offset().top+options.top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, options.speed, function (){
          if($element.data('scrolltofocus')){
            $($element.data('scrolltofocus')).focus();
          }
        });
        return false;
      });
    };

    return this.each(make);
    // в итоге, метод responsiveBlock вернет текущий объект jQuery обратно
  };
})(jQuery);
