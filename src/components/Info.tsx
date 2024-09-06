import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type PropT = {
  id: string | number;
} & PropsWithChildren;

const Info = function ({ children, id }: PropT) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default Info;
