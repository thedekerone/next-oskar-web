import styled, { keyframes } from 'styled-components'

export const showIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
    
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`
export const fadeIn = keyframes`
  0% {
    opacity: .5;
    filter:blur(27px)
    
  }
  100% {
    opacity: 1;
    filter:blur(0)

  }
`
export const scaleIn = keyframes`
    0% {
		transform: scale(1);
	}
	75% {
		transform: scale(2.5);
	}
	100% {
		opacity: 0;
	}
`
export const slideIn = keyframes`
  0%{
    top: -20%;
  }

  100%{
    top:0%;
  }


`
export const slideOut = keyframes`
  0%{
    top:0%;
  }

  100%{
    top:-20%;
  }
`
