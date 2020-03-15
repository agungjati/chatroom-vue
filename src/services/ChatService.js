import axios from 'axios'

const URL_API = 'http://localhost:3000/';
export const URL_SOCKET = 'http://localhost:3001/';
export const getChatrooms = () => {
    return axios.get(URL_API+'chatrooms')
}
export const getChatroom = (id) => {
    return axios.get(URL_API+'chatroom/'+ id)
}
export const addMessage = (id, username, message) => {
    return axios.post(URL_API+'add-message/', {id, username, message})
}