import ColorPallet from './ColorPallet'
import LabelDropDown from './LabelDropDown'
import Label from './Label'
const Note = class Note {
  constructor(state, parent, index) {
    this.state = state
    this.template = document.getElementById("noteTemplate");
    this.parent = parent
    this.index = index
  }

  render() {
    let clone = this.template.content.cloneNode(true)
    let note = clone.querySelector('.note')
    let noteContent = clone.querySelector('.note-content')
    let noteBody = clone.querySelector('.note-body')
    let noteTitle = clone.querySelector('.note-title')
    let footer = clone.querySelector('.note-footer-actions')
    let self = this
    let tagList = clone.querySelector('.note-labels')
    note.dataset.index = this.index
    if (this.state.isEditable) {
      note.classList.add('is-editable');
      noteBody.contentEditable = true
      clone.querySelector('.note-title').contentEditable = true
    } else {
      note.classList.remove('is-editable');
      noteBody.contentEditable = false
      noteTitle.contentEditable = false
    }

    if (this.state.color) {
      noteContent.classList.add(`is-${this.state.color}`);
    }

    noteBody.innerText = this.state.text
    noteTitle.innerText = this.state.title

    this.parent.appendChild(clone)
    this.renderColorPallet(footer)
    this.renderLabelDropdown(footer)

    this.state.labels.forEach(function(label) {
      self.renderTags(label, tagList)
    })
  }

  renderColorPallet(footer) {
    let pallet = new ColorPallet(this.state.color, footer)
    pallet.render()
  }

  renderLabelDropdown(footer) {
    let dropDown = new LabelDropDown(this.state.labels, footer)
    dropDown.render()
  }

  renderTags(label, tagList) {
    let tag = new Label(label, tagList)
    tag.render()
  }
}

export default Note
