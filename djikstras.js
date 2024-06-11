function dijkstra(graph, start) {
    const distances = {};
    const queue = [];
  
    // Initialize distances and queue
    for (const vertex in graph) {
      distances[vertex] = Infinity;
      queue.push(vertex);
    }
    distances[start] = 0;
  
    while (queue.length > 0) {
      // Extract the vertex with the minimum distance
      let minDistance = Infinity;
      let minVertex;
      for (const vertex of queue) {
        if (distances[vertex] < minDistance) {
          minDistance = distances[vertex];
          minVertex = vertex;
        }
      }
      queue = queue.filter(vertex => vertex !== minVertex);
  
      // Update distances of adjacent vertices
      for (const adjacentVertex in graph[minVertex]) {
        const weight = graph[minVertex][adjacentVertex];
        const distance = distances[minVertex] + weight;
        if (distance < distances[adjacentVertex]) {
          distances[adjacentVertex] = distance;
        }
      }
    }
  
    return distances;
  }


const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
  };
  
  const result = dijkstra(graph, 'A');
  console.log(result);
  