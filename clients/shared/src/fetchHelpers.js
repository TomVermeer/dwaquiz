import {API_BASE_URL} from "./constants";

export const isErrorResponse = (response) => response.status < 200 || response.status >= 300;

export const checkAndParseResponse = async (responsePromise) => {
    const response = await responsePromise;
    if (!isErrorResponse(response)) {
        return response.json();
    } else {
        throw new Error(`Unexpected http statuscode: ${response.status}`);
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

const createHelperForMethod = method => (path, body) => fetch(API_BASE_URL + path, options(body, method));

export const post = createHelperForMethod('POST');

export const deleteReq = createHelperForMethod('DELETE');

export const postAndParse = (path, body) => checkAndParseResponse(post(path, body));

export const get = (path, body) => fetch(API_BASE_URL + path, options(body, 'GET'));

export const getAndParse = (path, body) => get(path, body)
    .then(response => {
       if(isErrorResponse(response)) {
           throw new Error(`Unexpected http statuscode: ${response.status}`);
       } else {
           return response.json();
       }
    });

export const patch = createHelperForMethod('PATCH');

export const put = createHelperForMethod('PUT');