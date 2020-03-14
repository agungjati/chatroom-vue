import axios from 'axios'

const URL_API = 'http://localhost:3000/';
export const getChatrooms = () => {
    return axios.get(URL_API+'chatrooms')
}
export const getChatroom = (id) => {
    return axios.get(URL_API+'chatroom/'+ id)
}