import styled from 'styled-components'

const StyledContainer = styled.div`
    border:3px solid #56BEC9;
    border-width: 3px;
    display: flex;
    border-radius: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    width: ${props => props.width || 'calc(50% - 0.7rem)'};
    position: relative;
`
const BottomBorder = styled.span`
    background: ${props => props.background || '#217C8B'} ;
    position: absolute;
    bottom: calc(0% - 0.7rem);
    left: 50%;
    transform: translate(-50%, 0%);
    padding: 0 1rem;
    font-size: 1rem;
    text-align: center;
    width: ${props => props.width}
`
export { StyledContainer, BottomBorder }
