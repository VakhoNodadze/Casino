import styled from 'styled-components'

const StyledContainer = styled.div`
    width: ${props => props.singles ? '1.43rem' : '1.7rem'};
    height: ${props => props.singles ? '1.8rem' : '2.13rem'};
    background-color: #505081;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.singles ? '#9AAACF' : '#D6D9D9'};
    font-size: ${props => props.singles ? '1rem' : '1rem'};
    align-self: flex-end;
    margin: 0 2px;
`

export default StyledContainer
