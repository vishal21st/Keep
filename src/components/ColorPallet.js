import PalletItem from './PalletItem'
const pallet = class ColorPallet {
  constructor(state, parent, index) {
    this.state = state
    this.template = document.getElementById("colorPalleteTemplate");
    this.parent = parent
    this.index = index
    this.colors = ['green', 'red', 'blue', 'dark-blue', 'brown','yellow', 'orange', 'purple', 'teal', 'grey', 'white', 'pink']
  }

  render() {
    let clone = this.template.content.cloneNode(true)
    let palletDropDown = clone.querySelector('.color-pallet-list')
    this.parent.appendChild(clone)
    let self = this
    self.colors.forEach(function(val) {
      self.renderPalletItem({ 
        color: val, 
        selected: val == self.state
      }, palletDropDown)  
    })
    
  }

  renderPalletItem(state, palletDropDown) {
    let pallet = new PalletItem(state, palletDropDown)
    pallet.render()
  }
}

export default pallet
