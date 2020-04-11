import React from "react"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll"
import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt"

import ExternalLinks from "./ExternalLinks"
import { device } from "../deviceSizes"

const NavWrapper = styled.nav`
    height: 95px;
    background: #2d3334;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 2;
`

const StyledCodeIcon = styled(CodeAlt)`
    color: #fa8c83;
    height: 65px;
    margin: 0 200px 0 18px;

    @media ${device.laptop} {
        margin: 0 0px 0 18px;
    }

    @media ${device.tablet} {
        display: none;
    }
`

const PageLinkWrapper = styled.div`
    display: flex;
    margin: 24px;
    justify-self: center;
`

// TODO needs media query at 745px
const StyledPageLink = styled(Link)`
    font-family: "Lato";
    color: white;
    text-decoration: none;
    margin: 0 24px 0 24px;
    font-size: 20px;
    position: relative;
    cursor: pointer;

    &:after {
        background: none repeat scroll 0 0 transparent;
        content: "";
        display: block;
        height: 2px;
        position: absolute;
        background: #99edcc;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    &:hover:after {
        width: 100%;
    }

    @media ${device.customTabs} {
        font-size: 16px;
    }
`

function NavBar() {
    return (
        <NavWrapper>
            <StyledCodeIcon />
            <PageLinkWrapper>
                <StyledPageLink
                    to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={500}
                >
                    home
                </StyledPageLink>
                <StyledPageLink
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={500}
                >
                    about
                </StyledPageLink>
                <StyledPageLink
                    to="projects"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={500}
                >
                    projects
                </StyledPageLink>
                <StyledPageLink
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={500}
                >
                    contact
                </StyledPageLink>
            </PageLinkWrapper>
            <ExternalLinks />
        </NavWrapper>
    )
}

export default NavBar
