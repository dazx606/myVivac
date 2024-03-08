import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { NavBar } from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'


export const AppRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />

            </Routes>
            <Footer />
        </>
    )
}


