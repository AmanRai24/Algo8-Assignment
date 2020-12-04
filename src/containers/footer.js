import React from 'react'
import Footer from '../components/Footer';
import Icon from '../components/icons';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Link href="#" style={{'color':'#15cdfc' , 'font-size':'17px', 'margin-top':'19px'}}>BLOGS</Footer.Link>
                <Footer.Link >&copy; All rights reserved</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link>Delhi,India</Footer.Link>
                    <Footer.Link>9876543210</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-github" />Github</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}