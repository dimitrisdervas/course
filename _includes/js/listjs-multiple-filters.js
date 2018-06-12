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
	console.log('Reset Successfully!');
};

function updateList(){
	var values_subcategories = $("input[name=subcategories]:checked").val();
	var values_agecategories = $("input[name=agecategories]:checked").val();
	console.log('Chosen:' + values_subcategories , values_agecategories);

	coursesList.filter(function (item) {
		var subcategoriesFilter = false;
		var agecategoriesFilter = false;

		if(values_subcategories == "all")
		{
			subcategoriesFilter = true;
		} else {
			subcategoriesFilter = item.values().subcategory.indexOf(values_subcategories) >= 0;

		}

		if(values_agecategories == "all")
		{
			agecategoriesFilter = true;
		} else {
			agecategoriesFilter = item.values().agecategories.indexOf(values_agecategories) >= 0;
		}

		return agecategoriesFilter && subcategoriesFilter
	});

	coursesList.update();
	console.log('Filtered: ' + values_subcategories , values_agecategories);
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


// $("input:checked").parents( "li" ).toggleClass('active');