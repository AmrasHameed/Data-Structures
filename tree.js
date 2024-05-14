// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root === null
//     }
//     insert(value) {
//         const node = new Node(value)
//         if(this.isEmpty()) {
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }
//     insertNode(root, node) {
//         if(node.value < root.value) {
//             if(root.left === null) {
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node) 
//             }
//         } else {
//             if(root.right === null) {
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }

//     search(root, value) {
//         if(!root) {
//             return false
//         } else {
//             if(value === root.value) {
//                 return true
//             } else if(value < root.value) {
//                 return this.search(root.left, value)
//             } else {
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     preOrder(root) {
//         if(root) {
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root) {
//         if(root) {
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root) {
//         if(root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     levelOrder() {
//         let queue = {}
//         let rear = 0
//         let front= 0
//         queue[rear] = this.root
//         rear++
//         while(rear !== front){
//             let curr = queue[front]
//             console.log(curr.value);
//             delete queue[front]
//             front++
//             if(curr.left) {
//                 queue[rear] = curr.left
//                 rear++
//             }
//             if(curr.right) {
//                 queue[rear] = curr.right
//                 rear++
//             }
//         }        
//     }
//     // min(root) {
//     //     if(!root.left) {
//     //         return root.value
//     //     } else {
//     //         return this.min(root.left)
//     //     }
//     // }
//     max(root) {
//         if(!root.right) {
//             return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }
    

//     min(root) {
//         if(!root.left) {
//             return root.value
//         } else {
//             return this.min(root.left)
//         }
//     }

//     delete(root, value) {
//         if(root == null) {
//             return root
//         }
//         if(root.value < value) {
//             root.right = this.delete(root.right, value)
//         } else if(root.value > value) {
//             root.left = this.delete(root.left, value)
//         } else {
//             if(!root.right) {
//                 return root.left
//             } 
//             if(!root.left) {
//                 return root.right
//             }
//             root.value = this.min(root.right)
//             root.right = this.delete(root.right, root.value)
//         }
//         return root
//     }

     
// }

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
        if(node.value < root.value) {
            if(root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        }
        if(node.value > root.value) {
            if(root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false
        } else {
            if(root.value == value) {
                return true
            } else if(value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder() {
        let queue = {}
        let front = 0
        let rear = 0
        queue[rear] = this.root
        rear++
        while(rear !== front) {
            let curr = queue[front]
            console.log(curr.value);
            delete queue[front]
            front++
            if(curr.left) {
                queue[rear] = curr.left
                rear++
            } 
            if(curr.right) {
                queue[rear] = curr.right
                rear++
            }
        }
    }
    max(root) {
        if(root.right) {
            return this.max(root.right)
        }
        return root.value
    }
    min(root) {
        if(!root.left) {
            return root.value
        } 
        return this.min(root.left)
    }

    delete(root, value) {
        if(root == null) {
            return root
        }
        if(root.value < value) {
            root.right = this.delete(root.right, value)
        } else if(root.value > value) {
            root.left = this.delete(root.left, value)
        } else {
            if(!root.right) {
                return root.left
            } 
            if(!root.left) {
                return root.right
            }
            root.value = this.min(root.right)
            root.right = this.delete(root.right, root.value)
        }
        return root
    }
    closest(root,target){
        let clos=root.value
        while(root)
        {
            if(Math.abs(root.value-target)<Math.abs(clos-target))
            {
                clos=root.value
            }
            if(target<root.value){
                root=root.left
            }else{
                root=root.right
            }
        }
        return clos
    }
    findPath(target)
    {
        let path=[]
        let curr=this.root
        while(curr)
        {
            path.push(curr.value)
            if(curr.value==target){
                path.pop()
                return path
            }
            if(target<curr.value)
            {
                curr=curr.left
            }else{
                curr=curr.right
            }
        }
    }
    height(root)
    {
        if(root===null)
        {
            return 0
        }
        let left=this.height(root.left)
        let right=this.height(root.right)
        
        return Math.max(left,right) + 1
    }
    ancestor(root, value1, value2) {
        if(root.value < value1 && root.value < value2) {
            return this.ancestor(root.right, value1, value2)
        } else if(root.value > value1 && root.value > value2) {
            return this.ancestor(root.left, value1, value2)
        } else {
            return root.value
        }
    }
}

const bst = new BinarySearchTree()
// console.log(bst.isEmpty());
bst.insert(10)
bst.insert(20)
bst.insert(19)
bst.insert(9)
bst.insert(22)
bst.insert(24)
// console.log(bst.search(bst.root,5));
// console.log(bst.search(bst.root,20));
// bst.inOrder(bst.root);
// bst.levelOrder()
// console.log("dsifh",bst.min(bst.root));
console.log("kjnsdfkjb");
// bst.delete(bst.root,10)
console.log(bst.findPath(22));
// bst.levelOrder()
// console.log(bst.height(bst.root));
console.log(bst.ancestor(bst.root, 9, 24));