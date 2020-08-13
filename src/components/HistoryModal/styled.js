import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: #35364A;
    border-radius: 10px 10px 0 0;
    padding: 0.7rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const StyledHeader = styled.p`
    font-size: 1.08rem;
    margin: 0 0 1rem 0;
    color: #ECEFFE;
`
const StyledSubHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 5px;
`
const StyledSubheader = styled.div`
    width: calc(80% / 6);
    margin: 0;
    color: #CAD0F1;
    font-size: 0.85rem;
    text-align: center;
    &:nth-of-type(5){
        width: 20%;
        text-align: left;
    }
`
const StyledInformationContainer = styled.div`
    background-color: #444563;
    padding: 0.7rem;
    display: flex;
    width: 100%;
    border-radiuS: 5px;
    justify-content: flex-start;
    margin-bottom: 5px;
`
const StyledInformation = styled.div`
    color: #fff;
    width: calc(80% / 6);
    text-align: center;
    font-size: 0.85rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:last-of-type{
        color: #FFFF00;
    }
    &:nth-of-type(5){
        width: 20%;
    }
`
export {
  StyledContainer, StyledHeader, StyledSubHeaderContainer, StyledSubheader, StyledInformationContainer, StyledInformation
}
