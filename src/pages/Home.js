import React, { useContext, useState } from "react"

import UserContext from "../context/UserContext"

import { Redirect } from "react-router-dom";

import {
    Container,
    Row,
    Col,
    Input,
    InputGroup,
    Button
} from "reactstrap"

import UserCard from "../components/UserCard";

import UserRepos from "../components/UserRepos";

import Axios from "axios"

import { toast } from "react-toastify";

const Home = () => {

    const context = useContext(UserContext)

    // const [ username, setUsername ] = useState("")

    const [ user, setUser ] = useState('')

    const [ query, setQuery ] = useState('')

    const fetchDetails = async() => {
        try{

            const {data} = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
    
        } catch(error) {

            toast("Not able to locate user", { type:"error" })

        }
    }

    if(!context.user?.uid){
        return(
            <Redirect to="/signin" />
        )
    } else {
        return(
            <Container fluid>
                <Row className="mt-3">
                    <Col md="5">
                        <InputGroup>
                        <Input
                        type="text"
                        value={query}
                        placeholder="Please provide username"
                        onChange={e => setQuery(e.target.value)}
                        />
                        <Button color="primary"
                        onClick={fetchDetails}
                        >
                            Fetch User
                        </Button>
                        </InputGroup>
                        { user ? <UserCard user={user}/> : null}

                    </Col>
                    <Col md="7">
                        { user ? <UserRepos repos_url={user.repos_url} /> : null}
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Home;