class Node {
    children;
    data;

    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        let child = new Node(data);
        this.children.push(child);
        return child;
    } 

    isLeaf() {
        this.children.length === 0;
    }
}

class Tree {
    root;
    constructor(data) {
        this.root = new Node(data);
    }

    nodeCount() {
        return this._countNodes(this.root);
    }

    _countNodes(node) {
        if (node.isLeaf()) {
            console.log(node.data, node.children.length);
            return 1;
        }
    
        let sum = 1;
        for (let i = 0; i < node.children.length; i++) {
            sum += this._countNodes(node.children[i]);
        }
    
        return sum;
    }
}

let tree = new Tree('Root');
tree.root.add('N 1');
let n2 = tree.root.add('N 2');
let n3 = tree.root.add('N 3');
n2.add('N 4');
n2.add('N 5');
n3.add('N 6');
n3.add('N 7')

console.log(tree);



console.log(tree.nodeCount());