import React from 'react';
import {useRoundNumberFromUrl} from "../../../effects/useRoundNumberFromUrl";
import {RouterUrls} from "../../routerUrls";
import {Categories} from "./categories/Categories";
import {Questions} from "./questions/Questions";
import {Switch, Route} from 'react-router-dom';

export const RoundRouter = () => {
    useRoundNumberFromUrl();

    return (
        <Switch>
            <Route path={RouterUrls.CATEGORIES}>
                <Categories/>
            </Route>
            <Route path={RouterUrls.QUESTIONS}>
                <Questions/>
            </Route>
        </Switch>
    );
};