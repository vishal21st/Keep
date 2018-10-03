const label = class Label {
  constructor(state, parent, index) {
    this.state = state
    this.template = document.getElementById("label");
    this.parent = parent
    this.index = index
  }

  render() {
    let clone = this.template.content.cloneNode(true)
    let label = clone.querySelector('.tag')
    label.dataset.label = this.state
    let tag = clone.querySelector('.text')
    tag.innerHTML = this.state
    this.parent.appendChild(label)
  }
}

export default label
