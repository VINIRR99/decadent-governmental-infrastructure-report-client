import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    background-color: #24252a;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
`;

export const TopRight = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
    color: #95969b;
    text-decoration: none;
    margin: 0 12px;
    &:hover {
        color: #0d259b;
    }
`;