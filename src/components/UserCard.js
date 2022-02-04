import React from "react";

import{
    Card,
    CardBody
} from "reactstrap"

const UserCard = ( { user } ) => {
    return(
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} className="img-thumbnail"/>
            <CardBody>
                <section className="text-primary">{user.name}</section>
                <section className="text-primary">{user.location}</section>
                <section className="text-primary">{user.bio}</section>
                <section className="text-primary">
                    Available to hire: {user.hierable? "Yes" : "Nope"}
                </section>
                <section className="text-primary">Followers: {user.followers}</section>

            </CardBody>
        </Card>
    )
}

export default UserCard