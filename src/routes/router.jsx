import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import NotFound from "../pages/PageNotFound";
import ServiceDetails from "../pages/ServiceDetails";
import ForgotPassword from "../pages/ForgotPassword";
import AuthLayout from "../layouts/AuthLayout";
import Loading from "../components/Loading";
import ProtectedRoute from "../provider/ProtectedRoute";
import UpdateProfile from "../pages/UpdateProfile";
import Test from "../components/Banner";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch('/data/services.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/services',
                Component: Services,
                loader: () => fetch('/data/services.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/signup',
                Component: Signup
            },
            {
                path: '/auth/forgotpassword',
                Component: ForgotPassword
            },
            {
                path: '/auth/myprofile',
                element: <ProtectedRoute>
                    <MyProfile></MyProfile>
                </ProtectedRoute>
            },
            {
                path: '/auth/updateprofile',
                element: <ProtectedRoute>
                    <UpdateProfile></UpdateProfile>
                </ProtectedRoute>
            },
            {
                path: '/auth/services/servicedetails/:id',
                element: <ProtectedRoute>
                    <ServiceDetails></ServiceDetails>
                </ProtectedRoute>,
                loader: () => fetch('/data/services.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
        ]
    },
    {
        path: '/*',
        Component: NotFound
    },
]);

export default router