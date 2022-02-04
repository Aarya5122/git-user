import React from "react";

import { 
    Container
} from "reactstrap"

const Footer = () => {
    return(
        <Container fluid tag="footer" 
        className="text-center text-white text-uppercase bg-info fixed-bottom p-3"
        >
            GitFire App
        </Container>
    )
}

export default Footer;