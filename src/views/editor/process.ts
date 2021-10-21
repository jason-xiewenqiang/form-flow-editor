import { Graph } from '@antv/x6'

export class Process {
  public graph: Graph
  constructor(el: HTMLElement, width: number, height: number) {
    this.graph = new Graph({
      container: el,
      height,
      width,
      grid: true
    })
  }
}

export default {}
