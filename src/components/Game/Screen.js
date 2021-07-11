import React from 'react';
import styled from 'styled-components';

//Style
const Box = styled.div`
  text-align: center;
  min-width: 20px;
  min-height: 37px;
  margin: 10px 10px 10vh 0;
  font-size: 1em;
  border-bottom: 5px solid #ffffff;
  color: #fff;

  h1{ margin: 0; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export default function Screen({ correctWord, word, fields }) {

  function renderFields() {
    return fields.map((field, i) => {
      return (
        <Box key={i}>
          <h1>{field.value}</h1>
        </Box>
      )
    })
  }

  return <Container>{renderFields()}</Container>
}