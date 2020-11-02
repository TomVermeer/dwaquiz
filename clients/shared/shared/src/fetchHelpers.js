import {API_BASE_URL} from "./constants";

let globalHttpErrorHandler = null;

export const installGlobalHttpErrorHandler = (errorHandler) => {
    globalHttpErrorHandler = errorHandler;
};


const isErrorResponse = (response) => response.status < 200 || response.status >= 300;

const checkAndParseResponse = async (responsePromise) => {
    const response = await responsePromise;
    if (!isErrorResponse(response)) {
        return response.json();
    } else {
        if (globalHttpErrorHandler == null) {
            throw new Error(`Unexpected http statuscode: ${response.status}`);
        } else {
            globalHttpErrorHandler(await response.json());
            return Promise.reject(response);
        }
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

const post = createHelperForMethod('POST');
export const postAndParse = (path, body) => checkAndParseResponse(post(path, body));

const deleteReq = createHelperForMethod('DELETE');
export const deleteAndParse = (path) => checkAndParseResponse(deleteReq(path));


const get = createHelperForMethod('GET');
export const getAndParse = (path, body) => checkAndParseResponse(get(path, body));


const patch = createHelperForMethod('PATCH');
export const patchAndParse = (path, body) => checkAndParseResponse(patch(path, body));

const put = createHelperForMethod('PUT');
export const putAndParse = (path, body) => checkAndParseResponse(put(path, body));
