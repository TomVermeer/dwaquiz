import {API_BASE_URL} from "./constants";

export const isErrorResponse = (response) => response.status < 200 || response.status >= 300;

export const checkAndParseResponse = async (responsePromise) => {
    const response = await responsePromise;
    if (!isErrorResponse(response)) {
        return response.json();
    } else {
        throw new Error('Unexpected http statuscode: ', response);
    }
};

const options = (body, method, additionalHeaders = {}) => {
    return {
        credentials: 'include',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            ...additionalHeaders
        },
        method
    };
};

export const post = (path, body) => fetch(API_BASE_URL + path, options(body, 'POST'));

export const deleteReq = (path, body) => fetch(API_BASE_URL + path, options(body, 'DELETE'));

export const postAndParse = (path, body) => checkAndParseResponse(post(path, body));