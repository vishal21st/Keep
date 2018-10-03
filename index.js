import router from './src/js/router'
import App from './src/components/App.js'

router.addUriListener();
router.navigateTo('');

let noteState1 = {
  title: "title",
  text: "cool",
  color: "white",
  isEditable: false,
  labels: ['Inspirational']
}

let noteState2 = {
  title: "title",
  text: "cool",
  color: "white",
  isEditable: false,
  labels: ['Inspirational']
}

let state = {
  tasks: [
  ]
}

window.app  = new App(state, document.getElementById('AppPlaceHolder'));
app.render();
// window.colorChange = function (event) {
//   event.stopPropagation()
// }
