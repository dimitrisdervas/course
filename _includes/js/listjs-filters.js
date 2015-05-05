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
// Filter for each SubCategory
 {% for menutop in site.data.categories %}            
    {% assign subcategories = site.data.[menutop.name] %}
    {% for menu in subcategories %}  
       $('#filter-{{ menu.name }}').click(function() {
          coursesList.filter(function(item) {
             if (item.values().subcategory == "{{ menu.name }}") {
                return true;
             } else {
                return false;
             }
          });
          return false;
       });
     {% endfor %}
 {% endfor %}
// Filter for ALL
$('#filter-none').click(function() {
  coursesList.filter();
  return false;
});
  
//  Show filter title and Subcategory menus
var subCategory = $('.menu-subcategories > ul > li ');
var filterTerms = $('.filter-terms > div ');
var filterSubTerms = $('.filter-subterms > div ');
  
$('.menu-categories li').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var nam = $this.data('categoryName');
    filterTerms.filter(':visible').hide();
    subCategory.filter(':visible').hide();
    filterSubTerms.hide();
    subCategory.filter('[data-category-name="'+nam+'"]').show();
    filterTerms.filter('[data-category-name="'+nam+'"]').show();
});

//  Does not work
$('.menu-subcategories li').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var nam = $this.data('subcategoryName');
    filterSubTerms.filter(':visible').hide();
    filterSubTerms.filter('[data-category-name="'+nam+'"]').show();
});
