import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Style
const Container = styled.div`
  div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 300px;
  }
`;

const ContentButton = styled.button`
  background-color: ${props => props.backgroundColor};
  color: #444444;
  margin: 5px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 1.5em;
  border: none;
  border-radius: 10%;

  :disabled{
    background-color: #171717;
  }
`;

function Digit(props) {
  // disabled backgroundColor: #171717
  return (
    <ContentButton backgroundColor="#EDEDED" {...props}></ContentButton>
  )
}

function Delete(props) {
  return <ContentButton backgroundColor="#DA0037" {...props}></ContentButton>
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)))
}

function makeKeyboardLetters(word, maxSize) {
  const keyboard = []
  const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "x", "z"
  ]
  for(let i=0; i < maxSize; i++) {
    if(i<word.length) {
      keyboard.push(word[i])
    } else {
      const randomIndice = getRandomInt(0, letters.length-1);
      keyboard.push(letters[randomIndice])
    }
  }

  return keyboard.sort()
}

function isDisabled(arr, buttonId) {
  const isInArr = arr.findIndex((element) => {
    return element.buttonId === buttonId
  })

  if(isInArr === -1) return false 
  return true
}

export default function Keyboard({ handleWrite, handleDelete, fields, word }) {
  const [letters, setLetters] = useState([])
  useEffect(() => {
    const newKeyboard = makeKeyboardLetters(word, 9)
    setLetters(newKeyboard)
  }, [word])


  function renderKeyboard() {
    return (
      <div>
        {letters?.map((letter, i) => {
          return <Digit disabled={isDisabled(fields, i)} onClick={() => handleWrite({buttonId: i, value: letter})}>{letter}</Digit>
        })}
        <Delete onClick={handleDelete}> {"<-"} </Delete>
      </div>
    )
  }

  return (
    <Container className="KeyboardCont">
      {renderKeyboard()}
    </Container>
  );
}
