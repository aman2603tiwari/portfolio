export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "LangChain",
      "Hugging Face",
      "RAG Systems",
      "Multi-Agent Systems",
      "Reinforcement Learning",
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    icon: "Eye",
    skills: [
      "OpenCV",
      "YOLO",
      "MediaPipe",
      "TensorRT",
      "Point Cloud Processing",
      "3D Perception",
      "Image Segmentation",
      "Object Tracking",
    ],
  },
  {
    id: "robotics",
    title: "Robotics",
    icon: "Bot",
    skills: [
      "ROS2",
      "SLAM",
      "Path Planning",
      "Nav2",
      "Intel RealSense",
      "LiDAR",
      "Control Systems",
      "Sensor Fusion",
    ],
  },
  {
    id: "embedded",
    title: "Embedded & SDR",
    icon: "Cpu",
    skills: [
      "FPGA",
      "ZedBoard",
      "Verilog",
      "MATLAB",
      "Xilinx Vivado",
      "SDR",
      "Signal Processing",
      "ARM",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: "Code",
    skills: [
      "Python",
      "C++",
      "C",
      "TypeScript",
      "Verilog",
      "MATLAB",
      "SQL",
      "Bash",
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "CUDA",
      "AWS",
      "FastAPI",
      "Weights & Biases",
      "Jupyter",
    ],
  },
];
