
const item = class PalletItem {
  constructor(state, parent, index) {
    this.state = state
    this.template = document.getElementById("pallet-item");
    this.parent = parent
    this.index = index
  }

  render() {
    let clone = this.template.content.cloneNode(true)
    let pallet = clone.querySelector('.pallet-item')
    
    pallet.dataset.color = this.state.color
    pallet.classList.add(`is-${this.state.color}`)
    if (this.state.selected) {
      pallet.classList.add('selected')  
    }
    
    this.parent.appendChild(pallet)
  }
}

export default item
