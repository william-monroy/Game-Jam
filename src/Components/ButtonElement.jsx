import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary?'#133e7c' : '#010606')};
    white-space:nowrap;
    padding:${({big}) => (big?'14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark?'#ffff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig?'25px' : '21px')};
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: ${({primary}) => (primary?'#fff' : '#01BF71')};
    }
`