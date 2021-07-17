import React, { useState, useEffect } from 'react';
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


export default function SecondGame() {
  const colors = {
    cornflowerblue: "cornflowerblue",
    aquamarine: "aquamarine",
    brown: "brown",
    tomato: "tomato"
  }
  const [brands, setBrands] = useState([])
  const [challenger, setChallenger] = useState([
      {id: 1, value: "1", selected: undefined},
      {id: 4, value: "4", selected: undefined},
      {id: 3, value: "3", selected: undefined},
      {id: 2, value: "2", selected: undefined},
      {id: 20, value: "2", selected: undefined},
      {id: 10, value: "1", selected: undefined},
      {id: 40, value: "4", selected: undefined},
      {id: 30, value: "3", selected: undefined},
  ]);

  useEffect(() => {
    console.log(challenger)
    console.log(brands)
  })

  function handleClick(item, i) {
    setBackground(item.id, i)
    
  }

  function setBackground(buttonId, i) {
    const buttonArrayIndice = brands.findIndex((item) => {return item === buttonId})
    if(buttonArrayIndice !== -1) return;

    if(brands.length <= 2-1) {
      const newChallengers = challenger
      newChallengers[i] = {
        ...challenger[i],
        selected: colors.cornflowerblue
      }
      setBrands([...brands, buttonId]);
      setChallenger([...newChallengers]);
      return
    }

    else if(brands.length <= 4-1) {
      const newChallengers = challenger
      newChallengers[i] = {
        ...challenger[i],
        selected: colors.aquamarine
      } 
      setBrands([...brands, buttonId]);
      setChallenger([...newChallengers]);
      return
    }

    else if(brands.length <= 6-1) {
      const newChallengers = challenger
      newChallengers[i] = {
        ...challenger[i],
        selected: colors.brown
      } 
      setBrands([...brands, buttonId]);
      setChallenger([...newChallengers]);
      return
    }
    
    else if(brands.length <= 8-1) {
      const newChallengers = challenger
      newChallengers[i] = {
        ...challenger[i],
        selected: colors.tomato
      } 
      setBrands([...brands, buttonId]);
      setChallenger([...newChallengers]);
      return
    } 

    else return
  }

  function makePair() {}

  function checkAnswer() {
    if(brands.length < challenger.length) return
    let isCorrect = true;
    brands.map((item, i, array) => {
      if(i%2 == 0) return
      const par = [array[i], array[i-1]].sort()
      // if(par[0] === par[1]-10) return isCorrect.push(true)
      if(par[0] !== par[1]/10) return isCorrect = false;
    });

    if(isCorrect === false) {alert("Você errou")}
    if(isCorrect === true) {alert("Você acertou")}
  }

  return(
    <>
      <h1>Second</h1>
      <Content>
        <ColumButtons>
          {challenger.map((item, i) => {
            return <Button
              backgroundColor={item.selected}
              onClick={() => handleClick(item, i)}
              key={item.id}>{item.value}
            </Button>
          })}

          <button onClick={checkAnswer}>Checar</button>
        </ColumButtons>
      </Content>
    </>
  );
}