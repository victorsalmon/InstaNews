
$(function (){
  //Initialize jQuery-Nice-Select
  $('select').niceSelect();

  //Wait for selection and then AJAX
  $('select').on('change', function(){
    var menuChoice = $(this).val();
    var url = 'https://api.nytimes.com/svc/topstories/v2/' + menuChoice + '.json?'
    + $.param({
      'api-key': '385dbba7ced942639ee354d262342235',
    }, {passive:true} );

    //Retrieve NYT Content
    $.ajax({
      url: url,
      method: 'GET',
    }).always(function (){
      $('.loading').append('<img src="../images/ajax-loader.gif">');
    }).done(function(result) {
    
      //Process Results Object
      var resultsArray = result.results.filter (function(object){
        return object.multimedia.length;
      });
      resultsArray.splice(12);
 //     $(.grid).append(function(){
 //       each (resultsArray)
 //     })
      //Output Content to Page
      console.log (resultsArray);

    }).fail(function(err) {
      throw err;
    });
  })
})
