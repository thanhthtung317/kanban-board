import React, { useState } from 'react'

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  const resetValue = ()=>{
      setValue(initValue)
  }
  const attributeObj = {
      value,
      onchange: e => setValue(e.target.value)
  }
  return [value, resetValue, attributeObj]
};

export default useInput