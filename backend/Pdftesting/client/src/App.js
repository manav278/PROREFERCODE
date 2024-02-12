import logo from './logo.svg';
import './App.css';
import Fileupload from './components/Fileupload';
import PdfViewer from './components/Pdfviewer';

function App() {
  return (
    <div>
      <Fileupload></Fileupload>
      <PdfViewer></PdfViewer>
    </div>
  );
}

export default App;
