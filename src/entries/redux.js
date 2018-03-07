// console.log('Hola mundo redux');
import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

// Action
function handleSubmit (event) {
  event.preventDefault();
  const data = new FormData($form);
  const title = data.get('title');
  console.log(title);
  // console.log(this.title.value)
  // console.log(event)
  // event.target.title.value = ''
  event.target.reset();
  // dispatch()
  store.dispatch({
    type: 'ADD_SONG',
    payload: {
      // title: title,
      title, // Se envia como un objeto para futuros campos agregados al form
    } // Optional el payload es optional
  });
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

/*
const store = createStore(
  reducer,
  initialState,
  enhancer // solo se usa para desarrollo quitar para producción
)
*/

/*
  -Reducers:
  1. Es una función pura.
  2. Puede haber más de un reducer en una aplicación pero solo debe haber un store.
  3. Devuelve el siguiente estado.
  
  -Que no hacer en los reducers:
  1. Modificar los argumentos recibidos
  2. Llamar a APIs (u otras tareas secundarias)
  3. Llamar a funciones no puras como Date.now(), Math.random()

  Funciones puras: concepto de programación funcional.
  1. Dados los mismos datos de entrada, deben retornar el mismo resultado sin importar el número de veces que se llame.
  2. No debe tener objetos secundarios.
  mas info -> http://www.etnassoft.com/2016/06/21/las-funciones-puras-en-javascript-concepto-ejemplos-y-beneficios/
*/

// Controlamos el cambio del state en el reducer
const reducer = function (state, action) {
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    default:
      return state
  }
}

// https://github.com/zalmoxisus/redux-devtools-extension
// Creación del store
const store = createStore(
  // (state) => state, // reducer
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Esto es un complemento de la extencion del navegador solo para desarrollo quitar en producción.
)


function render() {
  const $container = document.getElementById('playlist');
  const playlist = store.getState(); // Datos del initialState
  $container.innerHTML = '';
  playlist.forEach((item) => {
    const template = document.createElement('p');
    template.textContent = item.title;
    $container.appendChild(template);
  });
}

render();

function handleChange() {
  render();
}

store.subscribe(handleChange)

console.log(store.getState());
