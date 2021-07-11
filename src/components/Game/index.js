import React, { useState } from 'react';
import Keyboard from './Keyboard';
import Screen from './Screen';


export default function Game({ correctWord }) {
  const [enabledField, setEnabledField] = useState(0)
  const [fields, setFields] = useState([])

  useState(() => {
    const fieldsArray = []
    correctWord.split("").map((value, i) => {
      return fieldsArray.push({fieldId: i, value: "", buttonId: null})
    })

    setFields(fieldsArray);
  }, [])

  function isFieldEnabled() {
    if(enabledField < fields.length) return true
    else return false
  }

  function write({ buttonId, value }) {
    if(isFieldEnabled()) {
      const newFields = [...fields]
      newFields[enabledField] = {
        ...newFields[enabledField],
        value: value,
        buttonId: buttonId
      }

      setFields(newFields)
      setEnabledField(enabledField+1)
    }
  }
  function deleteLetter() {
    if(enabledField > 0) {
      const newFields = [...fields]
      newFields[enabledField-1] = {
        ...newFields[enabledField-1],
        value: "",
        buttonId: null
      }
      setEnabledField(enabledField-1)
      setFields(newFields)
    }
  }

  return (
    <>
      <Screen fields={fields} word={correctWord}/>
      <Keyboard handleWrite={write} handleDelete={deleteLetter} fields={fields} word={correctWord}/>
      {/* <Keyboard handleWrite={write} /> */}
    </>
  );
}