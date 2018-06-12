var options = {
	valueNames: [
		'agecategories',
		'subcategory'
	],
	pagination: false
};
var coursesList = new List('courses', options);

function resetList(){
	coursesList.search();
	coursesList.filter();
	coursesList.update();
	$(".filter-all").prop('checked', true);
	$('.filter').prop('checked', false);
	$('.search').val('');
	//console.log('Reset Successfully!');
};

function updateList(){
	var values_categories = $("input[name=subcategories]:checked").val();
	var values_agecategories = $("input[name=agecategories]:checked").val();
	console.log(values_categories, values_agecategories);

	coursesList.filter(function (item) {
		var categoriesFilter = false;
		var agecategoriesFilter = false;

		if(values_categories == "all")
		{
			categoriesFilter = true;
		} else {
			categoriesFilter = item.values().subcategory == values_categories;

		}

		if(values_agecategories == null)
		{
			agecategoriesFilter = true;
		} else {
			agecategoriesFilter = item.values().agecategories.indexOf(values_agecategories) >= 0;
		}

		return agecategoriesFilter && categoriesFilter
	});

	coursesList.update();
	console.log('Filtered: ' + values_categories + values_agecategories);
}

$(function(){
  //updateList();
	$("input[name=subcategories]").change(updateList);
	$('input[name=agecategories]').change(updateList);
	coursesList.on('updated', function (list) {
		if (list.matchingItems.length > 0) {
			$('.no-result').hide()
		} else {
			$('.no-result').show()
		}
	});
});