import styled from 'styled-components'

const StyledContainer = styled.div`
    width: 100%;
    min-width: 270px;
    height: 21.3125rem;
    padding: 0.625rem;
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
const StyledPrizeMainTxt = styled.p`
    font-size: 3.75rem;
    margin: 0;
    @media (max-width: 992px){
        font-size: 3rem;
    }
`
const StyledPrizeSubTxt = styled.p`
    font-size: 1rem;
    margin: 0;
    @media (max-width: 992px){
        font-size: 0.8rem;
    }
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
    border-bottom: 4px solid #95C7EE;
    padding-bottom: 5px;
    margin: 0 0 5px 0;
`


export {
  StyledContainer, StyledNumberIndicatorContainer, StyledNumberIndicator, StyledPrizeContainer, StyledPrizeMainTxt, StyledPrizeSubTxt
}
