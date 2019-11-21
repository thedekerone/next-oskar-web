import styled from 'styled-components'
import { scaleIn } from '../../static/animation'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //	height: 100vh;
  overflow: hidden;
  margin: 4rem 0 0 0 !important;

  animation-delay: 1s;
`
export const Item1 = styled.div`
  width: 20px;
  height: 20px;
  background: #f583a1;
  border-radius: 50%;
  background-color: #eed968;
  margin: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #eed968;
    opacity: 0.7;
    animation: ${scaleIn} 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 200ms;
    transition: 0.5s all ease;
    transform: scale;
  }
`
export const Item2 = styled.div`
  width: 20px;
  height: 20px;
  background: #f583a1;
  border-radius: 50%;
  background-color: #eece68;
  margin: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #eece68;
    opacity: 0.7;
    animation: ${scaleIn} 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 400ms;
    transition: 0.5s all ease;
    transform: scale(1);
  }
`
export const Item3 = styled.div`
  width: 20px;
  height: 20px;
  background: #f583a1;
  border-radius: 50%;
  background-color: #eec368;
  margin: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #eec368;
    opacity: 0.7;
    animation: ${scaleIn} 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 600ms;
    transition: 0.5s all ease;
    transform: scale(1);
  }
`
export const Item4 = styled.div`
  width: 20px;
  height: 20px;
  background: #f583a1;
  border-radius: 50%;
  background-color: #eead68;
  margin: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #eead68;
    opacity: 0.7;
    animation: ${scaleIn} 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 800ms;
    transition: 0.5s all ease;
    transform: scale(1);
  }
`
export const Item5 = styled.div`
  width: 20px;
  height: 20px;
  background: #f583a1;
  border-radius: 50%;
  background-color: #ee8c68;
  margin: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ee8c68;
    opacity: 0.7;
    animation: ${scaleIn} 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 1000ms;
    transition: 0.5s all ease;
    transform: scale(1);
  }
`
