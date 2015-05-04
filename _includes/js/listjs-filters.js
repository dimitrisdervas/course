// Filter for each category
  {% for menu in site.data.categories %} 
  
     $('#filter-{{ menu.name }}').click(function() {
     coursesList.filter(function(item) {
       if (item.values().categories == "{{ menu.name }}") {
         return true;
       } else {
         return false;
       }
     });
     return false;
   });
   

 {% endfor %}

$('#filter-none').click(function() {
  coursesList.filter();
  return false;
});
var divs = $('.filter-terms > div ');
$('.menu-categories li').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var nam = $this.data('categoryName');
    divs.filter(':visible').hide();
    divs.filter('[data-category-name="'+nam+'"]').show();
});