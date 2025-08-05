import InputText from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { MdLockReset } from "react-icons/md";

const ResetPassword = () => {
    return(
        <div className="px-8 py-12 bg-white dark:bg-gray-950 rounded-lg w-[31.25rem] border dark:border-gray-900 shadow-md">
            <div className="mb-8">
                <h1 className="text-3xl leading-none font-bold dark:text-gray-200 mb-3">Reset Your Password</h1>
                <p className="text-gray-600 dark:text-gray-400">Enter a new password for your ChronoHaven admin account to complete the reset process and regain access.</p>
            </div>
            <form action="">
                <InputText type="password" id="password" label="Password" name="password" placeholder="Enter Your Password" required />
                <InputText type="password" id="confirmPassword" label="Confirm Password" name="confirmPassword" placeholder="Confirm Your Password" required />
                <Button type="submit" label="Login" className="w-full flex items-center justify-center gap-2">
                    <MdLockReset size={ 18 } />
                    <span className="block">Reset Password</span>
                </Button>
            </form>
        </div>
    )
}
export default ResetPassword;