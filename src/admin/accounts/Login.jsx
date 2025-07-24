import InputText from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { FiLogIn } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return(
        <div className="px-8 py-12 bg-white rounded-lg w-[31.25rem] shadow-md">
            <div className="mb-8">
                <h1 className="text-3xl leading-none font-bold mb-3">Admin Login</h1>
                <p className="text-gray-600">Please log in to access your dashboard and manage ChronoHaven.</p>
            </div>
            <form action="">
                <InputText type="email" id="email" label="Email" name="email" placeholder="Enter Your Email" required />
                <InputText type="password" id="password" label="Password" name="password" placeholder="Enter Your Password" required />
                <div className="flex items-center gap-3 justify-between">
                    <a className="text-sm text-primary font-semibold cursor-pointer">Forgot Password?</a>
                    <Button type="submit" label="Login" className="flex items-center gap-2">
                        <FiLogIn size={ 16 } />
                        <span>Login</span>
                    </Button>
                </div>
            </form>
            <p className="relative border border-solid border-gray-100 my-8"><span className="block px-2 bg-white text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">OR</span></p>
            <Button type="button" className="flex items-center justify-center gap-4 w-full !bg-gray-100 text-black capitalize !font-medium !border-gray-200 !rounded-[3rem]">
                <FcGoogle size={ 20 } />
                <span className="block">Login With Google</span>
            </Button>
            <p className="text-sm text-gray-600 text-center mt-8">Don't have an account? <a className="inline-block text-primary font-semibold cursor-pointer">Create One</a></p>
        </div>
    )
}
export default Login;