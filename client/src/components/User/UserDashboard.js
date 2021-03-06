import React from 'react'
import UserLayout from '../../hoc/UserLayout'
import MyButton from '../utils/MyButton'
import UserHistoryBlock from '../utils/User/UserHistoryBlock'

function UserDashboard({user}) {
    return (
        <UserLayout>
            <div>
                <div className="user_nfo_panel">
                    <h2 className="user_information_right">User Inforamtion</h2>
                    <div>
                        <span>{user.userData.name}</span>
                        <span>{user.userData.lastname}</span>
                        <span>{user.userData.email}</span>
                    </div>
                    <MyButton
                        type = "default"
                        title = "Edit account info"
                        linkTo = "/user/user_profile"
                    />
                </div>

                {
                    user.userData.history ?
                        <div className="user_nfo_panel">
                            <h2 className="user_information_right">History Purchases</h2>
                            <div className="user_product_block_wrapper">
                                    <UserHistoryBlock
                                        products={user.userData.history}
                                    />
                            </div>  
                        </div>
                    : null
                }
            </div>
        </UserLayout>
        
    )
}

export default UserDashboard
