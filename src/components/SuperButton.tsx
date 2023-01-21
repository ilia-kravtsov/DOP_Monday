import React from 'react';

type SuperButtonType = {
    name: string
    callback: () => void

}

const SuperButton = (props: SuperButtonType) => {

    const onCLickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onCLickHandler}>{props.name}</button>
    );
};

export default SuperButton;