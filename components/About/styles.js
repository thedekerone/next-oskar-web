import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 5rem;
  color: #fff;
`

export const CardContainer = styled.div`
  display: flex;
  min-height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`

export const Cards = styled.div``
