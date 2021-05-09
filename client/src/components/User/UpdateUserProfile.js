import React from 'react'
import UserLayout from '../../hoc/UserLayout'
import UpdatePersonalInfo from './UpdatePersonalInfo'

function UpdateUserProfile() {
    return (
        <UserLayout>
            <h1>Profile</h1>
            <UpdatePersonalInfo/>
        </UserLayout>
    )
}

export default UpdateUserProfile
