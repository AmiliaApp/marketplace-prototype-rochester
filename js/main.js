$(document).ready(function() {

  (function() {
    var $form = $('#search');
    var $select = $('#searchSelect');
    var $jumbotronHome = $('#jumbotronHome');
  
    $select.on('change', function() {
      var value = $select.val();

      $jumbotronHome.css('backgroundImage', 'url(img/jumbotron-' + value + '.jpg)');

      $form.attr('action', value + '-list.html');
    });

    $("a").click(function (event) {
      event.preventDefault();
      var href = $(this).attr("href");
      if (href) window.location = href;
    });

  })();

});