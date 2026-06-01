
import Footer from './FooterPage'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navbar />
            <div id='main'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout