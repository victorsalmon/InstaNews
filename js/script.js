
$(function (){
  
  $('select').on('change', function(){
    var menuChoice = $(this).val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + menuChoice + '.json?'
    + $.param({
      'api-key': '385dbba7ced942639ee354d262342235',
      'multimedia':'true',
    }, {passive:true} );
    console.log ('url: ' + url);

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {  //Successfully get articles and output image and abstract
      result.results.splice(12)
      
      
    }).fail(function(err) {
      throw err;
    });
  })
})
