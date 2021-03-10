class Node{

    constructor(val){
        this.val=val;
        this.next=null;

    }

}

let head=null;
let tail=null;

const addFirst=(val)=>{
    let nn=new Node(val);
    if(head==null){
        head=nn;
        tail=nn;
    }else {
        nn.next=head;
        head=nn;
    }
    return;
}


const addLast=(val)=>{
    let nn=new Node(val);
    
    if(head==null){
        head=nn;
        tail=nn;
    }else{
        tail.next=nn;
        tail=tail.next;
    }
}


const length=()=>{
    let temp=head;
    let count=0;
    while(temp!=null){
        temp=temp.next;
        count++;
    }
    return count;
}

const getFirst=()=>{
    return head.val;
}


const getLast=()=>{
    return tail.val;
}

addFirst(5);
addFirst(7);
addLast(6);
addLast(8);
addLast(9);


console.log("First:" + getFirst());
console.log("Last:" + getLast())
console.log("Length:"+length());
