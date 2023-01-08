import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllCategory from "../../Pages/Home/AllCategory/AllCategory";
import Home from "../../Pages/Home/Home/Home";
// import Home from "../../Pag";
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
            // {
            //     path:'/allcategory',
            //     element:<Services></Services>,
            //     loader: () => fetch('https://my-server-site-sumaiya357.vercel.app/allcategory')
                
            // }
            // ,
             {
                 path:'/category',
                 element:<Services></Services>,
                 loader: () => fetch('https://my-server-site-sumaiya357.vercel.app/allcategory')
                
        }
             ,
            {
                path:'/allcategory/:id',
                element:<SingleService></SingleService>,
                loader:({params}) =>fetch(`https://my-server-site-sumaiya357.vercel.app/allcategory/${params.id}`)
               
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
               
            } ,
           {
                path:'/signup',
                element:<SignUp></SignUp>
               
            }
            ,
           
            {
                path:'/blog',
                element:<Blog></Blog>
               
            }
        ]
       }
    ])

export default router;