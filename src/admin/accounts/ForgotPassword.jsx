import InputText from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";

const ForgotPassword = () => {
    return(
        <div className="px-8 py-12 bg-white rounded-lg w-[31.25rem] shadow-md">
            <div className="mb-8">
                <h1 className="text-3xl leading-none font-bold mb-3">Forgot Password</h1>
                <p className="text-gray-600">Enter your registered email address to receive a password reset link and regain access to your ChronoHaven admin account.</p>
            </div>
            <form action="">
                <InputText type="email" id="email" label="Email" name="email" placeholder="Enter Your Email" required />
                <Button type="submit" label="Login" className="w-full flex items-center justify-center gap-2">
                    <MdMarkEmailUnread size={ 16 } />
                    <span>Send Email</span>
                </Button>
            </form>
            <p className="relative border border-solid border-gray-100 my-8"><span className="block px-2 bg-white text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">OR</span></p>
            <p className="text-sm text-gray-600 text-center mt-8">Remembered Your Password? <Link to={ '/admin/login' } className="inline-block text-primary font-semibold underline cursor-pointer">Login</Link></p>
        </div>
    )
}
export default ForgotPassword;