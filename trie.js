// class TrieNode{
//     constructor(){
//         this.children={}
//         this.isEnd=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new TrieNode()
//     }

//     insert(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new TrieNode
//             }
//             node=node.children[char]
//         }
//         node.isEnd=true
//     }
//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEnd
//     }
//     prefix(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }
//     display() {
//         const words = [];
    
//         const displayHelper = (node, currentWord) => {
//             if (node.isEnd) {
//                 words.push(currentWord); 
//             }
            
//             for (let char in node.children) {
//                 displayHelper(node.children[char], currentWord + char);
//             }
//         };
        
//         displayHelper(this.root, '');
    
//         console.log(words);
//       }
// }

class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root
        for(let char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }

    prefix(word) {
        let node = this.root
        for(let char of word) {
            if(!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return true
    }

    search(word) {
        let node = this.root
        for(let char of word) {
            if(!node.children[char]) {
                return false
            }
            node = node.children[char]
        }
        return node.isEnd
    }

    display() {
        let arr = []
        const displayHelper = (node, currentWord) =>{
            if(node.isEnd) {
                arr.push(currentWord)
            } 
            for(let char in node.children) {
                displayHelper(node.children[char], currentWord + char)
            }
        }
        displayHelper(this.root, '')
        console.log(arr);
    }
}

let trie = new Trie();

trie.insert("hello");
trie.insert("hell");
trie.insert("heaven");
trie.insert("goodbye");
console.log(trie.search("hell")); // true
console.log(trie.search("hello")); // true
console.log(trie.search("heaven")); // true
console.log(trie.search("good")); // false
console.log(trie.prefix("he")); // true
console.log(trie.prefix("good")); // true
console.log(trie.prefix("bad")); // false
trie.display()