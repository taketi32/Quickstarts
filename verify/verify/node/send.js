var https = require('https');

var options = {
  host: 'api.nexmo.com',
  path: '/verify/json',
  port: 443,
  method: 'POST',
  headers: {'Content-Type': 'application/json'}
}

var req = https.request(options);

req.write(JSON.stringify({
  api_key: API_KEY,
  api_secret: API_SECRET,
  number: YOUR_NUMBER,
  brand: 'MyApp'
}));

req.end();

var responseData = '';
req.on('response', function(res){
  res.on('data', function(chunk){
    responseData += chunk;
  });
  
  res.on('end', function(){
    console.log(JSON.parse(responseData));
  });
});
