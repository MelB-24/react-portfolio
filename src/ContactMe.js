import React from "react"
import styled from "styled-components"

const ContactMeWrapper = styled.div`
    height: calc(100vh - 95px);
    background: #2d3334;
    display: flex;
    justify-content: center;
`

const ContentWrapper = styled.div`
    width: 900px;
    margin: 36px;
    border: solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContactMeHeader = styled.h1`
    margin: 0;
    color: white;
    font-family: "Lato";
    padding: 36px;
`

const FormWrapper = styled.form``

function ContactMe() {
    return (
        <ContactMeWrapper id="contact">
            <ContentWrapper>
                <ContactMeHeader>Contact Me</ContactMeHeader>
                <FormWrapper method="POST">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="3"></textarea>

                    <input type="submit" />
                </FormWrapper>
            </ContentWrapper>
        </ContactMeWrapper>
    )
}

export default ContactMe
