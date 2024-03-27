import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Db = () => {
  const navigate = useNavigate();
  const [showUpload, setShowUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleReqRefClick = async() => {
    let result = await axios.get("http://localhost:3003/api/resumeUploaded");
    if(result.data===0)
    {
      navigate("/requestreferral");
    }else{
      alert("Please upload your resume before requesting a referral");
    }
  }

  const handleShow = () => {
    setShowUpload(!showUpload);
  };
  const viewResume = async () => {
    try {
      const response = await axios.get("http://localhost:3003/api/getPdf", {
        responseType: "blob", // Use blob responseType to handle binary data
      });

      // Create a Blob object from the binary data
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      // Create a URL for the Blob object
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Use the download attribute to trigger a download of the PDF file
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "file.pdf"); // Specify the file name here
      document.body.appendChild(link);
      link.click();

      // Clean up by revoking the URL object
      URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post(
          "http://localhost:3003/api/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("File uploaded successfully:", response.data);
        alert("File Uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.error("No file selected");
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div
      class="container px-4 text-center"
      style={{
        backgroundColor: "black",
        border: "5px solid black",
        borderRadius: "8px",
      }}
    >
      <div class="row gx-5 align-items-center">
        <div class="col">
          <div class="p-3">
            <p style={{ color: "white" }}>
              Seeking a referral for your dream position at your preferred
              company? You're in luck! Simply request it here. If you need more
              information, check out our FAQ section. We've got all the details
              you need to navigate the referral process smoothly. Don't miss out
              on this opportunity to boost your chances of landing your ideal
              role. Take the first step towards your career goals today!
            </p>

            <button type="button" class="btn btn-primary border-light" onClick={handleReqRefClick}>
                Request Referral
            </button>
          </div>
        </div>
        <div class="col">
          <div class="p-3">
            <p style={{ color: "white" }}>
              Transform your resume here for a stellar impression when
              requesting a referral. Your resume is your professional
              story—update it with your latest achievements and experiences to
              captivate potential employers. A well-crafted resume is your key
              to unlocking new career opportunities. Keep it current and
              compelling to highlight your unique skills and qualifications,
              setting you apart from the competition
            </p>
            <div className="row">
              <button
                type="button"
                className="col btn btn-primary border-light m-3"
                onClick={viewResume}
              >
                Download
              </button>
              <button
                type="button"
                className="col btn btn-primary border-light m-3"
                onClick={handleShow}
              >
                Upload Resume
              </button>
            </div>
            {showUpload && (
              <div className="row m-3 text-light">
                <input
                  className="col-12 m-3 p-1"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
                <button
                  className="col m-3 p-1 text-light bg-success btn"
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            )}
          </div>
        </div>
        {/* <hr style={{color:'white'}}/> */}
      </div>
    </div>
  );
};

export default Db;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Fileupload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleUpload = async () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       try {
//         const response = await axios.post('http://localhost:3001/upload', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });

//         console.log('File uploaded successfully:', response.data);
//       } catch (error) {
//         console.error('Error uploading file:', error);
//       }
//     } else {
//       console.error('No file selected');
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} accept=".pdf" />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default Fileupload;
