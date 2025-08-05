import InputText from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";

const Register = () => {
    return(
        <div className="px-8 py-12 bg-white dark:bg-gray-950 rounded-lg w-[31.25rem] border dark:border-gray-900 shadow-md">
            <div className="mb-8">
                <h1 className="text-3xl leading-none font-bold dark:text-gray-200 mb-3">Create Account</h1>
                <p className="text-gray-600 dark:text-gray-400">Create an admin account to manage ChronoHaven's products, orders, and dashboard.</p>
            </div>
            <form action="">
                <div className="flex gap-4 mb-4">
                    <InputText type="text" id="firstName" label="First Name" name="firstName" placeholder="Enter Your First Name" containerClass="grow mb-0" required />
                    <InputText type="text" id="lastName" label="Last Name" name="lastName" placeholder="Enter Your Last Name" containerClass="grow mb-0" required />
                </div>
                <InputText type="email" id="email" label="Email" name="email" placeholder="Enter Your Email" required />
                <div className="flex gap-4 mb-4">
                    <InputText type="password" id="password" label="Password" name="password" placeholder="Enter Your Password" containerClass="grow mb-0" required />
                    <InputText type="password" id="confirmPassword" label="Confirm Password" name="confirmPassword" placeholder="Confirm Your Password" containerClass="grow mb-0" required />
                </div>
                <InputText type="checkbox" id="agree" label={
                    <>
                        I agree to the <Link to={ `/admin/terms-of-service` } className="text-primary font-medium underline">Terms of Service</Link> and  <Link to={ `/admin/privacy-policy` } className="text-primary font-medium underline">Privacy Policy</Link>.
                    </>
                    }
                />
                <div className="flex items-center gap-3 justify-between">
                    <Button type="submit" label="Login" className="w-full flex items-center justify-center gap-2">
                        <FiLogIn size={ 16 } />
                        <span className="block">Register</span>
                    </Button>
                </div>
            </form>
            <p className="relative border-b border-solid border-gray-100 dark:border-gray-800 my-8"><span className="block px-2 bg-white dark:bg-gray-950 text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">OR</span></p>
            <Button type="button" className="flex items-center justify-center gap-4 w-full !bg-gray-100 dark:!bg-gray-900 !text-theme dark:!text-gray-400 capitalize !font-medium !border-gray-200 dark:!border-gray-800 !rounded-[3rem]">
                <FcGoogle size={ 20 } />
                <span className="block">Login With Google</span>
            </Button>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-8">Already Have A Account? <Link to={ '/admin/login' } className="inline-block text-primary font-semibold underline cursor-pointer">Sign In</Link></p>
        </div>
    )
}
export default Register;