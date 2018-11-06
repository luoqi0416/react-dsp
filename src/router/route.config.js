import Index from '../views/Index/Index'
import Login from '../views/Login/Login.jsx'
import AdvCreative from '../views/AdvCreative/AdvCreative.jsx'
import AdvUnit from '../views/AdvUnit/AdvUnit.jsx'
import AdvPlan from '../views/AdvPlan/AdvPlan.jsx'

export default {
    routes:[
        {
            path:'/index',
            name:'index',
            component:Index,
            children:[
                {
                    name:'advCreative',
                    path:'/index/AdvCreative',
                    component:AdvCreative
                },
                {
                    name:'advUnit',
                    path:'/index/advUnit',
                    component:AdvUnit
                },
                {
                    name:'advPlan',
                    path:'/index/advPlan',
                    component:AdvPlan
                }
            ]
        },
        {
            name:'login',
            path:'/login',
            component:Login
        }

    ]
}