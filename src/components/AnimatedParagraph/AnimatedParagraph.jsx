import { motion } from "framer-motion"


export const AnimatedParagraph = ({ lines, className }) => {
    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
    }

    const line = {
        hidden: { y: '100%' },
        visible: {
            y: 0,
            transition: { duration: 2, ease: [0.65, 0, 0.35, 1] }
        }
    }

    return (
        <motion.div variants={container} initial="hidden" animate="visible"  className={className}>
            {lines.map((text, i) => (
                <div key={i} style={{ overflow: 'hidden' }}>
                    <motion.p variants={line} style={{ margin: 0 }}>
                        {text}
                    </motion.p>
                </div>
            ))}
        </motion.div>
    )
}