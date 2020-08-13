import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 0;
    border-radius: 5px;
    margin-bottom: 2px;
    &:nth-of-type(odd) {
        background-color: #2B2E3A;
    }
    &:nth-of-type(even) {
        background-color: #272936;
    }
`
const ContentItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 20%;
    border-radius: 5px;
    font-size: 0.9rem;
`
const TopWinHeader = styled.div`
    display: flex;
    color: #fff;
    align-items: center;
    background-color: #2B2E3A;
    width: 100%;
    padding: 1.5rem 0;
`
const TopWinContentItem = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    font-size: 0.9rem;
    @media (max-width: 576px){
        font-size: 0.8rem;
    }
`
const Button = styled.div`
    border-radius: 1rem;
    color: #FFD919;
    padding: 0.35rem 1rem;
    background-color: ${props => props.money ? '#5F39B7' : '#323341'}
`
export {
  Container, ContentItem, TopWinHeader, TopWinContentItem, Button
}
