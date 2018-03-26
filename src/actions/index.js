import { OPEN_MODAL, CLOSE_MODAL, SEARCH_VIDEO } from '../actions-types/index';

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

export function searchVideo (query) {
  return {
    type: SEARCH_VIDEO,
    payload: {
      query,
    }
  }
}
