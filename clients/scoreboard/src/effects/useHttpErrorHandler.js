import {useEffect} from 'react';
import {installGlobalHttpErrorHandler} from "shared/fetchHelpers";
import {useToasts} from 'react-toast-notifications'

export const useHttpErrorHandler = () => {
    const {addToast} = useToasts();
    useEffect(() => {
        installGlobalHttpErrorHandler(error => {
            addToast(error.message, {appearance: 'error', autoDismiss: true});
        });

    }, [addToast]);
};

