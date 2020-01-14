import React, {useState} from "react";

const CustomInput = () => {

    const [inputText, setInputText] = useState('');

    return(
      <div>
          <input placeholder="enter some text" onChange={ event => setInputText(event.target.value) } />
          <h1>{ inputText }</h1>
      </div>
    );
};

export default CustomInput