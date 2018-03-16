import schema from '../schemas/index';
import { fromJS } from 'immutable';
// SE ESTA USANDO DE ESTA FORMA PORQUE SON DOS REDUCERS
const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  // search: [],
  search: '',
});

function data(state=initialState, action) {
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // action.payload.query;
      /*const list = state.data.categories[2].playlist;
      const results = list.filter((item) => {
        console.log(item);
        return item.author.includes(action.payload.query)
      });
      console.log(results)*/
      /*const results = [];

      if(action.payload.query) {
        state.data.categories.map((category) => {
          // console.log(category)
          category.playlist.filter((item) => {
            // console.log(item);
            const author = item.author.toLowerCase();
            const query = action.payload.query.toLowerCase();
            if(author.includes(query)) {
              // console.log(item);
              results.push(item);
            }
            // return author.includes(query);
            // return item.author.includes(action.payload.query)
          });
        });
      }

      return {
        ...state,
        search: results
      }*/
      return state.set('search', action.payload.query)
    }
    default:
      return state
  }
}

export default data;
