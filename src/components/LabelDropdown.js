import LabelItem from './LabelItem'
const dropDown = class LabelDropdown {
  constructor(state, parent, index) {
    this.state = state
    this.template = document.getElementById("labelDropDownTemplate");
    this.parent = parent
    this.index = index
    this.labels = ['Inspirational', 'Personal', 'Work']
  }

  render() {
    let clone = this.template.content.cloneNode(true)
    let dropdown = clone.querySelector('.label-list')
    let self = this
    
    self.labels.forEach(function(val) {
      self.renderLabelItem({ 
        label: val,
        selected: self.state.includes(val)
      }, dropdown)  
    })

    this.parent.appendChild(clone)
  }

  renderLabelItem(state, dropdown) {
    let item = new LabelItem (state, dropdown)
    item.render()
  }
}

export default dropDown
