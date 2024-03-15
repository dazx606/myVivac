import { Routes, Route, Navigate } from 'react-router-dom'
import MainContent from '../components/MainContent/MainContent'
import { Home } from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Investors from '../pages/Investors/Investors'



export const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/' element={<MainContent />} >
                <Route  path='home' element={<Home />} />
                <Route  path='about_us' element={<AboutUs />} />
                <Route  path='investors' element={<Investors />} />

                <Route path='*' element={<Navigate to='/home' />} />
            </Route>

        </Routes>
    )
}


