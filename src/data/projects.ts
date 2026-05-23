export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  metrics: string;
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  category: "ai-ml" | "computer-vision" | "robotics" | "embedded" | "systems" | "research";
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    id: "ieee-ants",
    title: "Urban Cell Planning: AI-Driven Convex Optimization",
    description:
      "Led data-driven comparative cellular coverage analysis for 2 operators using MATLAB on 20k+ samples/operator. Trained ML model with 96% accuracy on RSS data, generating an AI-derived path loss equation matching 3GPP TR. Leveraged CVX (MOSEK) optimisation, determining new tower location to elevate minimum signal strength > −90dBm.",
    techStack: ["AI Optimization", "MATLAB", "CVX", "Machine Learning"],
    metrics: "IEEE ANTS 2025",
    githubUrl: "https://github.com/aman2603tiwari",
    image: "/projects/drone-classification.png",
    category: "research",
    highlight: true,
  },
  {
    id: "multi-agent-planner",
    title: "Autonomous Multi-Agent Conference Planner",
    description:
      "Built a unified 5-agent LangGraph orchestration system with QdrantDB-powered RAG pipelines for automated conference planning across 8K+ event records. Integrated Tavily web search, Groq API, shared routing pipelines and a robust 3-stage JSON parser to reduce latency by 25%.",
    techStack: ["LangGraph", "QdrantDB", "Groq API", "Tavily", "Python", "RAG"],
    metrics: "8K+ records • 25% latency reduction",
    githubUrl: "https://github.com/aman2603tiwari",
    image: "/projects/multi-agent.png",
    category: "ai-ml",
  },
  {
    id: "sports-chatbot",
    title: "Real-Time Sports Chatbot using RAG (Pathway AI)",
    description:
      "Developed a real-time sports chatbot powered by RAG and LLMs for live commentary and human-like sports interactions. Designed automated 24/7 scraping pipelines using Celery and Crontab across Cricket, F1 and Football ecosystems.",
    techStack: ["RAG", "LLMs", "Celery", "Crontab", "Python", "FastAPI"],
    metrics: "24/7 live pipeline • 3 sports",
    githubUrl: "https://github.com/aman2603tiwari",
    image: "/projects/sports-chatbot.png",
    category: "ai-ml",
  },
  {
    id: "quality-control",
    title: "Smart Vision Quality Control System",
    description:
      "Engineered an AI-powered quality control pipeline using computer vision and LLM-based OCR processing for logistics automation. Processed 500+ product images achieving 92% OCR accuracy and automated freshness detection using SAM2 segmentation.",
    techStack: ["SAM2", "OCR", "Computer Vision", "LLMs", "Python"],
    metrics: "500+ images • 92% OCR accuracy",
    githubUrl: "https://github.com/aman2603tiwari",
    image: "/projects/quality-control.png",
    category: "computer-vision",
  },
  {
    id: "traffic-controller",
    title: "Traffic Light Controller Using Image Sensing",
    description:
      "Built a YOLOv8-based adaptive traffic management system capable of real-time vehicle detection and emergency prioritization across 5K+ detections. Integrated OpenCV pipelines and custom CVAT annotations for intelligent signal optimization.",
    techStack: ["YOLOv8", "OpenCV", "CVAT", "Python", "Deep Learning"],
    metrics: "5K+ detections • Real-time",
    githubUrl: "https://github.com/aman2603tiwari",
    image: "/projects/traffic-system.png",
    category: "computer-vision",
  },
  {
    id: "drone-classification",
    title: "Sound-based Drone Fault Classification with Multi-Task Learning",
    description:
      "Architected a multi-task deep learning pipeline for drone fault classification using 65K+ drone sound recordings. Extracted MFCC and frequency-domain features achieving 90%+ accuracy.",
    techStack: ["Deep Learning", "MFCC", "Audio ML", "PyTorch", "NumPy"],
    metrics: "65K+ recordings • 90%+ accuracy",
    githubUrl: "https://github.com/aman2603tiwari",
    image: "/projects/drone-classification.png",
    category: "ai-ml",
  },
  {
    id: "data-compression",
    title: "Data Compression and De-Compression Portal",
    description:
      "A full-stack application deployed on Render that allows users to compress and decompress files using either Huffman Coding or Run-Length Encoding (RLE) achieving 45 to 70% compression. Computed original size, compressed size, and compression ratio to assess compression efficiency.",
    techStack: ["Huffman Coding", "RLE", "Full-Stack", "Web Systems"],
    metrics: "45-70% compression",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "systems",
  },
  {
    id: "point-cloud-orientation",
    title: "3D Point Cloud Object Orientation Detection",
    description:
      "Applied geometric techniques (e.g., PCA, RANSAC) and deep learning (PointNet++) to extract features and predict object alignment in 3D space.",
    techStack: ["PointNet++", "PCA", "RANSAC", "Deep Learning", "3D Vision"],
    metrics: "High Precision Alignment",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "computer-vision",
  },
  {
    id: "robodog",
    title: "RoboDog",
    description:
      "Designed and built a four-legged robotic dog capable of mimicking real canine gaits using coordinated servo motor control. Implemented inverse kinematics and gait sequencing algorithms to achieve stable walking and turning motions. Integrated IMU sensors for balance correction and ultrasonic sensors for real-time obstacle detection.",
    techStack: ["Inverse Kinematics", "Servo Control", "IMU", "Ultrasonic", "Robotics"],
    metrics: "4-legged stability",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "robotics",
  },
  {
    id: "autonomous-waypoint",
    title: "Autonomous Waypoint Navigation in Rough Terrains",
    description:
      "Engineered an autonomous Mars rover prototype designed to navigate marked paths in rough and rocky terrain. Implemented a PID controller for precise movement control and used a Zed2i stereo camera for visual and inertial feedback, including SLAM. Modified custom PCB for enhanced power distribution.",
    techStack: ["PID Controller", "SLAM", "Zed2i", "PCB Design", "Robotics"],
    metrics: "Autonomous Mars Rover",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "robotics",
  },
  {
    id: "6dof-robotic-arm",
    title: "6-DOF Robotic Arm",
    description:
      "Developed a 6DOF robotic arm as per industry standard for automating pick and sorting of delivery packages. Implemented a real-time, vision-based autonomous system with a Yolov8 model and depth data from Intel-Realsense D435i using ROS. Calculated Inverse Kinematics using URDF files.",
    techStack: ["ROS", "YOLOv8", "Intel-Realsense", "Inverse Kinematics", "Robotics"],
    metrics: "6 Degrees of Freedom",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "robotics",
  },
  {
    id: "object-following",
    title: "Object Following Camera",
    description:
      "Designed a camera tracking system mounted on servo/DC motors on a car. Follows objects using OpenCV tracking, ArUco markers, and YOLOv8 object detection. Included Gazebo simulation of the auto-nav algorithm.",
    techStack: ["OpenCV", "YOLOv8", "Gazebo", "ArUco", "Robotics"],
    metrics: "Real-time Object Tracking",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "robotics",
  },
  {
    id: "maze-solving-rl",
    title: "Maze Solving Bot using Reinforcement Learning",
    description:
      "Designed an RL-based algorithm capable of autonomously navigating through a maze environment to find the optimal path from the start to the goal. Addressed challenges including maze representation, RL algorithm selection, and defining rewards/penalties.",
    techStack: ["Reinforcement Learning", "AI", "Autonomous Navigation", "Python"],
    metrics: "Optimal Pathfinding",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "ai-ml",
  },
  {
    id: "human-pose-estimation",
    title: "Human Pose Estimation",
    description:
      "Built a real-time human pose estimation system capable of detecting and tracking body joints from images and video streams. Employed pretrained deep learning models (OpenPose, PoseNet, MediaPipe) to identify key landmarks.",
    techStack: ["MediaPipe", "OpenPose", "Deep Learning", "Computer Vision"],
    metrics: "Real-time Tracking",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "computer-vision",
  },
  {
    id: "surgical-action",
    title: "Surgical Action Triplet Detection",
    description:
      "Built a deep learning-based system to detect and label (instrument, action, target) triplets from surgical videos for semantic scene understanding. Combined object detection models with action recognition modules to extract spatiotemporal features.",
    techStack: ["YOLOv5", "DETR", "Deep Learning", "Action Recognition"],
    metrics: "Spatiotemporal Understanding",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "computer-vision",
  },
  {
    id: "point-cloud-completion",
    title: "3D Point Cloud Completion",
    description:
      "Developed a system to accurately fill in gaps and completely represent 3D objects from partial point clouds, enhancing quality for 3D modeling, robotics, and AR applications.",
    techStack: ["3D Modeling", "Computer Vision", "Deep Learning", "AR"],
    metrics: "Realistic 3D Models",
    githubUrl: "https://github.com/aman2603tiwari",
    category: "computer-vision",
  },
];
