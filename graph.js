class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        if(!this.list[vertex]) {
            this.list[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.list[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]) {
            this.addVertex(vertex2)
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.list[vertex1].has(vertex2) && this.list[vertex2].has(vertex1)
        )
    }

    display() {
        for(let vertex in this.list) {
            console.log(vertex + "->" + [...this.list[vertex]]);
        }
    }

    removeEdge(vertex1, vertex2) {
        if(!this.hasEdge(vertex1,vertex2)) return
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.list[vertex]) {
            return
        }
        for(let adVertex of this.list[vertex]) {
            this.removeEdge(vertex, adVertex)
        }
        delete this.list[vertex]
    }

    bfs(startVertex) {
        let visited = new Set()
        let queue = [startVertex]
        while(queue.length > 0) {
            let currentVertex = queue.shift()
            if(!visited.has(currentVertex)) {
                console.log(currentVertex);
                visited.add(currentVertex)
                for(const neighbor of this.list[currentVertex]) {
                    if(!visited.has(neighbor)) {
                        queue.push(neighbor)
                    }
                }
            }
        }
    }

    dfs(startVertex) {
        let visited = new Set()
        const dfsHelper = (vertex) =>{
            console.log(vertex);
            visited.add(vertex)
            for(let neighbor of this.list[vertex]) {
                if(!visited.has(neighbor)) {
                    dfsHelper(neighbor)
                }
            }
        }
        dfsHelper(startVertex)
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.display()
console.log(graph.hasEdge('A','D'));
graph.display()
graph.dfs("A")
