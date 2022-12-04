import React, { Fragment, FC,useReducer ,useState} from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab,Box } from '@mui/material'
import _ from 'lodash'
// const tabChangeReducer = (state:any,action:any)=>{
// console.log(state,action,"act")
// }
// const tabInitialState:any = {val:0}



const TopBar: FC<any> = (props) => {
    const { title, barColor, tabsList, logo } = props
    // const [tabState, tabDispatch] = useReducer<any,any>(tabChangeReducer, tabInitialState)
    const [tabVal, setTabVal] = useState<number>(0)
const tabChangeHandler = (val:any,newVal:any)=>{
console.log(newVal,"ddd")
setTabVal(newVal)
}
    return (
        <Fragment>
            <AppBar color={barColor}>
                <Toolbar>
                    {logo && <img style={{ borderRadius: "50%", width: "50px", height: "50px", marginRight: "10px" }} src={logo} alt='logo' />}
                    <Typography variant='h3'>
                        {title}
                    </Typography>
                    <Box style={{marginLeft:'auto'}}>
                    <Tabs value={tabVal}  onChange = {tabChangeHandler}>
                        {_.map(tabsList, tabName => <Tab  style={{textTransform:"none",color:"white",fontSize:'15px'}} color='secondary'label={tabName}/>)}
                    </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default TopBar
