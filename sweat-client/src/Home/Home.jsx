import React from 'react'
import './Home.css'
import styled from 'styled-components';
import SweatBar from './SweatBar/SweatBar'
import activeSweats from '../Templates/sweats.json'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`; 

const RegSweats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10vh;
  margin-top: 10vh;
`; 

const Home = () => {



  return (
    <HomeContainer className='home-main-container'>
      <RegSweats className='reg-sweats'>
        {activeSweats.map((sweat, i) => (<SweatBar key={i} info={sweat} />))}
      </RegSweats>
    </HomeContainer>
  )
}

export default Home