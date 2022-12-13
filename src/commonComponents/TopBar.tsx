import React, { Fragment, FC, useReducer, useState ,useEffect} from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, Box ,Button} from '@mui/material'
import _ from 'lodash'
import { useNavigate,useLocation } from 'react-router-dom'

// const tabChangeReducer = (state:any,action:any)=>{
// console.log(state,action,"act")
// }
// const tabInitialState:any = {val:0}

interface topBarType{
    title:string
    barColor:any
    tabsList:any[]
    logo:string
    buttonName?:string
    buttonClick?:()=>void
}

const TopBar: FC<topBarType> = (props) => {
    const { title, barColor, tabsList, logo,buttonName,buttonClick } = props
    // const [tabState, tabDispatch] = useReducer<any,any>(tabChangeReducer, tabInitialState)
    const [tabVal, setTabVal] = useState<number>(0)
    const navigateTo = useNavigate()
    const location = useLocation()
    const tabChangeHandler = (val: any, newVal: any) => {
        console.log(val?.target?.innerText, "ddd")
        const pathName = (val?.target?.innerText).toLowerCase()
        navigateTo(`/${pathName}`)
        setTabVal(newVal)
    }
    useEffect(() => {
    
    }, [location?.pathname])
    return (
        <Fragment>
            <AppBar color={barColor}>
                <Toolbar>
                    {logo && <img style={{ borderRadius: "50%", width: "50px", height: "50px", marginRight: "10px" }} src={logo} alt='logo' />}
                    <Typography variant='h3'>
                        {title}
                    </Typography>
                    <Box style={{ marginLeft: 'auto', display:'flex'}}>
                        <Tabs value={tabVal} onChange={tabChangeHandler}>
                            {_.map(tabsList, tabName => <Tab style={{ textTransform: "none", color: "white", fontSize: '15px' }} color='secondary' label={tabName} />)}
                        </Tabs>
                        {buttonName && <Button onClick={buttonClick} >
                          {buttonName}
                        </Button>}
                    </Box>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default TopBar
