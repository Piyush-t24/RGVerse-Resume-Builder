import React, { useState } from 'react';
import { ResumeEditor } from './components/ResumeEditor';
import { ResumePreview } from './components/ResumePreview';
import { ResumeData } from './types/Resume';
import { sampleResumeData } from './utils/sampleData';

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    twitter: '',
    location: ''
  },
  professionalSummary: '',
  education: [],
  experiences: [],
  projects: [],
  certifications: [],
  extraCurricular: [],
  awards: [],
  achievements: [],
  technicalSkills: {
    languages: [],
    frameworks: [],
    tools: [],
    libraries: []
  },
  languageProficiency: []
};

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);

  const updateResumeData = (newData: ResumeData) => {
    setResumeData(newData);
  };

  const loadSampleData = () => {
    setResumeData(sampleResumeData);
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row" style={{ fontFamily: 'Nunito, sans-serif' }}>
      {/* Left Side - Editor */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
        <ResumeEditor
          resumeData={resumeData}
          updateResumeData={updateResumeData}
          loadSampleData={loadSampleData}
        />
      </div>

      {/* Right Side - Preview */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full border-l-0 lg:border-l border-gray-200">
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
}

export default App;