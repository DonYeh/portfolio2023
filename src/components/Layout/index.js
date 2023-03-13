import { Outlet } from 'react-router-dom';
import  Container  from '@mui/material/Container';
import Header from '../Header';

// import '../../styles/index.scss'
import './index.scss'

const Layout = () => {

    return (
        <>
            <Header />
            <Container className='container' disableGutters>
                <Outlet />
                {/* {children} */}
            </Container>
        </>
    )
}

export default Layout