import {useEffect} from 'react';
import {installGlobalHttpErrorHandler} from "shared/fetchHelpers";
import {useToasts} from 'react-toast-notifications'
import { Pages } from '../pages/routerUrls';
import { useHistory } from 'react-router';


export const useHttpErrorHandler = () => {
 
    const {addToast} = useToasts();
    const history = useHistory()
    useEffect(() => {
        const quizNotFoundError = /De quiz night [0-9]{6,} kan niet worden gevonden./i
        installGlobalHttpErrorHandler(error => {
            if(error.message.match(quizNotFoundError)){
                history.push(Pages().HOME)
            }
            addToast(error.message, {appearance: 'error', autoDismiss: true});
        });

    }, [addToast, history]);
};

