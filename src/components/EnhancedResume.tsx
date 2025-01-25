import React, { forwardRef } from 'react';
import { 
  User, Briefcase, Code, GraduationCap, Award, Globe, 
  Mail, Phone, Linkedin, Github, MapPin, Shield, Cpu, Star 
} from 'lucide-react';

const EnhancedResume = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="max-w-4xl mx-auto p-6 bg-white shadow-xl font-sans text-sm">
      {/* Header */}
      <div className="border-b-2 border-blue-600 pb-3 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Mohammed Huzaifah</h1>
            <p className="text-lg text-blue-600">Generative AI & MLOps Engineer</p>
            <a 
              href="https://portfolio-huz.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline text-xs"
            >
              Portfolio Website
            </a>
          </div>
          <div className="text-right text-xs">
            <div className="flex items-center justify-end mb-1">
              <Mail className="mr-2 text-blue-500" size={14} />
              <a href="mailto:huzaif027@gmail.com" className="hover:underline">huzaif027@gmail.com</a>
            </div>
            <div className="flex items-center justify-end mb-1">
              <Phone className="mr-2 text-blue-500" size={14} />
              <span>+91 6300940175</span>
            </div>
            <div className="flex items-center justify-end mb-1">
              <MapPin className="mr-2 text-blue-500" size={14} />
              <span>Hyderabad, Telangana, India</span>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <a 
                href="https://linkedin.com/in/huzaifah-27o3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="text-blue-600 hover:text-blue-800" size={18} />
              </a>
              <a 
                href="https://github.com/Sa1f27" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="text-gray-800 hover:text-gray-600" size={18} />
              </a>
              <a 
                href="https://portfolio-huz.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Globe className="text-green-600 hover:text-green-800" size={18} /> 
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="col-span-2">
          {/* Professional Summary */}
          <section className="mb-4">
            <h2 className="flex items-center text-lg font-semibold text-blue-600 mb-2">
              <User className="mr-2" size={20} /> Introduction
            </h2>
            <p className="text-xs text-gray-700">
              Innovative Artificial Intelligence and Machine Learning Engineer with a proven track record 
              of designing and implementing cutting-edge AI solutions. Expertise spans application development, 
              MLOps, and advanced machine learning technologies. Committed to translating complex technical 
              requirements into scalable, impactful solutions that drive technological advancement.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="flex items-center text-lg font-semibold text-blue-600 mb-2">
              <Star className="mr-2" size={20} /> Professional Summary
            </h2>
            <div className="text-xs text-gray-700 space-y-1">
              {[
                "Experienced in Python data manipulation for loading and extraction as well as with Python libraries such as NumPy, SciPy and Pandas for data analysis and numerical computations.",
                "Proficient in machine learning and deep learning skills for multiple applications including Computer Vision, Recommendation Systems, Fraud Detection System",
                "Strong coding ability both in producing clean and efficient code as well as debugging and understanding large code bases.",
                "Extensive hands-on experience and high proficiency with structured, semi-structured and unstructured data, using a broad range of data science programming languages and big data tools including Python, Spark, SQL, Scikit Learn, Hadoop Map Reduce.",
                "Highly skilled in using Pandas, NumPy, Seaborn, SciPy, Matplotlib, Scikit-learn and NLP in Python for developing various machine learning algorithms."
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Signature Projects */}
          <section className="mb-4">
            <h2 className="flex items-center text-lg font-semibold text-blue-600 mb-2">
              <Briefcase className="mr-2" size={20} /> Signature Projects
            </h2>
            {[
              {
                name: "Graph-RAG",
                description: "Advanced RAG application integrating Large Language Models with knowledge graphs to enhance information retrieval accuracy and explainability.",
                tech: "OpenAI, Weaviate, Databricks, RDFLib, Pandas",
                link: "https://github.com/Sa1f27/GraphRAG",
                impact: "90% improvement in information retrieval accuracy"
              },
              {
                name: "Crawler - RAG Agent",
                description: "Intelligent documentation crawler transforming websites into interactive knowledge bases using vector database indexing and AI-powered querying.",
                tech: "Crawl4AI, OpenAI, Supabase, FastAPI, Pydantic",
                link: "https://github.com/Sa1f27/Crawler-AI.git",
                impact: "85% reduction in manual documentation search and scrape time"
              },
              {
                name: "DocHub-AI",
                description: "A RAG-based multi-agent AI platform revolutionizing access to government services with intelligent document assistance, scheme navigation, and seamless application support.",
                tech: "Python, LLama, TensorFlow, Flask, BeautifulSoup, PIL",
                link: "https://github.com/Sa1f27/DocHub-AI",
                impact: "Over 80% increase in successful government applications written"
              },
              {
                name: "KidsCare-Pro",
                description: "AI-driven pediatric health monitoring solution using advanced machine learning for predictive health condition analysis.",
                tech: "Groq, TensorFlow, AWS, Matplotlib, LightGBM",
                link: "https://github.com/Sa1f27/KidsCare-Pro",
                impact: "85% accuracy in pediatric health predictions"
              }
            ].map((project, index) => (
              <div key={index} className="mb-2 pb-2 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-xs">{project.name}</h3>
                    <p className="text-[0.7rem] text-gray-600 mb-1">{project.description}</p>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline text-[0.7rem]"
                  >
                    GitHub
                  </a>
                </div>
                <p className="text-[0.7rem] text-gray-500 mb-1">
                  <strong>Technologies:</strong> {project.tech}
                </p>
                <p className="text-[0.7rem] text-green-600">
                  <strong>Project Impact:</strong> {project.impact}
                </p>
              </div>
              
              
            ))}
          </section>
                {/* Footer with Metrics */}
      <div className="mt-4 pt-2 text-[0.7rem] text-center">
        <div className="flex justify-center space-x-3 text-gray-600">
          <p>🏆 LeetCode Problems Solved: 170+</p>
          <p>🚀 Total Projects: 32</p>
          <p>🏅 Hackathons: 6 Attended</p>
        </div>
      </div>

      
        </div>

        {/* Right Column */}
        <div>
          {/* Core Technical Skills */}
          <section className="mb-4">
            <h2 className="flex items-center text-lg font-semibold text-blue-600 mb-2">
              <Code className="mr-2" size={20} /> Core Technical Skills
            </h2>
            <div className="text-[0.7rem] space-y-2">
              {[
                {
                  category: "Programming Languages",
                  skills: "Python, JavaScript, HTML, CSS, Java"
                },
                {
                  category: "Frameworks & Libraries",
                  skills: "TensorFlow, PyTorch, Scikit-learn, Keras, NumPy, Pandas, NLTK, LangFlow, LangGraph"
                },
                {
                  category: "Big Data Tools",
                  skills: "Apache Spark, Hadoop, SQL, Vector Databases"
                },
                {
                  category: "Data Visualization",
                  skills: "Matplotlib, Seaborn, Plotly, Tableau, Power BI"
                },
                {
                  category: "Cloud & DevOps",
                  skills: "AWS, Azure, Docker, Kubernetes, CI/CD, Git, DVC"
                }
              ].map((skill, index) => (
                <div key={index}>
                  <strong className="text-gray-700">{skill.category}:</strong>
                  <p className="text-gray-600">{skill.skills}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core AI & Machine Learning */}
          <section className="mb-4">
            <h2 className="flex items-center text-lg font-semibold text-blue-600 mb-2">
              <Shield className="mr-2" size={20} /> Core AI & Machine Learning
            </h2>
            <div className="text-[0.7rem] text-gray-700 space-y-1">
              {[
                {
                  category: "Large Language Models",
                  skills: "Fine-tuning, Agentic AI, RAG Systems, GANs"
                },
                {
                  category: "Neural Networks",
                  skills: "Transformers, CNNs, RNNs, Clustering Models"
                },
                {
                  category: "Computer Vision",
                  skills: "Object Detection, Image Segmentation"
                },
                {
                  category: "Natural Language Processing",
                  skills: "Text Classification, Sentiment Analysis, Predictive Modeling"
                }
              ].map((area, index) => (
                <div key={index}>
                  <strong>{area.category}:</strong>
                  <p>{area.skills}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h2 className="flex items-center text-xl font-semibold text-blue-600 mb-3">
              <Award className="mr-2" size={24} /> Certifications
            </h2>
            <div className="text-xs space-y-2">
              {[
                {
                  name: "Machine Learning Engineering",
                  issuer: "Udemy",
                  year: "2024",
                  link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/ML-Udemy%20Certificate.pdf"
                },
                {
                  name: "HackRevolution Hackathon",
                  issuer: "MJCET",
                  year: "2025",
                  link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/HackRev-Certificate.jpg"
                },
                {
                  name: "RAM Infotech Internship",
                  issuer: "RAM Innovative Infotech",
                  year: "2024",
                  link: "https://github.com/Sa1f27/Certs/blob/65741ed34d0cad506b0b8c878faf12859fb8b950/Certificates/Ram%20Infotech-Internship.jpg",
                  
                },
                {
                  name: "Hackprix Hackathon",
                  issuer: "LIET",
                  year: "2024",
                  link: "https://github.com/Sa1f27/Certs/blob/25349ede0b3932d2dd77715f5bc324ef5c1173d2/Certificates/Hackprix-Certificate.pdf",

                },

              ].map((cert, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">{cert.name}</p>
                    <p className="text-gray-500">{cert.issuer} | {cert.year}</p>
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="flex items-center text-lg font-semibold text-blue-600 mb-2">
              <GraduationCap className="mr-2" size={20} /> Education
            </h2>
            <div className="text-[0.7rem]">
              <h3 className="font-semibold text-gray-800">
                Bachelor of Engineering
              </h3>
              <h2 className="text-gray-700">Lords Institute of Engineering & Technology</h2>
              <p className="text-gray-600">Computer Science (AI & ML Specialization)</p>
              <p className="text-gray-600">CGPA: 8.7/10</p>
              <p className="text-gray-600">Expected Graduation: 2026</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer with Metrics
      <div className="mt-4 pt-2 border-t border-gray-200 text-[0.7rem] text-center">
        <div className="flex justify-center space-x-3 text-gray-600">
          <p>🏆 LeetCode Problems Solved: 170+</p>
          <p>🚀 Total Projects: 32</p>
          <p>🏅 Hackathons: 6 Attended | 1 Award</p>
        </div>
      </div> */}
    </div>
  );
});

EnhancedResume.displayName = 'EnhancedResume';

export default EnhancedResume;