import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlane, FaCompass, FaSuitcase, FaMapMarkedAlt } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="bg-white/10 backdrop-blur-lg p-12 rounded-2xl shadow-xl">
          <div className="relative">
            <motion.div
              className="w-32 h-32 rounded-full "
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <motion.div className="absolute -top-16 left-1/2 -translate-x-1/2 text-blue-500">
                  <FaPlane className="text-2xl" />
                </motion.div>
                <motion.div className="absolute top-1/2 -right-16 -translate-y-1/2 text-blue-500">
                  <FaCompass className="text-2xl" />
                </motion.div>
                <motion.div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-blue-500">
                  <FaSuitcase className="text-2xl" />
                </motion.div>
                <motion.div className="absolute top-1/2 -left-16 -translate-y-1/2 text-blue-500">
                  <FaMapMarkedAlt className="text-2xl" />
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-12 h-12 bg-blue-100 backdrop-blur-lg rounded-full" />
            </motion.div>
          </div>
          
          <motion.p
            className="text-blue-500 text-center mt-8 text-lg font-medium"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Loadings...
          </motion.p>
        </div>
      </div>
  )
}

export default Loading