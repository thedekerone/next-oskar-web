import React from 'react'
import { Layout } from '../components/Layout'
import { Container, CenterContainer } from '../components/SharedStyles'
import { GalleryPage } from '../components/GalleryPage'

export default () => {
  return (
    <Layout>
      <Container>
        <CenterContainer>
          <h1>This is a gallery</h1>
        </CenterContainer>
        <GalleryPage></GalleryPage>
      </Container>
    </Layout>
  )
}
