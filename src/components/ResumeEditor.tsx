import React from 'react';
import { ResumeData, Experience, Education, Project, Certification, ExtraCurricular, Award, Achievement } from '../types/Resume';
import { Plus, Trash2, User, Briefcase, GraduationCap, Code, FileText, Award as AwardIcon, Trophy, Star, Sparkles } from 'lucide-react';
import { TextEditor } from './TextEditor';
import { ArrowLeft } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-transparent bg-transparent text-[#092413] shadow-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="https://rgverse.vercel.app/Home">
          <button className="flex items-center gap-2 rounded-full border border-[#092413] p-2 transition-colors hover:bg-green-100">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

interface ResumeEditorProps {
  resumeData: ResumeData;
  updateResumeData: (data: ResumeData) => void;
  loadSampleData: () => void;
}

export const ResumeEditor: React.FC<ResumeEditorProps> = ({
  resumeData,
  updateResumeData,
  loadSampleData,
}) => {
  const updatePersonalInfo = (
    field: keyof ResumeData["personalInfo"],
    value: string
  ) => {
    updateResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  const updateProfessionalSummary = (value: string) => {
    updateResumeData({
      ...resumeData,
      professionalSummary: value,
    });
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      degree: "",
      school: "",
      schoolUrl: "",
      location: "",
      startDate: "",
      endDate: "",
      gpa: "",
    };
    updateResumeData({
      ...resumeData,
      education: [...resumeData.education, newEducation],
    });
  };

  const updateEducation = (
    id: string,
    field: keyof Education,
    value: string
  ) => {
    updateResumeData({
      ...resumeData,
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    updateResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      title: "",
      company: "",
      companyUrl: "",
      location: "",
      startDate: "",
      endDate: "",
      description: [""],
    };
    updateResumeData({
      ...resumeData,
      experiences: [...resumeData.experiences, newExperience],
    });
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: any
  ) => {
    updateResumeData({
      ...resumeData,
      experiences: resumeData.experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    updateResumeData({
      ...resumeData,
      experiences: resumeData.experiences.filter((exp) => exp.id !== id),
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "",
      technologies: "",
      liveUrl: "",
      githubUrl: "",
      startDate: "",
      endDate: "",
      description: [""],
    };
    updateResumeData({
      ...resumeData,
      projects: [...resumeData.projects, newProject],
    });
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    updateResumeData({
      ...resumeData,
      projects: resumeData.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    });
  };

  const removeProject = (id: string) => {
    updateResumeData({
      ...resumeData,
      projects: resumeData.projects.filter((proj) => proj.id !== id),
    });
  };

  const addCertification = () => {
    const newCertification: Certification = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      issuerUrl: "",
      date: "",
      credentialUrl: "",
    };
    updateResumeData({
      ...resumeData,
      certifications: [...resumeData.certifications, newCertification],
    });
  };

  const updateCertification = (
    id: string,
    field: keyof Certification,
    value: string
  ) => {
    updateResumeData({
      ...resumeData,
      certifications: resumeData.certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      ),
    });
  };

  const removeCertification = (id: string) => {
    updateResumeData({
      ...resumeData,
      certifications: resumeData.certifications.filter(
        (cert) => cert.id !== id
      ),
    });
  };

  const addExtraCurricular = () => {
    const newActivity: ExtraCurricular = {
      id: Date.now().toString(),
      activity: "",
      organization: "",
      organizationUrl: "",
      role: "",
      startDate: "",
      endDate: "",
      description: [""],
    };
    updateResumeData({
      ...resumeData,
      extraCurricular: [...resumeData.extraCurricular, newActivity],
    });
  };

  const updateExtraCurricular = (
    id: string,
    field: keyof ExtraCurricular,
    value: any
  ) => {
    updateResumeData({
      ...resumeData,
      extraCurricular: resumeData.extraCurricular.map((activity) =>
        activity.id === id ? { ...activity, [field]: value } : activity
      ),
    });
  };

  const removeExtraCurricular = (id: string) => {
    updateResumeData({
      ...resumeData,
      extraCurricular: resumeData.extraCurricular.filter(
        (activity) => activity.id !== id
      ),
    });
  };

  const addAward = () => {
    const newAward: Award = {
      id: Date.now().toString(),
      title: "",
      issuer: "",
      issuerUrl: "",
      date: "",
      description: "",
    };
    updateResumeData({
      ...resumeData,
      awards: [...resumeData.awards, newAward],
    });
  };

  const updateAward = (id: string, field: keyof Award, value: string) => {
    updateResumeData({
      ...resumeData,
      awards: resumeData.awards.map((award) =>
        award.id === id ? { ...award, [field]: value } : award
      ),
    });
  };

  const removeAward = (id: string) => {
    updateResumeData({
      ...resumeData,
      awards: resumeData.awards.filter((award) => award.id !== id),
    });
  };

  const addAchievement = () => {
    const newAchievement: Achievement = {
      id: Date.now().toString(),
      title: "",
      description: "",
      date: "",
      url: "",
    };
    updateResumeData({
      ...resumeData,
      achievements: [...resumeData.achievements, newAchievement],
    });
  };

  const updateAchievement = (
    id: string,
    field: keyof Achievement,
    value: string
  ) => {
    updateResumeData({
      ...resumeData,
      achievements: resumeData.achievements.map((achievement) =>
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      ),
    });
  };

  const removeAchievement = (id: string) => {
    updateResumeData({
      ...resumeData,
      achievements: resumeData.achievements.filter(
        (achievement) => achievement.id !== id
      ),
    });
  };

  const updateTechnicalSkills = (
    category: keyof ResumeData["technicalSkills"],
    value: string
  ) => {
    const skills = value
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill);
    updateResumeData({
      ...resumeData,
      technicalSkills: {
        ...resumeData.technicalSkills,
        [category]: skills,
      },
    });
  };

  return (
    <div
      className="h-full overflow-y-auto bg-green-50 p-6"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
          <Navbar />
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#092413] mb-2">RGVerse</h1>
          <p className="text-2xl font-semibold text-green-800 mb-1">
            Resume Builder
          </p>
          <p className="text-green-700">
            ✨ Create your magical resume in minutes ✨
          </p>
          <button
            onClick={loadSampleData}
            className="mt-4 px-8 py-3 bg-[#092413] text-white rounded-full font-bold hover:bg-green-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🎭 Load Sample Magic
          </button>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-500 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-full mr-3">
              <User className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#092413]">
              🌟 Personal Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                ✨ Full Name
              </label>
              <input
                type="text"
                value={resumeData.personalInfo.fullName}
                onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="Your Amazing Name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                📱 Phone
              </label>
              <input
                type="text"
                value={resumeData.personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="+1 (123) 456-7890"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                📧 Email
              </label>
              <input
                type="email"
                value={resumeData.personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                📍 Location
              </label>
              <input
                type="text"
                value={resumeData.personalInfo.location}
                onChange={(e) => updatePersonalInfo("location", e.target.value)}
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="Your City, State"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                💼 LinkedIn URL
              </label>
              <input
                type="url"
                value={resumeData.personalInfo.linkedin}
                onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="https://linkedin.com/in/yourname"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                🐙 GitHub URL
              </label>
              <input
                type="url"
                value={resumeData.personalInfo.github}
                onChange={(e) => updatePersonalInfo("github", e.target.value)}
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="https://github.com/yourname"
              />
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-600 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-full mr-3">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#092413]">
              📝 Professional Summary
            </h2>
          </div>
          <TextEditor
            value={resumeData.professionalSummary}
            onChange={updateProfessionalSummary}
            placeholder="Write your magical professional story here..."
            className="h-32"
          />
        </div>

        {/* Education */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-500 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-3">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#092413]">
                🎓 Education
              </h2>
            </div>
            <button
              onClick={addEducation}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Education
            </button>
          </div>
          {resumeData.education.map((edu) => (
            <div
              key={edu.id}
              className="mb-6 p-6 bg-green-50 rounded-3xl relative border-2 border-green-200"
            >
              <button
                onClick={() => removeEducation(edu.id)}
                className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🎯 Degree
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, "degree", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🏫 School
                  </label>
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) =>
                      updateEducation(edu.id, "school", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="University Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🔗 School URL
                  </label>
                  <input
                    type="url"
                    value={edu.schoolUrl || ""}
                    onChange={(e) =>
                      updateEducation(edu.id, "schoolUrl", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://university.edu"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📍 Location
                  </label>
                  <input
                    type="text"
                    value={edu.location}
                    onChange={(e) =>
                      updateEducation(edu.id, "location", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    ⭐ GPA
                  </label>
                  <input
                    type="text"
                    value={edu.gpa || ""}
                    onChange={(e) =>
                      updateEducation(edu.id, "gpa", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="3.8"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-green-800 mb-1">
                      📅 Start
                    </label>
                    <input
                      type="text"
                      value={edu.startDate}
                      onChange={(e) =>
                        updateEducation(edu.id, "startDate", e.target.value)
                      }
                      className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Sep 2018"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-green-800 mb-1">
                      🏁 End
                    </label>
                    <input
                      type="text"
                      value={edu.endDate}
                      onChange={(e) =>
                        updateEducation(edu.id, "endDate", e.target.value)
                      }
                      className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="May 2022"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-600 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-3">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#092413]">
                💼 Experience
              </h2>
            </div>
            <button
              onClick={addExperience}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Experience
            </button>
          </div>
          {resumeData.experiences.map((exp) => (
            <div
              key={exp.id}
              className="mb-6 p-6 bg-green-50 rounded-3xl relative border-2 border-green-200"
            >
              <button
                onClick={() => removeExperience(exp.id)}
                className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    💼 Job Title
                  </label>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) =>
                      updateExperience(exp.id, "title", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Software Engineer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🏢 Company
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, "company", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🔗 Company URL
                  </label>
                  <input
                    type="url"
                    value={exp.companyUrl || ""}
                    onChange={(e) =>
                      updateExperience(exp.id, "companyUrl", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📍 Location
                  </label>
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) =>
                      updateExperience(exp.id, "location", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📅 Start Date
                  </label>
                  <input
                    type="text"
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "startDate", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Jun 2020"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🏁 End Date
                  </label>
                  <input
                    type="text"
                    value={exp.endDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "endDate", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Present"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-green-800 mb-1">
                  📝 Description
                </label>
                <TextEditor
                  value={exp.description.join("\n")}
                  onChange={(value) =>
                    updateExperience(exp.id, "description", value.split("\n"))
                  }
                  placeholder="• Describe your amazing achievements here&#10;• Use bullet points to highlight key accomplishments&#10;• Include metrics and results where possible"
                  className="h-24"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-500 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-3">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#092413]">🚀 Projects</h2>
            </div>
            <button
              onClick={addProject}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </button>
          </div>
          {resumeData.projects.map((proj) => (
            <div
              key={proj.id}
              className="mb-6 p-6 bg-green-50 rounded-3xl relative border-2 border-green-200"
            >
              <button
                onClick={() => removeProject(proj.id)}
                className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🎯 Project Name
                  </label>
                  <input
                    type="text"
                    value={proj.name}
                    onChange={(e) =>
                      updateProject(proj.id, "name", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="My Awesome Project"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    ⚡ Technologies
                  </label>
                  <input
                    type="text"
                    value={proj.technologies}
                    onChange={(e) =>
                      updateProject(proj.id, "technologies", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🌐 Live URL
                  </label>
                  <input
                    type="url"
                    value={proj.liveUrl || ""}
                    onChange={(e) =>
                      updateProject(proj.id, "liveUrl", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://myproject.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🐙 GitHub URL
                  </label>
                  <input
                    type="url"
                    value={proj.githubUrl || ""}
                    onChange={(e) =>
                      updateProject(proj.id, "githubUrl", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://github.com/user/project"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📅 Start Date
                  </label>
                  <input
                    type="text"
                    value={proj.startDate}
                    onChange={(e) =>
                      updateProject(proj.id, "startDate", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Jun 2020"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🏁 End Date
                  </label>
                  <input
                    type="text"
                    value={proj.endDate}
                    onChange={(e) =>
                      updateProject(proj.id, "endDate", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Present"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-green-800 mb-1">
                  📝 Description
                </label>
                <TextEditor
                  value={proj.description.join("\n")}
                  onChange={(value) =>
                    updateProject(proj.id, "description", value.split("\n"))
                  }
                  placeholder="• Describe your project features and impact&#10;• Highlight technical achievements&#10;• Include user metrics if available"
                  className="h-24"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-600 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-3">
                <AwardIcon className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#092413]">
                🏆 Certifications
              </h2>
            </div>
            <button
              onClick={addCertification}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Certification
            </button>
          </div>
          {resumeData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="mb-6 p-6 bg-green-50 rounded-3xl relative border-2 border-green-200"
            >
              <button
                onClick={() => removeCertification(cert.id)}
                className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🎯 Certification Name
                  </label>
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) =>
                      updateCertification(cert.id, "name", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="AWS Certified Solutions Architect"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🏢 Issuer
                  </label>
                  <input
                    type="text"
                    value={cert.issuer}
                    onChange={(e) =>
                      updateCertification(cert.id, "issuer", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Amazon Web Services"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🔗 Issuer URL
                  </label>
                  <input
                    type="url"
                    value={cert.issuerUrl || ""}
                    onChange={(e) =>
                      updateCertification(cert.id, "issuerUrl", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://aws.amazon.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📅 Date
                  </label>
                  <input
                    type="text"
                    value={cert.date}
                    onChange={(e) =>
                      updateCertification(cert.id, "date", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Mar 2021"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🔗 Credential URL
                  </label>
                  <input
                    type="url"
                    value={cert.credentialUrl || ""}
                    onChange={(e) =>
                      updateCertification(
                        cert.id,
                        "credentialUrl",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://aws.amazon.com/verification"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Curricular */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-500 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-3">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#092413]">
                🌟 Extra Curricular
              </h2>
            </div>
            <button
              onClick={addExtraCurricular}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Activity
            </button>
          </div>
          {resumeData.extraCurricular.map((activity) => (
            <div
              key={activity.id}
              className="mb-6 p-6 bg-green-50 rounded-3xl relative border-2 border-green-200"
            >
              <button
                onClick={() => removeExtraCurricular(activity.id)}
                className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🎯 Activity
                  </label>
                  <input
                    type="text"
                    value={activity.activity}
                    onChange={(e) =>
                      updateExtraCurricular(
                        activity.id,
                        "activity",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Programming Club"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🏢 Organization
                  </label>
                  <input
                    type="text"
                    value={activity.organization}
                    onChange={(e) =>
                      updateExtraCurricular(
                        activity.id,
                        "organization",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="University Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🔗 Organization URL
                  </label>
                  <input
                    type="url"
                    value={activity.organizationUrl || ""}
                    onChange={(e) =>
                      updateExtraCurricular(
                        activity.id,
                        "organizationUrl",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://university.edu"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    👑 Role
                  </label>
                  <input
                    type="text"
                    value={activity.role}
                    onChange={(e) =>
                      updateExtraCurricular(activity.id, "role", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="President"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📅 Start Date
                  </label>
                  <input
                    type="text"
                    value={activity.startDate}
                    onChange={(e) =>
                      updateExtraCurricular(
                        activity.id,
                        "startDate",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Sep 2019"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🏁 End Date
                  </label>
                  <input
                    type="text"
                    value={activity.endDate}
                    onChange={(e) =>
                      updateExtraCurricular(
                        activity.id,
                        "endDate",
                        e.target.value
                      )
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="May 2022"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-green-800 mb-1">
                  📝 Description
                </label>
                <TextEditor
                  value={activity.description.join("\n")}
                  onChange={(value) =>
                    updateExtraCurricular(
                      activity.id,
                      "description",
                      value.split("\n")
                    )
                  }
                  placeholder="• Describe your role and achievements&#10;• Highlight leadership and impact&#10;• Include any metrics or results"
                  className="h-24"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-600 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-3">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#092413]">🏅 Awards</h2>
            </div>
            <button
              onClick={addAward}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Award
            </button>
          </div>
          {resumeData.awards.map((award) => (
            <div
              key={award.id}
              className="mb-6 p-6 bg-green-50 rounded-3xl relative border-2 border-green-200"
            >
              <button
                onClick={() => removeAward(award.id)}
                className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🏆 Award Title
                  </label>
                  <input
                    type="text"
                    value={award.title}
                    onChange={(e) =>
                      updateAward(award.id, "title", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Dean's List"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🏢 Issuer
                  </label>
                  <input
                    type="text"
                    value={award.issuer}
                    onChange={(e) =>
                      updateAward(award.id, "issuer", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="University Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🔗 Issuer URL
                  </label>
                  <input
                    type="url"
                    value={award.issuerUrl || ""}
                    onChange={(e) =>
                      updateAward(award.id, "issuerUrl", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://university.edu"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📅 Date
                  </label>
                  <input
                    type="text"
                    value={award.date}
                    onChange={(e) =>
                      updateAward(award.id, "date", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Fall 2020"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📝 Description
                  </label>
                  <TextEditor
                    value={award.description}
                    onChange={(value) =>
                      updateAward(award.id, "description", value)
                    }
                    placeholder="Describe the award and what you achieved to earn it"
                    className="h-20"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-500 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-3">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#092413]">
                ✨ Achievements
              </h2>
            </div>
            <button
              onClick={addAchievement}
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Achievement
            </button>
          </div>
          {resumeData.achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="mb-6 p-6 bg-green-50 rounded-3xl relative border-2 border-green-200"
            >
              <button
                onClick={() => removeAchievement(achievement.id)}
                className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🎯 Achievement Title
                  </label>
                  <input
                    type="text"
                    value={achievement.title}
                    onChange={(e) =>
                      updateAchievement(achievement.id, "title", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Published Research Paper"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📅 Date
                  </label>
                  <input
                    type="text"
                    value={achievement.date}
                    onChange={(e) =>
                      updateAchievement(achievement.id, "date", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Dec 2021"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    📝 Description
                  </label>
                  <TextEditor
                    value={achievement.description}
                    onChange={(value) =>
                      updateAchievement(achievement.id, "description", value)
                    }
                    placeholder="Describe your achievement and its impact"
                    className="h-20"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-green-800 mb-1">
                    🔗 URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={achievement.url || ""}
                    onChange={(e) =>
                      updateAchievement(achievement.id, "url", e.target.value)
                    }
                    className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="https://example.com/achievement"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl border-l-8 border-green-600 transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-full mr-3">
              <Code className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#092413]">
              ⚡ Technical Skills
            </h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                💻 Languages
              </label>
              <input
                type="text"
                value={resumeData.technicalSkills.languages.join(", ")}
                onChange={(e) =>
                  updateTechnicalSkills("languages", e.target.value)
                }
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="Java, Python, JavaScript, C++"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                🚀 Frameworks
              </label>
              <input
                type="text"
                value={resumeData.technicalSkills.frameworks.join(", ")}
                onChange={(e) =>
                  updateTechnicalSkills("frameworks", e.target.value)
                }
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="React, Node.js, Flask, Django"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                🛠️ Tools
              </label>
              <input
                type="text"
                value={resumeData.technicalSkills.tools.join(", ")}
                onChange={(e) => updateTechnicalSkills("tools", e.target.value)}
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="Git, Docker, VS Code, AWS"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-green-800 mb-2">
                📚 Libraries
              </label>
              <input
                type="text"
                value={resumeData.technicalSkills.libraries.join(", ")}
                onChange={(e) =>
                  updateTechnicalSkills("libraries", e.target.value)
                }
                className="w-full p-3 border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                placeholder="pandas, NumPy, Matplotlib, TensorFlow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};