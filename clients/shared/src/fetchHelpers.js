import {API_BASE_URL} from "./constants";

export const isErrorResponse = (response) => response.status < 200 || response.status >= 300;

export const checkAndParseResponse = async (responsePromise) => {
    const response = await responsePromise;
    if(!isErrorResponse(response)) {
        return response.json();
    } else {
        throw new Error('Unexpected http statuscode: ', response);
    }
};

export const post = (path, body) => fetch(API_BASE_URL + path, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    }
});

export const postAndParse = (path, body) => checkAndParseResponse(post(path, body));