import React from 'react'

export const PureComponents = props => {
    if(props.if)
        return <h1>{props.naming}</h1>
    return false;
};

export const PureComponents2 = props => (
    <div>
        <h1>Ola 2</h1>
        <PureComponents />
    </div>
);