// console.log('Hola mundo redux');
import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
}

const initialState = [
  {
    title: 'Despacito',
  },
  {
    title: 'One more time',
  },
  {
    title: 'let me love you',
  },
]

/*const store = createStore(
  reducer,
  initialState,
  enhancer
)*/

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)