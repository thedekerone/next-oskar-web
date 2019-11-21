// improve code by making it a component

import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { RecipeCard } from '../components/RecipeCard'
import { Loading } from '../components/Loading'
import { Layout } from '../components/Layout'
import { Link } from '../routes'
import styled from 'styled-components'
import 'isomorphic-fetch'
import { AboutButton } from '../components/Buttons'

export const Title = styled.h1`
  color: black;
  font-size: 2.5rem;
`
export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 1400px;
  display: grid;
  margin: 0 auto;
  padding: 7rem 1rem;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem 0;
  @media (min-width: 900px) {
    gap: 2rem;
  }
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  height: 100px;
  align-items: center;
`

function Dishes(props) {
  const [recipes, setRecipes] = useState([])
  const [base, setBase] = useState('')
  const [total, setTotal] = useState(15)
  const [loading, setLoading] = useState(true)

  const handleClick = () => {
    setTotal(total + 10)
    fetch(
      `https://api.spoonacular.com/recipes/search?query=mango&number=${total}&apiKey=46f7725b67fe4b93b3964903b125b12d&offset=1`
    )
      .then(res => res.json())
      .then(data => {
        setBase(data.baseUri)
        setRecipes(data.results)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/search?query=mango&number=${total}&apiKey=46f7725b67fe4b93b3964903b125b12d&offset=1`
    )
      .then(res => res.json())
      .then(data => {
        setBase(data.baseUri)
        setRecipes(data.results)
        setLoading(false)
        setTotal(total + 10)
      })
  }, [])

  return (
    <div>
      <Layout fixed={true} background='white' color='#2c2c2c'>
        <Container>
          {recipes.map(e => {
            return (
              <RecipeCard
                key={e.id}
                title={e.title}
                imageUrl={base + e.image}
              />
            )
          })}
        </Container>

        {total < 90 && (
          <Center
            onClick={() => {
              handleClick()
              setLoading(true)
            }}
          >
            {loading ? (
              <Loading></Loading>
            ) : (
              <AboutButton>Load more</AboutButton>
            )}
          </Center>
        )}
      </Layout>
    </div>
  )
}
export default Dishes
