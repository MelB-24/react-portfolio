import React from "react"
import styled from "styled-components"
import { device } from "./deviceSizes"
import ExternalLinks from "./common/ExternalLinks"

const ContactMeWrapper = styled.div`
    height: calc(100vh - 95px);
    background: #2d3334;
    display: flex;
    justify-content: center;
`

const ContentWrapper = styled.div`
    width: 900px;
    margin: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContactMeHeader = styled.h1`
    margin: 0;
    color: white;
    font-family: "Lato";
    padding: 0px 36px 0 36px;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    font-family: "Lato";
    color: #fa8c83;

    @media ${device.tablet} {
        width: 80%;
    }

    @media ${device.mobileL} {
        width: 90%;
    }
`

const FormLabel = styled.label`
    font-size: 22px;
    margin: 20px 0px;
`

const FormInput = styled.input`
    height: 36px;
    border-radius: 2px;
    border: none;
    font-size: 18px;
    font-family: "Lato";
    padding: 2px;
`

const FormTextArea = styled.textarea`
    height: 128px;
    border-radius: 2px;
    border: none;
    font-size: 15px;
    font-family: "Lato";
    padding: 2px;
`

const FormSubmitButton = styled.input`
    border: solid #99edcc;
    margin: 30px;
    border-radius: 2px;
    padding: 12px 0px;
    width: 50%;
    align-self: center;
    font-size: 20px;
    background: none;
    cursor: pointer;
    color: white;
`

class ContactMe extends React.Component {
    state = {
        name: "",
        email: "",
        message: ""
    }

    handleValueChange = e => {
        const value = e.target.value

        this.setState({ ...this.state, [e.target.name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { name, email, message } = this.state
        const { handleContactEmail } = this.props

        handleContactEmail({ emailContents: { name, email, message } })
    }

    handleSuccessMessageRender = () => {
        const { isSuccessful } = this.props

        if (isSuccessful) {
            return <p>Email sent</p>
        } else if (isSuccessful === false) {
            return <p>Error in sending, please try again.</p>
        }
    }

    render() {
        const { loading } = this.props
        return (
            <ContactMeWrapper id="contact">
                <ContentWrapper>
                    <ContactMeHeader>Contact Me</ContactMeHeader>
                    {this.handleSuccessMessageRender()}
                    {loading ? (
                        <p>Sending...</p>
                    ) : (
                        <FormWrapper method="POST" onSubmit={this.handleSubmit}>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <FormInput
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleValueChange}
                            />

                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleValueChange}
                            />

                            <FormLabel htmlFor="message">Message</FormLabel>
                            <FormTextArea
                                name="message"
                                rows="3"
                                value={this.state.message}
                                onChange={this.handleValueChange}
                            ></FormTextArea>

                            <FormSubmitButton type="submit" value="send" />
                        </FormWrapper>
                    )}
                    <ExternalLinks />
                </ContentWrapper>
            </ContactMeWrapper>
        )
    }
}

export default ContactMe
