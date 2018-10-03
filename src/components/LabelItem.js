
const item = class LabelItem {
  constructor(state, parent, index) {
    this.state = state
    this.template = document.getElementById("label-item");
    this.parent = parent
    this.index = index
  }

  render() {
    let clone = this.template.content.cloneNode(true)
    let pallet = clone.querySelector('.label-item')
    let labelText = clone.querySelector('.label-text')
    let checkBox = clone.querySelector('.check-box')
    
    pallet.dataset.label = this.state.label
    labelText.innerHTML = this.state.label
    if (this.state.selected) {
      checkBox.classList.add('checked')
    }

    this.parent.appendChild(pallet)
  }
}

export default item
