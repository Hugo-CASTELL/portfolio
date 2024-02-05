import { motion } from 'framer-motion';

interface HeaderProps {
    className?: string;
    on?: boolean;
}

export default function RadarCircle({ className, on }: HeaderProps) {
    return (
        <div className={className}>
            <div className="flex items-center justify-center ">
                {!on && <div className={"absolute z-20 h-5 w-8 rounded-full bg-active"} />}
                {on && <div className={"absolute z-20 h-5 w-5 rounded-full bg-green-500"} />}
                {on && <motion.div
                    className="absolute z-10 w-8 h-8 bg-green-500 rounded-full"
                    initial={{ scale: 0, opacity: 0.7 }}
                    animate={{
                        scale: [0, 1.2],
                        opacity: [0, 0.7, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                />
                }
            </div>
        </div>
    )
}
