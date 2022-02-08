import axios from 'axios';

const api = axios.create({
	baseURL: 'https://9mdo8709bd.execute-api.eu-west-2.amazonaws.com/prod'
});

export default api;
