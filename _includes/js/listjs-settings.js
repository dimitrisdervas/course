var options = {
  valueNames: [ 'categories' , 'age' , 'level', 'cardstitle'],
  searchClass: "search"
};

var coursesList = new List('courses', options);

var noItems = $('<li id="no-items-found">No items found</li>');

coursesList.on('updated', function(list) {
  if (list.matchingItems.length == 0) {
    $(list.list).append(noItems);
  } else {
    noItems.detach();
  }
});

var searchField = coursesList.helpers.getByClass(document, 'search', true);

coursesList.helpers.events.bind(searchField, 'keyup', function(e) {
  var target = e.target || e.srcElement; // IE have srcElement
  coursesList.search(target.value);
 });

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