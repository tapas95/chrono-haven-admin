import Header from "../components/layout/header/Header";

const AdminLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};
export default AdminLayout;