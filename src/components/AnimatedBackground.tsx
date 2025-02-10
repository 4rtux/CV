import type React from "react"
import { useMemo } from "react"

const AnimatedBackground: React.FC = () => {
    const shapes = useMemo(() => {
      return Array.from({ length: 150 }, (_, i) => ({
        size: Math.random() * 8 + 5,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 7}s`,
        animationDelay: `${Math.random() * 7}s`,
      }))
    }, [])


    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900" />
          <div className="absolute inset-0 opacity-50">
            {shapes.map((shape, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white dark:bg-gray-800 animate-float"
                style={{
                  width: `${shape.size}px`,
                  height: `${shape.size}px`,
                  top: shape.top,
                  left: shape.left,
                  animation: `float ${shape.animationDuration} linear infinite`,
                  animationDelay: shape.animationDelay,
                }}
              />
            ))}
          </div>
        </div>
      )
    }
    
    export default AnimatedBackground