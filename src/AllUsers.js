import React, { Component } from 'react';
import UserProfile from './UserProfile';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data)
                let users = data.results.map((user, id) => {
                    return (
                        <UserProfile
                        firstname={user.name.first}
                        lastname={user.name.last}
                        email={user.email}
                        key={id}
                        img={user.picture.large}
                        />
                    )
                })
                this.setState({
                    users
                });
            }).catch((err) => {
                console.log('an error occurred', err)
            })
    }

    render(){
        return (
            <div>
                {this.state.users}
            </div>
        )
    }
}

export default Users;