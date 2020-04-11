import React from "react"
import styled from "@emotion/styled"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { Email } from "@styled-icons/material-outlined/Email"
import { device } from "../deviceSizes"

const LinkWrapper = styled.div`
    display: flex;
    margin: 0 18px 0 18px;
    width: 220px;

    @media ${device.customLinks} {
        display: none;
    }
`

const GitHubIcon = styled(Github)`
    color: #fa8c83;
    height: 40px;
    margin: 8px;
    padding: 8px;
    transition: transform 0.5s;

    &:hover {
        background: #99edcc;
        color: #2d3334;
        transform: scale(0.9);
    }

    @media ${device.tablet} {
        height: 30px;
    }
`

const LinkedinIcon = styled(LinkedinSquare)`
    color: #fa8c83;
    height: 40px;
    margin: 8px;
    padding: 8px;
    transition: transform 0.5s;

    &:hover {
        background: #99edcc;
        color: #2d3334;
        transform: scale(0.9);
    }

    @media ${device.tablet} {
        height: 30px;
    }
`

const EmailIcon = styled(Email)`
    color: #fa8c83;
    height: 40px;
    margin: 8px;
    padding: 8px;
    transition: transform 0.5s;

    &:hover {
        background: #99edcc;
        color: #2d3334;
        transform: scale(0.9);
    }

    @media ${device.tablet} {
        height: 30px;
    }
`

function ExternalLinks() {
    return (
        <LinkWrapper>
            <a href="mailto:melissabykersma@gmail.com">
                <EmailIcon />
            </a>
            <a href="https://github.com/MelB-24">
                <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/melissa-bykersma-3a1467171/">
                <LinkedinIcon />
            </a>
        </LinkWrapper>
    )
}

export default ExternalLinks
