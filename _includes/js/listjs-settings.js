var options = {
  valueNames: [ 'categories' , 'age' , 'level', 'cardstitle', 'subcategory'],
  searchClass: "search"
};

var coursesList = new List('courses', options);

// No Results
var noResults = $('<li id="no-items-found">Δε βρέθηκαν αποτελέσματα</li>');

coursesList.on('updated', function(list) {
  if (list.matchingItems.length == 0) {
    $(list.list).append(noResults);
  } else {
    noResults.detach();
  }
});

// Search Bar
var searchField = coursesList.helpers.getByClass(document, 'search', true);

coursesList.helpers.events.bind(searchField, 'keyup', function(e) {
  var target = e.target || e.srcElement; // IE have srcElement
  coursesList.search(target.value);
 });

 //filter
    $('.filter').change(function() {
        var bool = this.checked;
        var value = $(this).data("value");

        coursesList.filter(function (item) {
            if (item.values().age == value && bool == true) {
                return true;
            } else if (coursesList.filtered && bool == false) {
                return true;
            } else {
                return false;
            }
        });

        return false;

     });