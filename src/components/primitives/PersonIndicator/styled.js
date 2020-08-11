import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.padding || '14px 21px'};
`

export default StyledContainer
