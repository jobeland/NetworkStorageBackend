Parse.Cloud.define("bestNetwork", function(request, response) {
  var query = new Parse.Query(request.params.networkVersion);
  query.descending("eval")
  query.find({
    success: function(results) {
      var topNetwork = null;
      if(results.length > 0){
        topNetwork = results[0];
      }
      response.success(topNetwork);
    },
    error: function() {
      response.error("neural network lookup failed for version: " + request.params.networkVersion);
    }
  });
});
