import '../scss/style.scss';

$(function () {
  //Initialize jQuery-Nice-Select
  $('select').niceSelect();

  //On selection set up AJAX
  var url = ""
  $('select').on('change', function () {
    var menuChoice = $(this).val();
    if (menuChoice === "") {
      return;
    };
    
    $('.loading').css("display", "block").empty().append('<img src="./images/ajax-loader.gif">');
    url = 'https://api.nytimes.com/svc/topstories/v2/' + menuChoice + '.json?'
      + $.param({
        'api-key': '385dbba7ced942639ee354d262342235',
      }, { passive: true });

    $('.grid').empty();

    //Retrieve NYT Content
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function (result) {

      //Process Results Object
      var resultsArray = result.results.filter(function (object) {
        return object.multimedia.length;
      });
      resultsArray.splice(12);

      //Populate Flexbox Grid with Results
      $.each(resultsArray, function (key, value) {
        var element = '<a href="' + value.url + '"><li><p>' + value.abstract + '</p></li></a>'
        var image = "url('" + value.multimedia[4].url + "')"
        $('.grid').append(element);
        $('.grid a:last-child').css("background-image", image)
      })

      //Adjust Style
      $('.grid').css("height", "auto");
      $('.loading').css("display", "none"); //Hide ajax-loader.gif
      $('body').addClass("slim");
      $('.logo').removeClass("no-news"); //Remove no-news animations
    }).fail(function (err) {
      throw err;
    });
  })
});
