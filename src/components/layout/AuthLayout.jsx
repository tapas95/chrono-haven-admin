const AuthLayout = ( { children } ) => {
    return (
        <div className="bg-gray-100 dark:bg-black px-4 py-8 min-h-screen flex items-center justify-center">
            { children }
        </div>
    );
};
export default AuthLayout;