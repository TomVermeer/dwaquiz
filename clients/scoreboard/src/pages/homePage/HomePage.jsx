import React from 'react';
import {Button, Form} from 'react-bootstrap'

import '../homePage/homepage.scss'

const HomePage = () => {

    return (
        <div>
            <h1>Quizzer</h1>
            <Form>
                <Form.Group controlId="1">
                    <Form.Label><h3>Quiz Pin</h3></Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Enter your quizpin number"/>
                </Form.Group>
                <Button variant="primary" type="submmit">submit quizpin</Button>
            </Form>
        </div>
    )
}
export default HomePage