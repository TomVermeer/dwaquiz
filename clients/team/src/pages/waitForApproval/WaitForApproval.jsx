import React from 'react';
import './wait-for-approval.scss';
import {LoadingSpinner} from "../../components/LoadingSpinner/LoadingSpinner";

export const WaitForApproval = (props) => {
    return (
        <LoadingSpinner text="Wachten op toelating"/>
    );
};