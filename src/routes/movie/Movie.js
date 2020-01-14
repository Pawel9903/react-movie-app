import React from "react";
import { useHistory } from 'react-router-dom';

const Movie = (props) => {

    const { match: { params: {id} }} = props;
    const history = useHistory();

    return(
        <div>
            <button onClick={() => {
                history.push('/')
            }}>Go home</button>
            { id }
        </div>
    );
};

export default Movie;