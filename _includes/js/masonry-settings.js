jQuery(document).ready(function($) {
  var $masonryContainer = $('.cards');

  $masonryContainer.imagesLoaded(function() {
    $masonryContainer.masonry({
      columnWidth: '.cards-column',
      gutter: '.cards-gutter',
      itemSelector: '.cards-item'
    });  
  })

});