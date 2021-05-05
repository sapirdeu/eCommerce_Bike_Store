import React from 'react'
import UserLayout from '../../../hoc/UserLayout'
import ManageBrands from './ManageBrands'
import ManageMaterials from './ManageMaterials'

function ManageCategories() {
    return (
        <UserLayout>
            <ManageBrands/>
            <ManageMaterials/>
        </UserLayout>
    )
}

export default ManageCategories
