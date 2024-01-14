import { Worker, Viewer } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout"
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Box, Stack } from '@mui/system'

const PDFViewer = ({ pdfUrl }) => {
    const newplugin = defaultLayoutPlugin()

  return (
    <Box sx={{height:"365px",width:"99%.5",marginLeft:"1px"}}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js`}>
        <Viewer  fileUrl={pdfUrl} plugins={[newplugin]} />
      </Worker>
    </Box>
  );
};

export default PDFViewer
