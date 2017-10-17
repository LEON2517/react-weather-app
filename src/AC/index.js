import { DELETE_WEATHERDISPLAY } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_WEATHERDISPLAY,
        payload: { id }
    }
}