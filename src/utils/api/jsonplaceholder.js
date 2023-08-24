import axios from "axios";

const apiBaseUrl = 'https://jsonplaceholder.typicode.com/posts';

const apiCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint,
    };
    try {
        const response = await axios.request(options);
        return response.data; 
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const fetchDataCard = () => {
    return apiCall(apiBaseUrl);
};