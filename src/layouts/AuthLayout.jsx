const AuthLayout = ( { children } ) => {
    return (
        <div className="px-4 py-8 min-h-screen flex items-center justify-center bg-stone-100">
            { children }
        </div>
    );
};
export default AuthLayout;