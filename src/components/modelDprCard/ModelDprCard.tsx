// import React, { useState } from 'react';
// import { Search, FileText, Download, Eye, Filter, Grid, List } from 'lucide-react';

// interface ResearchPDF {
//   id: string;
//   title: string;
//   thumbnail: string;
// }

// const mockPDFs: ResearchPDF[] = [
//   {
//     id: '1',
//     title: 'Advanced Machine Learning Techniques in Computer Vision',
//     thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '2',
//     title: 'Quantum Computing: Algorithms and Implementation Strategies',
//     thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '3',
//     title: 'Sustainable Energy Systems: A Comprehensive Review',
//     thumbnail: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '4',
//     title: 'Biomedical Engineering: Innovations in Healthcare Technology',
//     thumbnail: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '5',
//     title: 'Climate Change Mitigation Through Advanced Materials',
//     thumbnail: 'https://images.pexels.com/photos/8386629/pexels-photo-8386629.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '6',
//     title: 'Artificial Intelligence in Drug Discovery and Development',
//     thumbnail: 'https://images.pexels.com/photos/8386754/pexels-photo-8386754.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '7',
//     title: 'Blockchain Technology in Financial Services',
//     thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '8',
//     title: 'Neural Networks and Deep Learning Applications',
//     thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '9',
//     title: 'Cybersecurity in Cloud Computing Environments',
//     thumbnail: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '10',
//     title: 'Data Science Methods for Business Intelligence',
//     thumbnail: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '11',
//     title: 'Internet of Things: Smart City Applications',
//     thumbnail: 'https://images.pexels.com/photos/8386629/pexels-photo-8386629.jpeg?auto=compress&cs=tinysrgb&w=200'
//   },
//   {
//     id: '12',
//     title: 'Robotics and Automation in Manufacturing',
//     thumbnail: 'https://images.pexels.com/photos/8386754/pexels-photo-8386754.jpeg?auto=compress&cs=tinysrgb&w=200'
//   }
// ];

// function ModelDprCard() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

//   const filteredPDFs = mockPDFs.filter(pdf => 
//     pdf.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-3">
//               <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-2 rounded-xl">
//                 <FileText className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold text-gray-900">Research Library</h1>
//                 <p className="text-sm text-gray-600">PDF Collection</p>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//                 <input
//                   type="text"
//                   placeholder="Search papers..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 pr-4 py-2 w-64 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                 />
//               </div>
              
//               <div className="flex bg-gray-100 rounded-xl p-1">
//                 <button
//                   onClick={() => setViewMode('grid')}
//                   className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600'}`}
//                 >
//                   <Grid className="h-4 w-4" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode('list')}
//                   className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600'}`}
//                 >
//                   <List className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//             {filteredPDFs.length} Research Papers
//           </h2>
//         </div>

//         {/* PDF Grid/List */}
//         <div className={viewMode === 'grid' 
//           ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" 
//           : "space-y-3"
//         }>
//           {filteredPDFs.map(pdf => (
//             <div key={pdf.id} className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200 cursor-pointer ${
//               viewMode === 'list' ? 'flex items-center' : ''
//             }`}>
//               {/* Thumbnail */}
//               <div className={`relative overflow-hidden flex-shrink-0 ${
//                 viewMode === 'list' ? 'w-16 h-16' : 'aspect-square w-full'
//               }`}>
//                 <img 
//                   src={pdf.thumbnail} 
//                   alt={pdf.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
                
//                 {/* Overlay Actions */}
//                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <div className="flex space-x-2">
//                     <button className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors">
//                       <Eye className="h-4 w-4 text-gray-700" />
//                     </button>
//                     <button className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-sm transition-colors">
//                       <Download className="h-4 w-4 text-gray-700" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className={`p-3 ${viewMode === 'list' ? 'flex-1' : ''}`}>
//                 <h3 className={`font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight ${
//                   viewMode === 'list' ? 'text-sm line-clamp-2' : 'text-sm line-clamp-3'
//                 }`}>
//                   {pdf.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredPDFs.length === 0 && (
//           <div className="text-center py-12">
//             <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-lg font-medium text-gray-900 mb-2">No papers found</h3>
//             <p className="text-gray-600">Try adjusting your search terms</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default ModelDprCard;
































import React from 'react'
import { FileText } from 'lucide-react'
interface ModelDprCardProps {
  title: string;
  description?: string; // optional
  link: string;
}
const ModelDprCard: React.FC<ModelDprCardProps>= ({title, description, link}:any) => {
  return (
    <>
     <div
            className="relative bg-white/30 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-black to-green-500 rounded-t-3xl" />
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-200 to-orange-100 p-3 rounded-xl">
                  <FileText className="text-orange-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{description}</p>
                </div>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bottom-0 bg-gradient-to-r from-orange-600 to-orange-300 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                View PDF <FileText size={16} />
              </a>
            </div>
          </div> 
    </>
  )
}

export default ModelDprCard
