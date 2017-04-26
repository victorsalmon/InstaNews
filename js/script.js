
var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
url += '?' + $.param({
  'api-key': '385dbba7ced942639ee354d262342235'
});
//Test Change
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {  //Successfully get articles and output image and abstract
  console.log(result.results);
}).fail(function(err) {
  throw err;
});