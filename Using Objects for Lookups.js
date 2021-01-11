// Setup
function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
   var yu= {
      "alpha":"Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
  result=yu[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");