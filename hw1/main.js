var myApp = {
  arr : [],
  add : function(num1, num2) {
    console.log(this.arr.push(num1 + num2))
  },
  subtract : function(num1, num2) {
    console.log(this.arr.push(num1 - num2))
  },
  multiply : function(num1, num2) {
    console.log(this.arr.push(num1*num2))
  },
  divide : function(num1, num2) {
    console.log(this.arr.push(num1/num2))
  },
  getMeta: function(name, content){ // query the meta tag content
   var content = (content==null)?'content':content;
   return document.querySelector("meta[name='"+name+"']").getAttribute(content);
  },
  
  reSet: function(array){ //reset myApp.arr
	var array;
	return array.length = 0;
  },
    
  ptLast: function(array){ //print the last value in myApp.arr
    var array;   
    return array.pop();  
  }
  
    
};