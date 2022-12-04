import React from 'react'
import TopBar from '../commonComponents/TopBar'
import RuningImg from '../Assets/Running.png'
enum Title {
    title = 'Sales Track',
    color = "secondary"
}

const LandingPage = () => {
    const tabNames = ["Sales", "Track"]
    return (
        <div>
            <TopBar logo={RuningImg} title={Title.title} barColor={Title.color} tabsList={tabNames} />
        </div>
    )
}

export default LandingPage
