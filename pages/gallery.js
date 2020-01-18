import React from 'react'
import { Layout } from '../components/Layout'
import { Container, CenterContainer } from '../components/SharedStyles'

export default () => {
  return (
    <Layout>
      <Container>
        <CenterContainer>
          <h1>Feels good</h1>
        </CenterContainer>
      </Container>
    </Layout>
  )
}
