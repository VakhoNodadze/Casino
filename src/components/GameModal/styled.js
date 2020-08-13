import styled from 'styled-components'


const StyledContainer = styled.div`
    background-color: #35364A;
    border-radius: 10px 10px 0 10px;
    color: #fff;
    display: flex;
`
const StyledLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-radius: 10px 0 0 0;
    background-color: #201932;
    padding: 0.7rem 1.5rem;
`

const Header = styled.h2`
    font-size: 1.05rem;
    color: #ECEFFE;
    margin-bottom: 2.8rem;
`
const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 1rem 0;
    &:last-of-type{
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }
`
const TextOne = styled.p`
    color: #ECEFFE;
    font-size: 1.05rem;
    margin: 0;
`
const TextTwo = styled.p`
    font-size: 1.05rem;
    color: #FFE926;
    margin: 0;
`
const RameText = styled.p`
    font-size: 0.75rem;
    color: #B2AAC5;
    margin: 4.5rem;
`
const StyledRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    width: 50%;
    padding: 1rem;
`
const Prize = styled.p`
    margin: 0;
    color: #FFE926;
    font-size: 2.5rem;
    margin-top: 2rem;
`
const Place = styled.div`
    border-radius: 1.1rem;
    background-color: #413858;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFE926;
    font-size: 0.85rem;
    padding: 0.7rem 1rem;
    margin-bottom: 5px;
`
export {
  StyledContainer, StyledLeftContainer, Header, InformationContainer, TextOne, TextTwo, RameText, StyledRightContainer, Prize, Place
}
