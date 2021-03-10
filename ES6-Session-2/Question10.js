function LinkedList(){  
  this.head = null;
}
    
LinkedList.prototype.push = function(val){
	var node = {
   	value: val,
   	next: null
	}
	if(!this.head){
  	this.head = node; 	 
	}
	else{
  	current = this.head;
  	while(current.next){
    	current = current.next;
  	}
  	current.next = node;
	}
  }

let stack = [];
stack.push(5);
stack.push(10);
stack.push(-3837);
stack.push(74);

stack.pop();


console.log(stack);
