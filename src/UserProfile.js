import React from 'react';

const UserProfile = props => (
    <div>
        <img src={props.img} alt="" />
        <h3>{props.firstname}{props.lastname}</h3>
        <h4>{props.email}</h4>
        <br/>
    </div>
)

export default UserProfile;