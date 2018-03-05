// console.log('Hola mundo redux');
import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      // title: title,
      title, // Se envia como un objeto para futuros campos agregados al form
    } // Optional
  })
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
  enhancer // solo se usa para desarrollo quitar para producción
)*/

// https://github.com/zalmoxisus/redux-devtools-extension

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const $container = document.getElementById('playlist');
const playlist = store.getState();

playlist.forEach((item) => {
  const template = document.createElement('p');
  template.textContent = item.title;
  $container.appendChild(template);
});

console.log(store.getState());
