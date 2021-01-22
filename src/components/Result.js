import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const MessageQuote = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const ResultQuote = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const Result = ({quote}) => {
    return (
        (quote === 0) ? <Message>Elige marca, año y tipo de seguro</Message> 
            : ( <ResultQuote>
                    <TransitionGroup 
                      component="span"
                      className="resultado"
                      >
                        <CSSTransition
                         classNames="resultado"
                         key={quote}
                         timeout={{enter: 500, exit: 500}}
                         >
                            <MessageQuote>El total es: $ <span>{quote}</span></MessageQuote> 
                        </CSSTransition>
                    </TransitionGroup>
                </ResultQuote> )
    );
}

Result.propTypes = {
    quote: PropTypes.number.isRequired
}

export default Result;