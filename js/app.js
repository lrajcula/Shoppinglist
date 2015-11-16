$(document).ready(function () {
	var $form = $('form')	
	var $list = $('.list')
//accept the user input
	$form.submit(function(event){
		event.preventDefault();
		var newItemName = $(this).find('input').val();
		console.log(newItemName);
		saveToList(newItemName);
	})
//add item to the list
function saveToList(itemName){
	var listItem = '<li><button class="check">Done</button><span>'+itemName+
	'</span>'+'<img class="delete" src="images/delete.png"/>'+'</li>';
	$list.prepend(listItem);
}
//check it off
/*$list.on('click', 'li' , '.strike', function(){
	$(this).children().toggleClass('strike');
})*/
$list.on('click', '.check', function(){
	$(this).parent().toggleClass('strike');
})
//delete
$list.on('click', 'li', '.delete', function() {
  $(this).slideUp('.delete');

})
});