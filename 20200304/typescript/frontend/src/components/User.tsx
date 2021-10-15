// import React from "react"

interface IUser {
    name: string;
    email: string;
}

interface Props {
    user: IUser
}

const User = ({ user }: Props) => {
    return (
        <div>
            <strong>Name: </strong> {user.name} <br />
            <strong>Name: </strong> {user.email} <br />
        </div>
    )
}

export default User;