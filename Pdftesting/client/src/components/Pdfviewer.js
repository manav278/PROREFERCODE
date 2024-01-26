import React, { useState } from 'react';
import axios from 'axios';
const PdfViewer = () => {
  const [pdfData, setPdfData] = useState('');

  const handleFetchPdf = async () => {
    const fileName = 'SDP_Project.pdf';  // Replace with the actual PDF file name in your MongoDB

    try {
      const response = await axios.get(`http://localhost:3001/api/getPdf/${fileName}`,{
        responseType: 'blob',
      });

      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      setPdfData(pdfUrl);
    } catch (error) {
      console.error('Error fetching PDF:', error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchPdf}>Fetch PDF</button>
      {pdfData && <iframe title="PDF Viewer" width="100%" height="500" src={pdfData} />}
    </div>
  );
};

export default PdfViewer;
