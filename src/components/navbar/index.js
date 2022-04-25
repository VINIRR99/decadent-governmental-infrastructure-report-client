import { Nav, StyledNavLink } from "./styles";

const Navbar = () => {
    return <>
        <Nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <div>
                <StyledNavLink to="/login">Login</StyledNavLink>
                <StyledNavLink to="/signup">Signup</StyledNavLink>
            </div>
        </Nav>
        <div style={{ height: "48.499998px" }}></div>
    </>
};

export default Navbar;