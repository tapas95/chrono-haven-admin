import InputText from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { FiLogIn } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="px-8 py-12 bg-white dark:bg-gray-950 rounded-lg w-[31.25rem] border dark:border-gray-900 shadow-md">
            <div className="mb-8">
                <h1 className="text-3xl leading-none font-bold dark:text-gray-200 mb-3">Admin Login</h1>
                <p className="text-gray-600 dark:text-gray-400">Please log in to access your dashboard and manage ChronoHaven.</p>
            </div>
            <form action="">
                <InputText type="email" id="email" label="Email" name="email" placeholder="Enter Your Email" required />
                <InputText type="password" id="password" label="Password" name="password" placeholder="Enter Your Password" required />
                <div className="flex items-center gap-3 justify-between">
                    <Link to={ '/admin/forgot-password' } className="text-sm text-primary font-semibold cursor-pointer">Forgot Password?</Link>
                    <Button type="submit" label="Login" className="flex items-center gap-2">
                        <FiLogIn size={ 16 } />
                        <span className="block">Login</span>
                    </Button>
                </div>
            </form>
            <p className="relative border-b border-gray-100 dark:border-gray-800 my-8"><span className="block bg-white dark:bg-gray-950 px-2 text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">OR</span></p>
            <Button type="button" className="flex items-center justify-center gap-4 w-full !bg-gray-100 dark:!bg-gray-900 !text-theme dark:!text-gray-400 capitalize !font-medium !border-gray-200 dark:!border-gray-800 !rounded-[3rem]">
                <FcGoogle size={ 20 } />
                <span className="block">Login With Google</span>
            </Button>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-8">Don't have an account? <Link to={ '/admin/register' } className="inline-block text-primary font-semibold underline cursor-pointer">Create One</Link></p>
        </div>
    )
}
export default Login;