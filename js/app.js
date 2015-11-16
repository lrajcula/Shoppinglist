$(document).ready(function () {
	var $form = $('form')	
	var $list = $('.list')
//accept the user input
	$form.submit(function(event){
		event.preventDefault();
		var newItemName = $(this).find('input').val();
		console.log(newItemName);
		saveToList(newItemName)
	})
//add item to the list
function saveToList(itemName){
	var listItem = '<li><button class="check">Done</button>'+itemName+
	'<img class="delete" src="images/delete.png"/>'+'</li>';
	$list.prepend(listItem);
}
//check it off
$list.on('click', '.check', function(){
	$(this).parent().toggleClass('strike');
})
//delete
$list.on('click', '.delete', function() {
  $(this).slideUp('.delete');

})
});