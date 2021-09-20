import React, {useState, useEffect} from "react";
import { Card } from 'react-bootstrap';
import axios from 'axios';


const UserList = () => {
    const [ userList, setUserList ] = useState([]);
    
    useEffect(() => {
        axios.get (`https://jsonplaceholder.typicode.com/users`).then(result => setUserList(result.data))
    
}, []);

    return (
        <div>
            {userList.map(user =>
            <Card className="justify-content-md-center">
                <Card.Header> COMPANY INFORMATION <h1>{user.company.name}</h1></Card.Header>
                <Card.Body>
                    <Card.Text>{user.email} </Card.Text>
                    <Card.Text>{user.address.street} </Card.Text>
                    <Card.Text>{user.phone} </Card.Text>
                    <Card.Text>{user.name} </Card.Text>
                    <Card.Text> {user.company.bs}</Card.Text>
                </Card.Body>
            </Card>
            )}
        </div>
        )
    }
    export default UserList
