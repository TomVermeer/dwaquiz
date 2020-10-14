let storeSingleton = null;

export const setStore = (store) => {
    storeSingleton = store;
}

export const getStore = () => {
    if(storeSingleton != null) {
        return storeSingleton;
    }
    throw new Error('Store is not initialized yet');
}

export const getDispatch = () => {
    return getStore().dispatch;
}