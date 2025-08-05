import Header from "./header/Header";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";

const AdminLayout = ( { children } ) => {
    return (
        <div className="bg-gray-100 dark:bg-black min-h-screen">
            <Header />
            <Sidebar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};
export default AdminLayout;