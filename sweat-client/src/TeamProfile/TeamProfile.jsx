import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const ProfileContainer = styled.div`
  
`

const TitleBar = styled.div`
  
`

const TeamProfile = () => {

  const params = useParams();
  

  return (
    <ProfileContainer>
      <TitleBar>
        <h1>{params.id}</h1>
      </TitleBar>
    </ProfileContainer>
  )
}

export default TeamProfile