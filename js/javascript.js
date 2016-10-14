$(function(){

//when selection changes show me article

	
	var articleImg ='';
$
('.select').on('change',function(event){
	$topStories = $('.topStories');
	$topStories.empty();
	var article='';
	var selectSection = $('.select').val();

	$.ajax({
		method: 'GET',
		url: 'http://api.nytimes.com/svc/topstories/v2/' +selectSection+ '.json?api-key=1fadf3cc3b294071815fd4c0acbdc944',
		})  

	.done(function(data) {
		var n = data.results;
		
		$.each (n, function(key, value){

			if(value.multimedia.length > 0) {
		var articleImg= value.multimedia[4].url;
		
		article += '<li>';
		article += '<img src="'+articleImg+'"/>';
		article += '</li>';
		}
		});
		$topStories.append(article);
    })
		console.log('hope?');
	});
//
}); //closing tag for document ready