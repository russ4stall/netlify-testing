exports.handler = (event, context, callback) => {
    var stuffs = event.queryStringParameters;
    var bawdy = event.body;
    
    console.log(stuffs);

    callback(null, {
      statusCode: 200,
      body: bawdy
    })
  }