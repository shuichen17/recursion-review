// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var res = '';
  
  if (typeof obj === 'undefined' || typeof obj === 'function') {
    return undefined; 
  } 

  if (typeof obj === 'string') {
    return '\"' + obj + '\"'; 
  } 

  if (obj === null) {
    return 'null';
  } 
  if (typeof obj !== 'object') {

    return '' + obj;  

  } 

  if (Array.isArray(obj)) {

    var array = [];

    for (var i = 0; i < obj.length; i++) {
      array.push(stringifyJSON(obj[i]));
    }

    return '[' + array.join(',') + ']';
    
    
  }

  if (typeof obj === 'object') {
    

    var arr = [];
    for (var key in obj) {
     
      var value = obj[key];
      if (value !== 'undefined' && key !== 'undefined' && typeof value !== 'function') {
        arr.push(stringifyJSON(key) + ':' + stringifyJSON(value));
      }
     
    }
    return '{' + arr.join(',') + '}';
   
  }
  return obj.toString();

  

};
