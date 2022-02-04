import React, { useState, useEffect } from "react"

import Axios from "axios"

import {
    ListGroup, ListGroupItem
} from "reactstrap"

const UserRepos = ({repos_url}) => {

    const [ repos, setRepos ] = useState([])

    const fetchRepos = async() => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
        console.log(data);
    }

    useEffect(
        ()=>(
            fetchRepos()
        ), [repos_url]
    )

    return(
        <ListGroup>
            {
                repos.map(
                    (repo) => (
                        <ListGroupItem key={repo.id}>
                            <section className="text-primary">
                                {repo.name}
                            </section>
                            <section className="text-secondary">
                                {repo.language}
                            </section>
                            <section className="text-info">
                                {repo.description}
                            </section>
                        </ListGroupItem>
                    )
                )
            }
        </ListGroup>
    )

}

export default UserRepos