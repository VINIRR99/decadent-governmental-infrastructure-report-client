import { Nav, TopRight, StyledNavLink } from "./styles";
import { HomeIcon } from "../Icons";
import Search from "../search";

const Navbar = () => {
    return <>
        <Nav>
            <StyledNavLink to="/">
                <HomeIcon />
            </StyledNavLink>
            <TopRight>
                <Search />
                <StyledNavLink to="/login">Login</StyledNavLink>
                <StyledNavLink to="/signup">Signup</StyledNavLink>
            </TopRight>
        </Nav>
        <div style={{ height: "48.45px" }}></div>
    </>
};

export default Navbar;