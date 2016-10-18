$(function(){

//when selection changes show me article

	$('#loading').hide();
$('.select').heapbox({'onChange':function(){
	$('#loading').show();
	$('header').addClass('header-shrink');
	var $topStories = $('.topStories');
	$topStories.empty();
	var article='';
	var selectSection = $('.select').val();

	$.ajax({
		method: 'GET',
		url: 'http://api.nytimes.com/svc/topstories/v2/' +selectSection+ '.json?api-key=1fadf3cc3b294071815fd4c0acbdc944',
		})  

	.done(function(data) {

		var results = data.results.filter(function(value){ //filter the results for value
			return value.multimedia.length >= 5; //we put 5 because in our each function it's 4, which 5th item in the array
		});
		results.splice(12); //we don't put equal because we want to update the current results variable

		var articleImg ='';
		var articleAbstract = '';
		var articleUrl = '';	
		
		$.each (results, function(key, value){

			articleImg=value.multimedia[4].url;
			articleAbstract=value.abstract;
			articleUrl=value.url;
		
		article += '<li>';
		article += '<a href='+articleUrl+'>'
		article += '<div class="article_background" style="background-image:url('+articleImg+')">';
		article += '<p class="article_abstract">'+articleAbstract+''
		article += '</p></div></a></li>'
		// }
		});
		$topStories.append(article);

    })
		.always(function(){
          $('#loading').hide();
    });
	}	
	});
	
/*	this is to fade in the whole paragraph without cutting it off by css method
	('li').hover(function(){
    $('.article_abstract').fadeIn(); 
	}, function() { 
    $('.article_abstract').fadeOut(); 
	});
	}); */ //

}); //closing tag for document ready