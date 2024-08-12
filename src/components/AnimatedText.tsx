import { motion } from "framer-motion";

const AnimatedText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={textVariants}>
      {children}
    </motion.div>
  );
};

export default AnimatedText;
