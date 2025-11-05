import { motion } from "framer-motion";
import logo from "@assets/logo.svg";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Oen Profit" 
              className="h-8 md:h-10 w-auto"
              data-testid="img-logo"
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
