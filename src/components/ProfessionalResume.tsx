// import React from 'react';
// import { 
//   User, Briefcase, GraduationCap, Award, Code, Link, 
//   Globe, Flag, MessageCircle, Brain, Cpu 
// } from 'lucide-react';

// const ProfessionalResume = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg font-sans">
//       <div className="grid grid-cols-3 gap-4">
//         {/* Main Content */}
//         <div className="col-span-2">
//           {/* Header */}
//           <div className="border-b-2 border-gray-200 pb-4 mb-4">
//             <h1 className="text-3xl font-bold text-gray-800">Mohammed Huzaifah</h1>
//             <p className="text-sm text-gray-600">AI/ML Engineer & Computer Science Researcher</p>
//           </div>

//           {/* Professional Summary */}
//           <section className="mb-4">
//             <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-2">
//               <User className="mr-2 text-blue-500" size={20} /> Professional Summary
//             </h2>
//             <p className="text-sm text-gray-600">
//               Innovative Machine Learning Engineer specializing in cutting-edge AI technologies, MLOps, and scalable system design. 
//               Combines academic excellence with practical implementation experience in developing production-ready AI solutions 
//               that solve real-world challenges.
//             </p>
//           </section>

//           {/* Signature Projects */}
//           <section>
//             <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-2">
//               <Briefcase className="mr-2 text-blue-500" size={20} /> Signature Projects
//             </h2>
//             {[
//               {
//                 name: "Graph-RAG",
//                 description: "Graph RAG application combining LLMs with knowledge graphs to enhance accuracy and explainability.",
//                 tech: "OpenAI, Weaviate, Databricks, RDFLib, Pandas",
//                 impact: "Improved RAG system accuracy through innovative knowledge graph integration"
//               },
//               {
//                 name: "Vocal-Diagnose",
//                 description: "AI-powered voice pattern analysis for early disease detection.",
//                 tech: "Groq, TensorFlow, Librosa, Matplotlib",
//                 impact: "Achieved over 90% accuracy in early health screening"
//               },
//               {
//                 name: "KidsCare-Pro",
//                 description: "AI-powered pediatric health monitoring and prediction system.",
//                 tech: "Groq, TensorFlow, AWS, LightGBM",
//                 impact: "Developed advanced ML algorithms for pediatric health prediction"
//               }
//             ].map((project, index) => (
//               <div key={index} className="mb-3 pb-2 border-b border-gray-200">
//                 <div className="flex justify-between items-center">
//                   <h3 className="font-medium text-gray-700">{project.name}</h3>
//                 </div>
//                 <p className="text-xs text-gray-600 mb-1">{project.description}</p>
//                 <p className="text-xs text-gray-500 mb-1"><strong>Tech:</strong> {project.tech}</p>
//                 <p className="text-xs text-gray-500 italic">Impact: {project.impact}</p>
//               </div>
//             ))}
//           </section>
//         </div>

//         {/* Sidebar */}
//         <div>
//           {/* Contact Information */}
//           <section className="mb-4 bg-gray-50 p-3 rounded">
//             <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-2">
//               <Link className="mr-2 text-blue-500" size={20} /> Contact
//             </h2>
//             <div className="text-xs space-y-1">
//               <p>📧 huzaif027@gmail.com</p>
//               <p>📱 +91 6300940175</p>
//               <div className="flex space-x-2 mt-2">
//                 <a 
//                   href="https://linkedin.com/in/huzaifah-27o3" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="text-blue-600 hover:underline"
//                 >
//                   LinkedIn
//                 </a>
//                 <a 
//                   href="https://github.com/Sa1f27" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="text-blue-600 hover:underline"
//                 >
//                   GitHub
//                 </a>
//               </div>
//             </div>
//           </section>

//           {/* Technical Skills */}
//           <section className="mb-4">
//             <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-2">
//               <Cpu className="mr-2 text-blue-500" size={20} /> Technical Skills
//             </h2>
//             <div className="text-xs space-y-1">
//               <p><strong>AI & ML:</strong> LLMs, Neural Networks, Computer Vision, NLP</p>
//               <p><strong>Generative AI:</strong> Multi-modal Models, AI Agents</p>
//               <p><strong>Languages:</strong> Python, React.js, Java, TypeScript</p>
//               <p><strong>Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn</p>
//               <p><strong>Cloud:</strong> AWS, DigitalOcean, Azure</p>
//             </div>
//           </section>

//           {/* Languages */}
//           <section className="mb-4">
//             <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-2">
//               <MessageCircle className="mr-2 text-blue-500" size={20} /> Languages
//             </h2>
//             <div className="text-xs space-y-1">
//               <p>• English (Professional)</p>
//               <p>• Hindi (Fluent)</p>
//               <p>• Urdu (Native)</p>
//               <p>• Telugu (Conversational)</p>
//             </div>
//           </section>

//           {/* Achievements */}
//           <section>
//             <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-2">
//               <Award className="mr-2 text-blue-500" size={20} /> Achievements
//             </h2>
//             <div className="text-xs space-y-1">
//               <p>• LeetCode: 170+ problems solved</p>
//               <p>• Hackathons: 6 Participated, 1 Award</p>
//               <p>• Total Projects: 32</p>
//               <p>• Deployed Projects: 8</p>
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* Education & Certifications */}
//       <div className="mt-4 pt-2 border-t border-gray-200">
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-2">
//               <GraduationCap className="mr-2 text-blue-500" size={20} /> Education
//             </h2>
//             <div className="text-xs">
//               <p className="font-medium">Bachelor of Engineering</p>
//               <p>Computer Science (AI & ML)</p>
//               <p>CGPA: 8.6/10</p>
//               <p>Expected Graduation: 2026</p>
//             </div>
//           </div>
//           <div>
//             <h2 className="flex items-center text-lg font-semibold text-gray-700 mb-2">
//               <Brain className="mr-2 text-blue-500" size={20} /> Certifications
//             </h2>
//             <div className="text-xs space-y-1">
//               <p>• Machine Learning Engineering (Udemy, 2024)</p>
//               <p>• HackRevolution Hackathon Certificate</p>
//               <p>• CodeFest Hackathon Certificate</p>
//               <p>• DataNyx Datathon Certificate</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalResume;