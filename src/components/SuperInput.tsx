import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';

type SuperInputType = {
    setNewTitle: Dispatch<SetStateAction<string>>
    newTitle: string
}

const SuperInput = (props: SuperInputType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input value={props.newTitle} onChange={onChangeHandler}/>
        </div>
    );
};

export default SuperInput;