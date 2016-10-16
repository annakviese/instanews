$(function(){

//when selection changes show me article

	
	
$('.select').on('change',function(){
	var $topStories = $('.topStories');
	$topStories.empty();
	var article='';
	var selectSection = $('.select').val();

	$.ajax({
		method: 'GET',
		url: 'http://api.nytimes.com/svc/topstories/v2/' +selectSection+ '.json?api-key=1fadf3cc3b294071815fd4c0acbdc944',
		})  

	.done(function(data) {
		var results = data.results.slice(0,12);
		var articleImg ='';
		var articleAbstract = '';
		var articleUrl = '';
		
		$.each (results, function(key, value){

			if(value.multimedia.length > 0) {
			articleImg= value.multimedia[4].url;
			articleAbstract=value.abstract;
			articleUrl=value.url;
		
		article += '<li>';
		article += '<a href='+articleUrl+'>'
		article += '<div class="article_background" style="background-image:url('+articleImg+')">';
		article += '<p class="article_abstract">'+articleAbstract+''
		article += '</p></div></a></li>'
		}
		});
		$topStories.append(article);
    })

	});

}); //closing tag for document ready