import Header from "./header/Header";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";

const AdminLayout = ( { children } ) => {
    return (
        <>
            <Header />
            <Sidebar />
            <div>{children}</div>
            <Footer />
        </>
    );
};
export default AdminLayout;