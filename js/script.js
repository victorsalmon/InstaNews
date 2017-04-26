
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "385dbba7ced942639ee354d262342235"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

