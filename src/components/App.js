import Note from './Note'
const App = class App {
  constructor(state, parent) {
    this.state = state
    this.template = document.getElementById("appTemplate");
    this.parent = parent
  }

  render() {
    let clone = this.template.content.cloneNode(true)
    this.parent.appendChild(clone)


    for (let [index, value] of this.state.tasks.entries()) {
      let note = new Note(value, document.getElementById('task-list'), index)
      note.render()
    }
  }

  reRender() {
    this.parent.innerHTML = ""
    this.render()
  }


  getIndex(element) {
    return element.closest('.note').dataset.index
  }

  setColor(event) {
    event.stopPropagation()
    let element = event.target
    let index = this.getIndex(element)
    let color = element.dataset.color
    this.state.tasks[index]['color'] = color
    this.reRender()
  }

  deleteTask() {

  }

  addNewTask() {
    this.state.tasks.push({
      title: "",
      text: "",
      color: "white",
      isEditable: true,
      labels: []
    })
    this.reRender()
  }

  setLabel(event) {
    let element = event.target
    let index = this.getIndex(element)
    let label = element.closest('.label-item').dataset.label
    let labels = this.state.tasks[index].labels
    if (!labels.includes(label)) {
      labels.push(label)
    } else {
      labels.pop(label)
    }
    this.reRender()
    event.stopPropagation()
  }

  makeTaskEditable(event) {
    let element = event.target
    let index = this.getIndex(element)
    if (!this.state.tasks[index]['isEditable']) {
      this.state.tasks[index]['isEditable'] = true
      this.reRender()
    }
    event.stopPropagation()
  }

  saveNoteAndClose(event) {
    event.stopPropagation()
    let element = event.target
    let index = this.getIndex(element)
    let note = element.closest('.note')
    let title = note.querySelector('.note-title').textContent
    let bodyText = note.querySelector('.note-body').textContent
    let task = this.state.tasks[index]
    
    if (task.title != title || task.text != bodyText) {
      task.title = title
      task.text = bodyText
    }

    task.isEditable = false
    this.reRender()
  }


  removeLabel(e) {
    event.stopPropagation()
    let element = event.target
    let index = this.getIndex(element)
    let label = element.dataset.label
    let labels = this.state.tasks[index].labels
    labels.pop(label)
    this.reRender()
  }

  stopPropagation(e) {
    e.stopPropagation()
  }

}

export default App
