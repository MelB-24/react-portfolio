import React from "react"
import styled from "@emotion/styled"
import { Github } from "@styled-icons/boxicons-logos/Github"

const FooterWrapper = styled.footer`
    height: 80vh;
    background: #fa8c83;
`

const ExternalLink = styled.a``

const GitHubLink = styled(Github)`
    color: red;
    height: 100px;
`

function Footer() {
    return (
        <FooterWrapper>
            <ExternalLink href="https://github.com/MelB-24">
                <GitHubLink />
            </ExternalLink>
        </FooterWrapper>
    )
}

export default Footer
