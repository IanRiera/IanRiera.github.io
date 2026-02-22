import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedColorBar = ({ title, width, color, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const colorBarRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
  
      if (colorBarRef.current) {
        observer.observe(colorBarRef.current);
      }
  
      return () => {
        if (colorBarRef.current) {
          observer.unobserve(colorBarRef.current);
        }
      };
    }, []);
  
    const barColor = isVisible ? color : "gray";
    const textColor = isVisible ? `${color}-700` : "gray-700";
    const darkTextColor = isVisible ? `${color}-500` : "gray-700";
  
    return (
      <div ref={colorBarRef}>
        <div className={`mb-1 text-base font-medium ${textColor} ${darkTextColor}`}>
          {title}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <motion.div
            className={`bg-${color}-600 h-2.5 rounded-full ${className}`}
            style={{ width: isVisible ? `${width}%` : 0 }}
            initial={{ width: 0 }}
            animate={{ width: isVisible ? `${width}%` : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </div>
    );
  };
  

const Skills = () => {
    return (
        <div>
            <h2 className="font-bold text-8xl mt-64 w-full text-center
            dark:text-light lg:text-6xl lg:mt-24 md:text-6xl md:mt-20">Skills</h2>
            <AnimatedColorBar title="Python" width={85} color="green" className="!bg-green-600"/>
            <AnimatedColorBar title="JavaScript" width={60} color="green" className="!bg-green-600"/>
            <AnimatedColorBar title="C++" width={55} color="green" className="!bg-green-600" />
            <AnimatedColorBar title="Matlab" width={55} color="green" className="!bg-green-600"/>
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Linux" width={80} color="blue" className="!bg-blue-600"/>
            <AnimatedColorBar title="Git" width={70} color="blue" className="!bg-blue-600"/>
            <AnimatedColorBar title="ROS" width={60} color="blue" className="!bg-blue-600" />
            <AnimatedColorBar title="GCloud" width={50} color="blue" className="!bg-blue-600" />
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Open3D" width={80} color="indigo" className="!bg-indigo-600"/>
            <AnimatedColorBar title="OpenCV" width={70} color="indigo" className="!bg-indigo-600"/>
            <AnimatedColorBar title="Tensorflow" width={60} color="indigo" className="!bg-indigo-600"/>
            <AnimatedColorBar title="Pytorch" width={60} color="indigo" className="!bg-indigo-600"/>
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Object Detection" width={85} color="purple" className="!bg-purple-600"/>
            <AnimatedColorBar title="3D reconstruction" width={75} color="purple" className="!bg-purple-600"/>
            <AnimatedColorBar title="Multi Target Tracking" width={70} color="purple" className="!bg-purple-600"/>
            <AnimatedColorBar title="Sensor Fusion" width={60} color="purple" className="!bg-purple-600"/>
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Agile" width={85} color="yellow" className="!bg-yellow-400"/>
            <AnimatedColorBar title="DevOps" width={70} color="yellow" className="!bg-yellow-400"/>
            <hr className="border-2 border-solid"></hr>
            <AnimatedColorBar title="Spanish" width={100} color="orange" className="!bg-orange-400"/>
            <AnimatedColorBar title="Catalan" width={100} color="orange" className="!bg-orange-400"/>
            <AnimatedColorBar title="English" width={90} color="orange" className="!bg-orange-400"/>
            <AnimatedColorBar title="Polish" width={40} color="orange" className="!bg-orange-400"/>
            <hr className="border-2 border-solid"></hr>
        </div>
    );
}

export default Skills;
