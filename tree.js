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

//     insert(value) {
//         const node = new Node(value)
//         if(this.root === null) {
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
//         }
//         if(node.value > root.value) {
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
//             if(root.value == value) {
//                 return true
//             } else if(value < root.value) {
//                 return this.search(root.left, value)
//             } else {
//                 return this.search(root.right, value)
//             }
//         }
//     }

//     preOrder(root) {
//         if(root) {
//             console.log(root.value);
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
//         let front = 0
//         let rear = 0
//         queue[rear] = this.root
//         rear++
//         while(rear !== front) {
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
//     max(root) {
//         if(root.right) {
//             return this.max(root.right)
//         }
//         return root.value
//     }
//     min(root) {
//         if(!root.left) {
//             return root.value
//         } 
//         return this.min(root.left)
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
    
//     findPath(target)
//     {
//         let path=[]
//         let curr=this.root
//         while(curr)
//         {
//             path.push(curr.value)
//             if(curr.value==target){
//                 path.pop()
//                 return path
//             }
//             if(target<curr.value)
//             {
//                 curr=curr.left
//             }else{
//                 curr=curr.right
//             }
//         }
//     }
//     height(root)
//     {
//         if(root===null)
//         {
//             return 0
//         }
//         let left=this.height(root.left)
//         let right=this.height(root.right)
        
//         return Math.max(left,right) + 1
//     }
//     ancestor(root, value1, value2) {
//         if(root.value < value1 && root.value < value2) {
//             return this.ancestor(root.right, value1, value2)
//         } else if(root.value > value1 && root.value > value2) {
//             return this.ancestor(root.left, value1, value2)
//         } else {
//             return root.value
//         }
//     }

//     findDepth(value) {
//         let curr = this.root
//         let depth = 0
//         while(curr) {
//             if(curr.value === value) {
//                 return depth
//             }
//             if(curr.value < value) {
//                 curr = curr.right
//             } else {
//                 curr = curr.left
//             }
//             depth++
//         }
//         return null
    
//     }
//     closest(root, value) {
//         let close = root.value
//         while(root) {
//             if(Math.abs(root.value - value) < Math.abs(close - value)) {
//                 close = root.value
//             }
//             if(value < root.value) {
//                 root = root.left
//             } else {
//                 root = root.right
//             }
//         }
//         return close
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
        if(!this.root) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if(node.value < root.value) {
            if(!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if(!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(root, value) {
        if(!root) {
            return false
        }
        if(root.value == value) {
            return true
        } else if(root.value > value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    preOrder(root) {
        if(!root) return 
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }
    inOrder(root) {
        if(!root) return
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }
    postOrder(root) {
        if(!root) return
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);
    }

    levelOrder() {
        let queue = {}
        let front = 0
        let rear = 0
        queue[rear] = this.root
        rear++
        while(rear !== front) {
            let curr = queue[front]
            delete queue[front]
            console.log(curr.value)
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

    min(root) {
        if(!root.left) {
            return root.value
        }
        return this.min(root.left)
    }

    max(root) {
        if(!root.right) {
            return root.value
        }
        return this.max(root.right)
    }

    delete(root, value) {
        if(root == null) {
            return root
        }
        if(value < root.value) {
            root.left = this.delete(root.left, value)
        } else if(value > root.value) {
            root.right = this.delete(root.right, value)
        } else {
            if(!root.left) {
                return root.right
            } 
            if(!root.right) {
                return root.right
            }
            root.value = this.min(root.right)
            root.right = this.delete(root.right, root.value)
        }
        return root
    }

    height(root) {
        if(!root) {
            return 0
        }
        let left = this.height(root.left)
        let right = this.height(root.right)
        return Math.max(left, right) + 1
    }

    findDepth(value) {
        let depth = 0
        let curr = this.root
        while(curr) {
            if(curr.value == value) {
                return depth
            }
            else if(value < curr.value) {
                curr = curr.left
            } else {
                curr = curr.right
            }
            depth++
        }    
    }
    ancestor(root, p, q) {
        if(!this.search(root, p) || !this.search(root, q)) return "Doesnt Exist"
        if(root.value < p && root.value < q) {
            return this.ancestor(root.right, p, q)
        } else if(root.value > p && root.value > q) {
            return this.ancestor(root.left, p, q)
        } else {
            return root.value
        }
    }

    closest(root, value) {
        let close = root.value
        while(root) {
            if(Math.abs(root.value - value) < Math.abs(close - value)) {
                close = root.value
            } 
            if(value < root.value) {
                root = root.left
            } else {
                root = root.right
            }
        }
        return close
    }
    findPath(value) {
        let path = []
        let curr = this.root
        while(curr) {
            path.push(curr.value)
            if(curr.value == value) {
                path.pop()
                return path
            } else if(curr.value < value) {
                curr = curr.right
            } else {
                curr = curr.left
            }
        }
    }
    isValid(root) {
        if(root == null) {
            return true
        }
        if(root.left && this.max(root.left) > root.value) {
            return false
        }
        if(root.right && this.min(root.right) < root.value) {
            return false
        }
        if(!this.isValid(root.left) || !this.isValid(root.right)) {
            return false
        }
        return true
    }
}

const bst = new BinarySearchTree()
console.log(bst.isValid(notBST));
// console.log(bst.isEmpty());
bst.insert(5)
bst.insert(1)
bst.insert(4)
bst.insert(3)
bst.insert(6)
bst.insert(7)
// console.log(bst.min(bst.root));\

// bst.delete(bst.root,10)
console.log("sdofjsdlfn");
// console.log(bst.findPath(22));
console.log(bst.closest(bst.root, 23));
// console.log(bst.findDepth(24)); 
// console.log(bst.ancestor(bst.root, 9, 24));
// bst.inOrder(bst.root);
// console.log(bst.height(bst.root));
// bst.levelOrder()
// console.log(bst.search(bst.root,22));
// console.log(bst.search(bst.root,25));
// bst.delete(bst.root, 10)
// console.log("object");
// bst.levelOrder()
// console.log(bst.height(bst.root));

// console.log(bst.max(bst.root));

// console.log(bst.search(bst.root, 20));

// console.log("dsifh",bst.min(bst.root));
// console.log("kjnsdfkjb");
// bst.levelOrder()