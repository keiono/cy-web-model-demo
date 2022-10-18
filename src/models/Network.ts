export interface Network {
  id: string,
  nodes: Object[],
  edges: Object[],
}

export const createNewNetwork = (id: string): Network => {
  return {
    id,
    nodes: [],
    edges: [],
  }
}