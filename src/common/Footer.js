import React from "react"
import styled from "@emotion/styled"
import { Github } from "@styled-icons/boxicons-logos/Github"
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare"
import { Email } from "@styled-icons/material-outlined/Email"

const FooterWrapper = styled.footer`
    height: 10vh;
    background: #2d3334;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LinkWrapper = styled.div``

const ExternalLink = styled.a``

const GitHubIcon = styled(Github)`
    color: #fa8c83;
    height: 40px;
    margin: 8px;
    padding: 8px;

    &:hover {
        background: #99edcc;
        color: #2d3334;
        transform: scale(1.2);
    }
`

const LinkedinIcon = styled(LinkedinSquare)`
    color: #fa8c83;
    height: 40px;
    margin: 8px;
    padding: 8px;

    &:hover {
        background: #99edcc;
        color: #2d3334;
        transform: scale(1.2);
    }
`

const EmailIcon = styled(Email)`
    color: #fa8c83;
    height: 40px;
    margin: 8px;
    padding: 8px;

    &:hover {
        background: #99edcc;
        color: #2d3334;
        transform: scale(1.2);
    }
`

function Footer() {
    return (
        <FooterWrapper>
            <LinkWrapper>
                <ExternalLink href="mailto:melissabykersma@gmail.com">
                    <EmailIcon />
                </ExternalLink>
                <ExternalLink href="https://github.com/MelB-24">
                    <GitHubIcon />
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/melissa-bykersma-3a1467171/">
                    <LinkedinIcon />
                </ExternalLink>
            </LinkWrapper>
        </FooterWrapper>
    )
}

export default Footer
