import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import EnhancedResume from './components/EnhancedResume';

function App() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Mohammed_Huzaifah_Resume',
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={handlePrint}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors fixed top-4 right-4 z-10"
        >
          Download PDF
        </button>
        <EnhancedResume ref={componentRef} />
      </div>
    </div>
  );
}

export default App;