import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    background-color: #575875;
    padding: 0.8rem; 
    display: flex;
    flex-direction: column;
    border-radius: 0.4rem;
`
const History = styled.button`
    background-color: transparent;
    border-radius: 1.1rem;
    color: #C5D8F9;
    border: 1px solid #60667E;
    align-self: flex-end;
    padding: 0.65rem;
    display: flex;
    align-items: center
`
const CherryContainer = styled.div`
    border-radius: 50%;
    width: 7.8rem;
    height: 7.8rem;
    border: 8px solid #9C75F8;
    background-color: #5F39B7;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MusculBonesTxt = styled.p `
    color: #fff;
    margin: 1rem 0;
    font-size: 1.625rem;
    align-self: center;
`

export { MainContainer, History, CherryContainer, MusculBonesTxt }
