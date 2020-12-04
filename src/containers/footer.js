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
                <Footer.Link style={{'color':'white'}}>&copy; All rights reserved</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link style={{'color':'white'}}>Delhi,India</Footer.Link>
                    <Footer.Link style={{'color':'white'}}>9876543210</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://github.com/AmanRai24/Algo8-Assignment" style={{'color':'Blue'}}><Icon className="fab fa-github" />Github</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}