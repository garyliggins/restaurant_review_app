import axios from 'axios';

export default axios.create({
    baseURL: "https://mern-restaurants-app.herokuapp.com/",
    headers: {
        'Content-type': 'application/json'
    }
});



// 'http://localhost:5000/api/v1/restaurants'