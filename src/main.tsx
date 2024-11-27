import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import FAQs from './pages/FAQs.tsx'
import Signin from './pages/signin.tsx'
import Login from './pages/login.tsx'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/FAQs" element={<FAQs />} />
			<Route path="/signin" element={<Signin />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	</BrowserRouter>
)
