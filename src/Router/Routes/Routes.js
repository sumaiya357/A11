import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import SingleService from "../../Pages/Home/SingleService/SingleService";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

    const router = createBrowserRouter([
       {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category',
                element:<Services></Services>,
                loader:() =>{
                    return fetch('https://my-server-site.vercel.app/allcategory')}
            }
            ,
            {
                path:'/allcategory/:id',
                element:<SingleService></SingleService>,
                loader:({params}) =>fetch(`https://my-server-site.vercel.app/allcategory/${params.id}`)
               
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
               
            }
            ,
            {
                path:'/signup',
                element:<SignUp></SignUp>
               
            }
        ]
       }
    ])

export default router;