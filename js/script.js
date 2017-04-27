
$(function (){
  
  $('select').on('change', function(){
    var menuChoice = $(this).val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + menuChoice + '.json?'
    + $.param({
      'api-key': '385dbba7ced942639ee354d262342235'
    }, {passive:true} );
    console.log ('url: ' + url);

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {  //Successfully get articles and output image and abstract
      console.log(result.results);
    }).fail(function(err) {
      throw err;
    });
  })
})
