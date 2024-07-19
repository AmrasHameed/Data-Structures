class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if(this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if(root.value > node.value) {
            if(root.left == null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if(root.right == null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    inOrder(root) {
        if(!root) return
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(7)
bst.insert(15)
bst.insert(23)
bst.insert(2)
bst.insert(5)
bst.inOrder(bst.root)