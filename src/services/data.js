import axios from 'axios';
// class DataService {
    // getAll(token) {
    //     axios.defaults.headers.common["Authorization"] = "Token " + token;
    //     return axios.get('http://localhost:8000/api/post/');
    // }
    // createTodo(data, token) {
    //     axios.defaults.headers.common["Authorization"] = "Token " + token;
    //     return axios.post("http://localhost:8000/api/post/", data);
    // }
    // updateTodo(id, data, token) {
    //     axios.defaults.headers.common["Authorization"] = "Token " + token;
    //     return axios.put(`http://localhost:8000/api/post/${id}`, data);
    // }
    // deleteTodo(id, token) {
    //     axios.defaults.headers.common["Authorization"] = "Token " + token;
    //     return axios.delete(`http://localhost:8000/api/post/${id}`);
    // }
    // completeTodo(id, token) {
    //     axios.defaults.headers.common["Authorization"] = "Token " + token;
    //     return axios.put(`http://localhost:8000/api/post/${id}/complete`);
    // }
    // login(data) {
    //     return axios.post("http://localhost:8000/api/login/", data);
    // }
    // signup(data) {
    //     return axios.post("http://localhost:8000/api/signup/", data);
    // }
// }
// export default new DataService();

// http://127.0.0.1:8000/api/post/?format=json
// https://jsonplaceholder.typicode.com/posts?_start=1&_end=4

export const getAll = () => {
    return axios.get('http://127.0.0.1:8000/api/post/?format=json');
}

export const createPost = (data) => {
    return axios.post("http://localhost:8000/api/post/", data);
}


