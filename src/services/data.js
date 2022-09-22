import axios from 'axios';

// https://jsonplaceholder.typicode.com/posts?_start=1&_end=4

export default class DataService {

    static async getAll() {
        //axios.defaults.headers.common["Authorization"] = "Token " + token;
        return await axios.get('http://127.0.0.1:8000/api/post/?format=json');
     }

    createPost(data) {
         //axios.defaults.headers.common["Authorization"] = "Token " + token;
         return axios.post("http://localhost:8000/api/post/", data);
    }

    // login(data) {
    //     return axios.post("http://localhost:8000/api/login/", data);
    // }

    // signup(data) {
    //     return axios.post("http://localhost:8000/api/signup/", data);
    // }
}