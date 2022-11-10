import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Home/Services/Services";

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
                    return fetch('http://localhost:5000/allcategory')}
            }
        ]
       }
    ])

export default router;