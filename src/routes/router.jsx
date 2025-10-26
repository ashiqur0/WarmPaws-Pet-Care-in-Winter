import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ServiceDetails from "../pages/ServiceDetails";
import ForgotPassword from "../pages/ForgotPassword";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/services',
                Component: Services
            },
            {
                path: '/signup',
                Component: Signup
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/forgotpassword',
                Component: ForgotPassword
            },
        ]
    },
    {
        path: '/authlayout',
        element: <AuthLayout>
            <MyProfile></MyProfile>
        </AuthLayout>,
        children: [
            {
                path: '/authlayout/servicedetails',
                Component: ServiceDetails
            },
            // {
            //     path: '/authlayout/myprofile',
            //     Component: MyProfile
            // },
        ]
    },
    {
        path: '/*',
        Component: NotFound
    },
]);

export default router