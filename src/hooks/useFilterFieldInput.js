import { useEffect, useState } from "react";

const useFilterFieldInput = () => {
  const [input, setInput] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [showCross, setShowCross] = useState(false);

  const handleSetInput = (e) => {
    setInput(e.target.value);
  }

  useEffect(()=>{
    setShowCross(input.length?true:false);
  },[input]);

  const handleSetFocus = () => {
    setInputFocus(true);
  }

  const handleSetBlur = () => {
    setInputFocus(false);
  }

  const handleReset = () => {
    setInput('');
  }

  return {
    input,
    handleSetInput,
    inputFocus,
    handleSetFocus,
    handleSetBlur,
    handleReset,
    showCross
  };
};

export default useFilterFieldInput;