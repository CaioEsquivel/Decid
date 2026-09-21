import './App.css'
import { AnimatedOutlet } from './components/AnimatedOutlet/AnimatedOutlet';
import { AuthLoginContent } from './components/AuthLoginContent/AuthLoginContent';
import { AuthRegisterContent } from './components/AuthRegisterContent/AuthRegisterContent';
import { AuthPage } from './pages/Auth_page/AuthPage';
import { LandingPage } from './pages/Landing_Page/LandingPage'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
AnimatedOutlet
import { useEffect } from 'react';
import Lenis from 'lenis'



const router = createBrowserRouter([
  {
    element: <AnimatedOutlet />,  
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "auth",
        element: <AuthPage/>,
        children: [
          { index: true, element: <AuthLoginContent/> },
          { path: 'register', element: <AuthRegisterContent/> }
        ]
      }
    ]
  }
]);

function App() {

  useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
