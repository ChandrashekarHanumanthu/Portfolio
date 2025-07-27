import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const resumeUrl = '/Chandrashekar Resume.pdf';
  
  useEffect(() => {
    // Check if the PDF loads successfully
    const checkPdf = async () => {
      try {
        const response = await fetch(resumeUrl);
        if (!response.ok) {
          throw new Error('Resume not found');
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading resume:', error);
        setShowFallback(true);
        setIsLoading(false);
      }
    };
    
    checkPdf();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Chandrashekar_Hanumanthu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            My Resume
          </h1>
          <p className="text-xl text-slate-300">Full Stack Developer | Odoo Specialist | Java/Spring Boot Expert</p>
          <p className="text-md text-slate-400 mt-2">Kapil Technologies | Hyderabad, India</p>
        </div>

        {/* Resume Viewer */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-1 border border-slate-800 shadow-2xl overflow-hidden mb-8 flex justify-center">
          {isLoading ? (
            <div className="h-[800px] flex items-center justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4.444 4.444 0 00-5.777-4.231 1 1 0 00-.125.028 1 1 0 00-.12.042A11.962 11.962 0 002 11c0 5.392 3.824 9.876 9 11.1m12-5.5c0-1.08-.12-2.13-.348-3.14M21 11a9 9 0 00-9-9m0 0a9 9 0 00-9 9m9-9v18m0 0s9-3 9-9m-9 9s-9-3-9-9" />
                  </svg>
                </div>
                <p className="text-slate-400">Loading resume...</p>
              </div>
            </div>
          ) : showFallback ? (
            <div className="h-[800px] flex flex-col items-center justify-center p-8 text-center">
              <div className="text-6xl mb-6">📄</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Resume Preview Unavailable</h3>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                There was an issue loading the resume preview. Please use the download button below to view my resume.
              </p>
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </button>
            </div>
          ) : (
            <iframe 
              src={`${resumeUrl}#toolbar=0&navpanes=0`}
              className="w-full h-[400px] md:h-[700px] lg:h-[800px] border-0"
              title="Resume"
              onError={() => setShowFallback(true)}
            />
          )}
        </div>

        {/* Download Button */}
        <div className="text-center">
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
