// import React from "react"

interface IUser {
    name: string;
    email?: string;
}

interface Props {
    user: IUser
}

// const User                 = ({ user }: Props)    => { // "children" doesn't work
// const User:React.FC<Props> = ({ user, children }) => { // "children" works
// const User:React.FunctionComponent<Props> = ({ user }) => {            
   const User:React.FC<Props> = ({ user }) => {            
        return (
            <div>
                <strong>Name: </strong> {user.name} <br />
                <strong>Email: </strong> {user.email || "No email"} <br /> <br />
            </div>
        )
}

export default User;