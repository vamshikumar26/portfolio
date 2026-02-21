
// import insta1 from '../projectimages/insta/insta1.jpeg'
// import webchat1 from '../projectimages/webchat/webchat1.png'
// import ml1 from '../projectimages/machinelearning/ml1.png'
// import portfolio1 from '../projectimages/portfolio/portfolio1.png'
 import pdfreader from '../projectimages/pdfreader/pdf-reader-arch.png'
// import games1 from '../projectimages/games/games1.png'
// import yt1 from '../projectimages/youtube/yt1.png'
// import discard1 from '../projectimages/discard/discard1.png'
export const projects = [
    {
        title: "RAG-Powered PDF Chatbot",
        image: "sriramreddyk\src\assets\projectimages\pdf-reader-arch.png",
        description: "An AI-powered PDF chatbot that extracts text from documents, converts it into embeddings, and stores it in a FAISS vector database. User queries are transformed into embeddings to retrieve relevant chunks, which are then processed through a RAG pipeline using OpenAI to generate accurate contextual responses.",
        technologies: [
            "Python",
            "RAG",
            "OpenAI API",
            "Embeddings",
            "FAISS",
            "Vector Database",
            "FastAPI",
            "LangChain",
            "PDF Processing",
            "LLM"
        ],
        code: "https://github.com/vamshikumar26/PDF-Powered-Chatbot-for-Student-Q-A-using-OpenAI-and-Vector-Database-Sreamlit.git",
        demo: "https://github.com/vamshikumar26/PDF-Powered-Chatbot-for-Student-Q-A-using-OpenAI-and-Vector-Database-Sreamlit.git"
    }
    ,
    {
        title: " AI-Based Cardiac Arrhythmia Detection System",
        image: "https://res.cloudinary.com/dqnmzdsoy/image/upload/v1750445721/jmzgdaplvyv6dsphijqp.png",
        description: "An AI-based cardiac arrhythmia detection system that preprocesses ECG signals, applies PCA for dimensionality reduction, and uses a hybrid deep learning model (CNN + LSTM) to classify abnormal heart rhythms with softmax probability output.",
        technologies: [
            "Python",
            "Deep Learning",
            "CNN",
            "LSTM",
            "Keras",
            "TensorFlow",
            "PCA",
            "ECG Signal Processing",
            "Data Preprocessing"
        ],
        code: "https://github.com/vamshikumar26/Automated-Cardiac-Arrhythmia-Detection-Using-Recurrent-Neural-Networks-RNN-.git",
        demo: "https://github.com/vamshikumar26/Automated-Cardiac-Arrhythmia-Detection-Using-Recurrent-Neural-Networks-RNN-.git"
    },
    {
        title: "MRI Brain Tumor Classifier",
        image: "https://res.cloudinary.com/dqnmzdsoy/image/upload/v1762267841/mymzegcrtrym2yfhnpp3.png",
        description: "A deep learning-based brain tumor detection system that preprocesses MRI images, applies data augmentation, and leverages a pretrained Xception model with global average pooling, dropout, and dense layers to classify tumor types with softmax probability output.",
        technologies: [
            "Python",
            "Deep Learning",
            "Xception",
            "TensorFlow",
            "Keras",
            "CNN",
            "Image Processing",
            "Data Augmentation",
            "Transfer Learning"
        ],
        code: "https://github.com/vamshikumar26/Deep-Learning-Based-Brain-Tumor-Detection-Using-MRI-Images.git",
        demo: "https://github.com/vamshikumar26/Deep-Learning-Based-Brain-Tumor-Detection-Using-MRI-Images.git"
    },
    {
        title: "ADF Cloud Migration Pipeline",
        image: "https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747813896/rk1vd8ma2ivppcqjc62x.png ",
        description: "Designed an end-to-end Medallion Architecture data pipeline using Azure Databricks and Delta Lake to process raw data into Bronze, Silver, and Gold layers, enabling scalable transformations and delivering curated datasets to Azure Synapse Analytics for reporting.",
        technologies: [
            "Azure Databricks",
            "Apache Spark",
            "Delta Lake",
            "Data Lake Storage",
            "Synapse Analytics",
            "Medallion Architecture",
            "ETL Pipelines"
        ],
        code: "https://github.com/ksriramreddy/ECHO.git",
        demo: 0
    },
    {
        title: "Azure Medallion Data Pipeline",
        image: insta1,
        description: "Developed an end-to-end ETL pipeline using Azure Data Factory with Self-Hosted Integration Runtime to securely migrate on-premises data to Azure Data Lake Storage, perform transformations using Data Flows, and load curated data into Azure Synapse Analytics for reporting.",
        technologies: [
            "Azure Data Factory",
            "Data Lake Storage",
            "Self-Hosted Integration Runtime",
            "Synapse Analytics",
            "ETL Pipelines",
                        
        ],
        code: "https://github.com/ksriramreddy/instagram-clone.git",
        demo: 0
    },
    {
        title: "Task Manager API (FastAPI)",
        image: webchat1,
        description: "Developed a user-based task management REST API using FastAPI and MongoDB that supports full CRUD operations, task filtering, and validation, enabling users to securely create, update, and manage their personal tasks.",
        technologies: [
            "FastAPI",
            "MongoDB",
            "Python",
            "REST API",
            "CRUD Operations",
            "Pydantic",
            "Authentication",
            "Backend Development"
        ],
        code: "https://github.com/vamshikumar26/FastAPI-ToDo-App-with-MongoDB-Backend.git",
        demo: 0
    },
    {
        title: "Book Review Management System",
        image: ml1,
        description: "Designed a Book Review Management API using FastAPI that allows users to add books, write reviews, update ratings, and perform CRUD operations, with structured validation and efficient database interactions.",
        technologies: [
            "FastAPI",
            "MongoDB",
            "Python",
            "REST API",
            "CRUD Operations",
            "Database Design",
            "Pydantic",
            "Backend Development"
        ],
        code: "https://github.com/vamshikumar26/Book-Review-System.git",
        demo: 0
    },
    {
        title: "Portfolio",
        image: portfolio1,
        description: "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["React", "HTML", "CSS", "JavaScript"],
        code: "",
        demo: 0
    }
    
]

export const education = [
    {
        institution: "Sri Bhashyam High School",
        degree: "Schooling",
        field: "SSC (X)",
        year: "2019",
        gpa: "9.5",
        description: "I have completed my schooling in SSC (X) at Sri Bhashyam High School with the grade of 9.5 CGPA",
        image: "data:image/png;base64,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",
    },
    {
        institution: "Abhyaas Junior College",
        degree: "Intermediate",
        field: "MPC (12th Grade)",
        year: "2019 - 2021",
        gpa: "9.4",
        description: "I have completed my intermediate education at Abhyaas Junior College with a focus on Mathematics, Physics and Chemistry (MPC) stream, achieving a grade of 9.4 CGPA.",
        image: "data:image/png;base64,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",
    },
    {
        institution: "CMR Technical Campus",
        degree: "Bachelor of Technology - B-Tech",
        field: "Computer Science and Engineering (CSE) with specialization in Data Science",
        year: "2021 - 2025",
        gpa: "8.28",
        description: "I have completed my bachelor's degree in Computer Science and Engineering (CSE) with a specialization in Data Science at CMR Technical Campus.",
        image: "https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747811992/tb7xsgrlc0mm7odwpmwn.png",
    }
]

const skills = [
    ['HTML', 'CSS', 'JavaScript', 'React.Js', 'Tailwind', 'Bootstrap', 'Redux', 'ChakraUi'],
    ['JavaScript', 'Node.js', 'exports.js', 'Mongo', 'SQL', 'API', 'Firebase', 'Appwrite'],
    ['c', 'c++', 'JavaScript', 'Python', 'Java', 'MySQL'],
    ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva']
]