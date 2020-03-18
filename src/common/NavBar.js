import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt"
import styled from "@emotion/styled"

const NavWrapper = styled.nav({
    height: "10vh",
    margin: "0",
    background: "#2d3334",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%"
})

// TODO needs media query at 745px
const StyledLink = styled(Link)`
    font-family: "Lato";
    color: white;
    text-decoration: none;
    margin: 0 24px 0 24px;
    font-size: 20px;
    position: relative;

    &:after {
        background: none repeat scroll 0 0 transparent;
        content: "";
        display: block;
        height: 2px;
        position: absolute;
        background: #fa8c83;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    &:hover:after {
        width: 100%;
    }
`

const StyledCodeIcon = styled(CodeAlt)`
    color: #fa8c83;
    height: 65px;
    width: auto;
    margin: 0 18px 0 18px;
`

const LinkWrapper = styled.div({
    display: "flex",
    margin: "24px"
})

function NavBar() {
    return (
        <NavWrapper>
            <StyledCodeIcon />
            <LinkWrapper>
                <StyledLink
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    about me
                </StyledLink>
                <StyledLink
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    contact me
                </StyledLink>
                <StyledLink
                    to="projects"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    projects
                </StyledLink>
                <StyledLink
                    to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    melissa.bykersma
                </StyledLink>
            </LinkWrapper>
        </NavWrapper>
    )
}

export default NavBar
