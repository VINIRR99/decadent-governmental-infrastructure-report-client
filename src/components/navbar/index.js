import { Nav, TopRight, StyledNavLink } from "./styles";
import { HomeIcon } from "../Icons";
import Search from "../search";
import DropdownButton from "../dropdown-button";

const Navbar = ({ loggedUser }) => {
    return <>
        <Nav>
            <StyledNavLink to="/">
                <HomeIcon />
            </StyledNavLink>
            <TopRight>
                <Search />
                {!loggedUser && <>
                    <StyledNavLink to="/auth/login">Login</StyledNavLink>
                    <StyledNavLink to="/auth/signup">Signup</StyledNavLink>
                </>}
                {loggedUser && <DropdownButton {...loggedUser} />}
            </TopRight>
        </Nav>
        <div style={{ height: "48.45px" }}></div>
    </>
};

export default Navbar;