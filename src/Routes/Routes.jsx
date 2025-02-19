import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../Components/Root/Root';
import ErrorPage from '../Components/Error/ErrorPage';
import Home from '../Components/Home/Home';
import AppliedJobs from '../Components/Applied/AppliedJobs';
import Blogs from '../Components/Blogs/Blogs';
import SignIn from '../Components/SignIn/SignIn';
import JobDetails from '../Components/Home/AllJobs/JobDetails/JobDetails';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            errorElement:<ErrorPage/>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/jobs',
                    element:<AppliedJobs></AppliedJobs>
                },
                {
                    path:'/blogs',
                    element:<Blogs></Blogs>
                },
                {
                    path:'/login',
                    element:<SignIn></SignIn>
                },
                {
                    path:'/job/:jobId',
                    loader:({params})=>fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.jobId}`),
                    element:<JobDetails></JobDetails>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;