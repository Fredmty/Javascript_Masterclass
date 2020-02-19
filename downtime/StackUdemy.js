class Stack {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Node {
    constructor(value){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
    push(val){
        let novo = new Node(val);
        if(Stack.isEmpty()){
            this.first = node;
            this.last = node;
        }
        if(this.size === 1){
            let primeiro = this.first;
            this.first = node;
            this.first.next = primeiro;
        }
        Stack.size++;
    }
    pop(){
        if(Stack.isEmpty()) return null;
        let temp = this.first;
        if(Stack.size === 1) this.first && this.last === null;
        if(Stack.size > 1) this.first = this.first.next;
        Stack.size--;
        return temp;
    }
}

