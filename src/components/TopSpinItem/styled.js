import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: #444563;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #fff;
    padding: 0.7rem 0.7rem 0.7rem 1rem;
    margin-bottom: 0.7rem;
    border-radius: 0.3rem;
`
const StyledDate = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: calc(0% + 0.4rem);
    right: calc(0% + 0.4rem);
    color: rgba(255,255,255,0.55);
    font-size: 0.9rem;
`

const StyledPrize = styled.p`
    color: #39B7FF;
    font-size: 2.2rem;
`
const StyledNames = styled.div`
    font-size: 0.9rem;
`
const StyledSubPrize = styled.p`
    font-size: 1.15rem;
`

export {
  StyledContainer, StyledDate, StyledPrize, StyledNames, StyledSubPrize
}
