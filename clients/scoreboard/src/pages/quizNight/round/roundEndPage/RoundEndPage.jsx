import React, {useEffect} from "react";
import {Footer, RoundHeader} from "../../../../components/index";
import {FinalScores} from "shared/components/FinalScores/FinalScores";
import {Card, ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";


const RoundEndpage = (props) => {

    const quizPin = useSelector(state => state.shared.quizProgress.quizPin);

    return (
        <>
            <RoundHeader title="Tussenstand" quizPin={quizPin}/>
            <FinalScores
                cardProvider={Card}
                cardHeaderProvider={Card.Header}
                listGroupProvider={ListGroup}
                listGroupItemProvider={ListGroup.Item}
                useEffect={useEffect}
                useSelector={useSelector}
                useDispatch={useDispatch}
            />
            <Footer/>
        </>
    );
};
export default RoundEndpage;
