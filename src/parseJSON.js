// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var obj = {};
  if (typeof json === null) {
    return null;
  }
  if (typeof json === 'number' || typeof json === 'boolean') {
    return json;
  } 
  if (typeof json === 'string') {
    var trimJson = json.trim();
    if (trimJson[0] === '[' && trimJson[trimJson.length - 1] === ']') {
      var arr = trimJson.slice(1, trimJson.length - 2).split(',');
      for (var i = 0; i < arr.length; i++) {
        parseJSON(arr[i]); 
      }
      return arr;
    }
  }
  

  //
};




