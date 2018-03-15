import api from '../api.json';
// Doc ->https://github.com/paularmstrong/normalizr
// Mas: http://fullstackdeveloper.info/redux-state-with-immutable-js-normalizr-and-reselect/
import { normalize, schema } from 'normalizr';

// const media = new schema.Entity(key, definicion de mi esquema, opciones);
const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({...value, category: parent.id})
});

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
}); // Indicamos el object playlist que va convertir en media

// No siempre los datos vienen en array pueden venir en objects
const categories = { categories: new schema.Array(category)}
// Indicamos categories que es el array de nuestra data 
const normalizedData = normalize(api, categories);

export default normalizedData;
