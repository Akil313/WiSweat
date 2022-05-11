import React from 'react'
import styled from 'styled-components'

const SweatBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  width: 80vw;
`

const SweatTitle = styled.big`
`

const SweatBar = ({info}) => {
  return (
    <SweatBarContainer>
        <SweatTitle>{info.sweatName}</SweatTitle>
        <p>Attending: {info.attending.length}</p>
        <p>Time: {info.time}</p>
        <p>Location: {info.location}</p>
        <button>Pass</button>
    </SweatBarContainer>
  )
}

export default SweatBar