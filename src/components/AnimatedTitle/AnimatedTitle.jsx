// components/AnimatedTitle/AnimatedTitle.jsx
import { motion } from "motion/react"

const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.04 * i }
    })
}

const child = {
    hidden: { opacity: 0, y: 10, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
}

const renderLetters = (text) =>
    Array.from(text).map((letter, index) => (
        <motion.span variants={child} key={index}>
            {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
    ))

export const AnimatedTitle = ({ segments, className }) => {
    return (
        <motion.h1
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexWrap: 'wrap' }}
        >
            {segments.map((segment, i) =>
                segment.highlight ? (
                    <span key={i} className={segment.className} style={{ display: 'inline-flex' }}>
                        {renderLetters(segment.text)}
                    </span>
                ) : (
                    renderLetters(segment.text)
                )
            )}
        </motion.h1>
    )
}