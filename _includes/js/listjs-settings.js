var options = {
    valueNames: [ 'cards-categories' ]
};

var coursesList = new List('courses', options);

$('#filter-games').click(function() {
  coursesList.filter(function(item) {
    if (item.values().category == "sports") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-beverages').click(function() {
  coursesList.filter(function(item) {
    if (item.values().category == "adults") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});
$('#filter-none').click(function() {
  coursesList.filter();
  return false;
});