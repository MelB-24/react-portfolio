import React from "react"
import styled from "@emotion/styled"
import { Link, animateScroll as scroll } from "react-scroll"
import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt"

import ExternalLinks from "./ExternalLinks"

const NavWrapper = styled.nav({
    height: "10vh",
    background: "#2d3334",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%"
})

const StyledCodeIcon = styled(CodeAlt)`
    color: #fa8c83;
    height: 65px;
    width: auto;
    margin: 0 18px 0 18px;
`

const PageLinkWrapper = styled.div({
    display: "flex",
    margin: "24px"
})

// TODO needs media query at 745px
const StyledPageLink = styled(Link)`
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

function NavBar() {
    return (
        <NavWrapper>
            <StyledCodeIcon />
            <PageLinkWrapper>
                <StyledPageLink
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    about me
                </StyledPageLink>
                <StyledPageLink
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    contact me
                </StyledPageLink>
                <StyledPageLink
                    to="projects"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    projects
                </StyledPageLink>
                <StyledPageLink
                    to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    melissa.bykersma
                </StyledPageLink>
            </PageLinkWrapper>
            <ExternalLinks />
        </NavWrapper>
    )
}

export default NavBar
