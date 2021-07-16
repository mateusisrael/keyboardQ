import React, { useState } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const ColumButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: ${props => props.backgroundColor};
  color: #444444;
  margin: 5px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 1.5em;
  border: none;
  border-radius: 10%;
`;

function setBackground() {

}

export default function SecondGame() {
  const colors = {
    crimson: "#crimson",
    aquamarine: "aquamarine",
    brown: "brown",
    tomato: "tomato"
  }
  const [brands, setBrands] = useState([])

  const challenger = {
    colum1: [
      {id: 1, value: "1"},
      {id: 4, value: "4"},
      {id: 3, value: "3"},
      {id: 2, value: "2"},
    ],
    colum2: [
      {id: 20, value: "2"},
      {id: 10, value: "1"},
      {id: 40, value: "4"},
      {id: 30, value: "3"},
    ]
  }

  function handleClick(item) {
    addIntoBrand(item)
  }

  function addIntoBrand(item) {
    const newBrands = brands;
    newBrands.push(item)
    console.log("add", newBrands)
    setBrands([...newBrands])
  }

  function setBackground(buttonId) {
    if(brands.length === 0) return "" 

    const buttonArrayIndice = brands.findIndex(() => {return buttonId})
    
    switch (buttonArrayIndice) {
      case buttonArrayIndice<=2:
        return colors.crimson;

    
      default:
        break;
    }
  }

  return(
    console.log(brands),
    <>
      <h1>Second</h1>
      <Content>
        <ColumButtons>
          {challenger.colum1.map((item) => {
            return <Button
              backgroundColor={setBackground(item.id)}
              onClick={() => handleClick(item)}
              key={item.id}>{item.value}
            </Button>
          })}
        </ColumButtons>
        <ColumButtons>
          {challenger.colum2.map((item) => {
            return <Button
              backgroundColor={setBackground(item.id)}
              onClick={() => handleClick(item)}
              key={item.id}>{item.value}</Button>
          })}
        </ColumButtons>
      </Content>
    </>
  );
}