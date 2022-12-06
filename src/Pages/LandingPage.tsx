import React from 'react'
import TopBar from '../commonComponents/TopBar'
import RuningImg from '../Assets/Running.png'
import { Route, Routes } from 'react-router-dom'
import Sales from './Sales';
import _ from 'lodash'
import Track from './Track';
enum Title {
    title = 'Sales Track',
    color = "secondary"
}
interface tabType {
    id: number
    comp: any
    path: string
}
const subTabs: tabType[] = [{ id: 0, comp: Sales, path: "/sales" }, { id: 1, comp: Track, path: "/track" }]
const LandingPage = () => {
    const tabNames = ["Sales", "Track"]
    return (
        <div>
            <TopBar logo={RuningImg} title={Title.title} barColor={Title.color} tabsList={tabNames} />
            <Routes>
                {_.map(subTabs, path => <Route path={path?.path} element={<path.comp />} />)}
            </Routes>
        </div>
    )
}

export default LandingPage
