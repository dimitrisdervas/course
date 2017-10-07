// Filter for each category
  {% for menu in site.categories %} 
     $('#filter-{{ menu.slug }}').click(function() {
     coursesList.filter(function(item) {
       if (item.values().categories == "{{ menu.title }}") {
         return true;
       } else {
         return false;
       }
     });
     return false;
   });
 {% endfor %}


// Filter for each SubCategory
 {% for menutop in site.categories %}
    {% for menu in menutop.subcategories %}      
    {% assign subcategory = site.subcategories | where: 'title' ,menu %}
      {% for menu-subcategory in subcategory %}
       $('#filter-{{ menu-subcategory.slug }}').click(function() {
          coursesList.filter(function(item) {
             if (item.values().subcategory == "{{ menu-subcategory.title }}") {
                return true;
             } else {
                return false;
             }
          });
          return false;
       });
       {% endfor %}
     {% endfor %}
 {% endfor %}


// // Filter for each Level
//  {% for level in site.levels %}
//        $('#filter-{{ level.slug }}').click(function() {
//           coursesList.filter(function(item) {
//              if (item.values().level == "{{ level.slug }}") {
//                 return true;
//              } else {
//                 return false;
//              }
//           });
//           return false;
//        });
//  {% endfor %}

// // Filter for each Agecategories
//  {% for age in site.agecategories %}
//        $('#filter-{{ age.slug }}').click(function() {
//           coursesList.filter(function(item) {
//              if (item.values().age == "{{ age.slug }}") {
//                 return true;
//              } else {
//                 return false;
//              }
//           });
//           return false;
//        });
//  {% endfor %}


// Filter for each Age
 {% for age in site.ages %}
       $('#filter-{{ age.slug }}').click(function() {
          coursesList.filter(function(item) {
             if (item.values().age == "{{ age.title }}") {
                return true;
             } else {
                return false;
             }
          });
          return false;
       });
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
