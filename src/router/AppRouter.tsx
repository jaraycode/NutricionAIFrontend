import {Routes,Route} from 'react-router-dom';
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import Faqs from '../pages/faqs';
import Profile from '../pages/profile';
import ImageUpload from '../pages/imageUpload';
import Record from '../pages/record';
import Options from '../pages/options';
import ProtectedRoute from './ProtectedRoute'

export default function AppRouter(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Login' element={<ProtectedRoute><Login/></ProtectedRoute>}/>
            <Route path='/Register' element={<ProtectedRoute><Register/></ProtectedRoute>}/>
            <Route path='/Profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            <Route path='/Faqs' element={<ProtectedRoute><Faqs/></ProtectedRoute>}/>
            <Route path='/ImageUpload' element={<ProtectedRoute><ImageUpload/></ProtectedRoute>}/>
            <Route path='/Record' element={<ProtectedRoute><Record/></ProtectedRoute>}/>
            <Route path='/Options' element={<ProtectedRoute><Options/></ProtectedRoute>}/>
        </Routes>
    );
}