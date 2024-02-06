import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Box } from '@mui/system'; // Changed import from Stack to Box

const PDFViewer = ({ pdfUrl }) => {
    const newplugin = defaultLayoutPlugin();

    return (
        <Box sx={{ height: "365px", width: "99.5%", marginLeft: "1px" }}> {/* Corrected width value */}
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}> {/* Updated Worker URL */}
                <Viewer fileUrl={pdfUrl} plugins={[newplugin]} />
            </Worker>
        </Box>
    );
};

export default PDFViewer;
