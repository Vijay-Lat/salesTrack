import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import LineGraph from './Pages/LineGraph';
import ScatterGraph from './Pages/ScatterGraph';
import LandingPage from './Pages/LandingPage';

export type routesType = {
    id: number,
    path: string,
    component: any,
}
export const routes: routesType[] = [{
    id: 0,
    path: "/",
    component: LandingPage,
},
{
    id: 0,
    path: "/dashboard",
    component: Dashboard,
},

{
    id: 0,
    path: "*",
    component: Error,
},
]

