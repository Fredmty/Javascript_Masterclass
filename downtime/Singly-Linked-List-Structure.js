// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
      let node = new Node(val);
        if(node.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
        this.node.next = node;
        this.tail = node;
        }
        this.length++;
        return list; 
    } 
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;

        return current;
    }
    unshift(val){
        let node = new Node(val);
        if(!this.head) {
            node = this.head && this.tail;
        } else {
            node.next = this.head;
        }
        this.head = node;
        this.length++;

        return this;
    }
    get(index){
        if(index < 0 || index >= list.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
                current = current.next;
                counter++;
            }
        return current
    }
    set(val, index){
        var found = this.get(index);
        if(found){
            found.val = val;
            return true;
        }
        return false;
    }
    insert(){
        if (index < 0 || index > list.length) return false;
        if( index === list.length) {
            this.push(val);
        }
        if (index === 0) {
            this.unshift(val);
        } else {
        let nodo = new Node(val);
        let prev = this.get(index-1);
        var temp = prev.next;
        prev.next = nodo;
        nodo.next = temp;
        this.length++;
        return true;
    }
    }
    remove(){
    if(index < 0 || index > list.length) return undefined;
    if(index === list.length -1) this.pop();
    if(index === 0) this.shift();
    let prev = this.get(index-1);
    let remo = prev.next;
    prev.next = remo.next;
    this.length--;
    return remo;
    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev;
        let next;
        while(list){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;

    }
    
}


// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")


