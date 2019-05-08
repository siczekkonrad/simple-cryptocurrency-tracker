import styled from 'styled-components'

export const StyledSearchWrapper = styled.div`
    display: flex;
    margin-right:15%;
    justify-content: flex-end;
    margin-bottom: 24px;

    @media screen and (max-width: 800px) {
        margin-right: 10%;
    }
`

export const StyledSearchField = styled.input`
    transition: all 0.3s ease-in-out;
    outline: none;
    padding: 0.5em 0.6em;
    margin: 5px 1px 3px 0px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;

    &:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        border: 1px solid rgba(81, 203, 238, 1);
    }
`