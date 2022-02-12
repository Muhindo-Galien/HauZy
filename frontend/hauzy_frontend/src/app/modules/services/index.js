import axios from './http';

export const get = async (url) => {
    const handleError = (err) => {
        if (err) throw err;
    }

    const resolveResponse = (response) => {
        return response;
    }

    console.log(url);
    return axios
        .get(url)
        .then(resolveResponse)
        .catch(handleError);
};
