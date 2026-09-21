// components/AnimatedOutlet/AnimatedOutlet.jsx
import { useLocation, useOutlet } from 'react-router'
import { AnimatePresence } from 'framer-motion'

export const AnimatedOutlet = () => {
    const location = useLocation()
    const outlet = useOutlet()

    return (
        <AnimatePresence mode="wait">
            {outlet && (
                <div key={location.pathname.split('/')[1] || 'home'} style={{ display: 'contents' }}>
                    {outlet}
                </div>
            )}
        </AnimatePresence>
    )
}