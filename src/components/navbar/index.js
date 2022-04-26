import { Nav, TopRight, StyledNavLink } from "./styles";
import Search from "../search";

const Navbar = () => {
    return <>
        <Nav>
            <StyledNavLink to="/">Home</StyledNavLink>
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