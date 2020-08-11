import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 18.75rem;
    height: 21.3125rem;
    padding: 10px;
    background-color: #5F39B7;
    border-radius: 0.4rem;
    color: #fff;
`
const StyledPrizeContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffff;
    align-items: center;
`
const StyledNumberIndicatorContainer = styled.div`
    display: inline-flex;
    justify-content: flex-start;
    flex-direction: column;
`

const StyledNumberIndicator = styled.p`
    color: #fff;
    font-size: 1rem;
    display: flex;
    justify-self: flex-start;
    margin: 0;
`
const StyledNumberIndicatorBorder = styled.div`
    height: 4px;
    background-color: #95C7EE;
    width: 100%:
`

const StyledPriceIndicator = styled.div`
    background-color: #FFE926;
    border-radius: 1.3rem;;
    padding: 0.5rem 1.5rem;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    max-width: 113px;
    margin: auto;
    margin-bottom: 16px;
`

export {
  StyledContainer, StyledNumberIndicatorContainer, StyledNumberIndicatorBorder, StyledNumberIndicator, StyledPrizeContainer, StyledPriceIndicator
}
