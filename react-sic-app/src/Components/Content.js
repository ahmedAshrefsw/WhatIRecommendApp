import React from 'react'
import LeftSideBar from './LeftSideBar'
import MiddleSideBar from './MiddleSideBar'
import RightSideBar from './RightSideBar'

const Content = () => {
    return (
        <div class="Content container">
            <div class="allPage row">
                <LeftSideBar/>
                <MiddleSideBar/>
                <RightSideBar/>
            </div>
        </div>
    )
}

export default Content
