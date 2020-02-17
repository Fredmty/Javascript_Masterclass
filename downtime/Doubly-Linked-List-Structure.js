class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            
        }
        this.length++;
        return variable;
    }
    pop(){
        if(this.head === null) return undefined;
        var variable = this.tail;
        if(this.length === 1) this.head && this.tail === null;
        this.tail = variable.prev;
        variable.next = null;
        this.length--;
        return variable;
    }
    shift(){
        if(this.length === 0) return undefined;
        var variable = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else{
            this.head = variable.next;
            this.head.prev = null;
            variable.next = null;
        }
            this.length--;
            return variable;
        
    }
    unshift(val){
        var node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
            this.length++;
            return this;

    }
    get(index) {
        if (index < 0 || index === this.length) return null;
        if(index <= this.length/2) {
            let counter = 0;
            let current = this.head;
            while(counter !== index){
                    current = current.next;
                    counter++;
                }
            return current;
        } else {
            let counter = this.length-1;
            let current = this.tail;
            while(counter !== index){
                    current = current.prev;
                    counter--;
        }
        return current;
    }
    }  
    set(index, val){
        var found = this.get(index)
        if(found != null){
            found.val = val;
            return true;
        }
        return false;
    }
    insert(){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) this.unshift();
        if(index === this.length) this.push(val);
        var valor = new Node(val);
        var bfn = this.get(index-1);
        var afn = bfn.next;

        bfn.next = valor, valor.prev = bfn;
        valor.next = afn, afn.prev = valor;
        this.length++;
        return true;
    }
    remove(){
        if(index < 0 || index >= this.length) return undefined;
        if (index === 0) this.shift();
        if(index === this.length-1) this.pop();
        var bfn = this.get(index);
        //beforenode.next = bfn.prev;
        //afternode.prev = bfn.next;
        //beforenoede.next = afternode
        //afternode.prev = beforenode
        bfn.prev.next = bfn.next;
        bfn.next.prev = bfn.prev; 
        bfn.next = null;
        bfn.prev = null;
        this.length--;
        return bfn;

    }
    reverse() {
        var current = this.head;
        var tail = this.head;
        while(this.length){
            current.next = current.prev; 
            if(current.next = null) {
                tail = this.head;
                head = current;
            }
        }

    }

}