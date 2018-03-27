import { 
  OPEN_MODAL, 
  CLOSE_MODAL, 
  SEARCH_VIDEO, 
  SEARCH_ASYNC_VIDEO,
  IS_LOAGIND
} from '../actions-types/index';

export function openModal (mediaId) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId,
    }
  }
}


export function closeModal () {
  return {
    type: CLOSE_MODAL,
  }
}

export function isLoading(value) {
  return {
    type: IS_LOAGIND,
    payload: {
      value
    }
  }
}

export function searchVideo (query) {
  return {
    type: SEARCH_VIDEO,
    payload: {
      query,
    }
  }
}

// ReduxThunk
export function searchAsyncVideo (query) {
  return (dispatch) => {
    //fetch(`http://miapi.com/buscar/${query}`).then((data)=>{
    // dispatch(searchVideo(data))
    // })
    dispatch(isLoading(true))
    setTimeout(() => {
      dispatch(isLoading(false))
      dispatch(searchVideo(query))
    }, 5000);
  }
}

