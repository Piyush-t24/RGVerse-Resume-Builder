import React from 'react';
import { ResumeData } from '../types/Resume';
import { Phone, Mail, Linkedin, Github, MapPin, Download, Image, ExternalLink } from 'lucide-react';

interface ResumePreviewProps {
  resumeData: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData }) => {
  const handleExportPDF = () => {
    window.print();
  };

  const handleExportImage = () => {
    alert('Image export functionality would be implemented here');
  };

  const formatUrl = (url: string, displayText: string) => {
    if (!url) return displayText;
    
    const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
    
    return (
      <a 
        href={formattedUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-black font-bold hover:text-gray-700 no-underline"
      >
        {displayText}
        <ExternalLink className="w-3 h-3 inline ml-1" />
      </a>
    );
  };

  const extractDisplayName = (url: string, platform: string) => {
    if (!url) return platform;
    return platform;
  };

  const renderFormattedText = (text: string) => {
    if (!text) return text;
    
    // Handle markdown-style formatting
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/__(.*?)__/g, '<u>$1</u>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-black font-bold hover:text-gray-700 no-underline">$1<span class="inline-block w-3 h-3 ml-1">🔗</span></a>');
    
    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  return (
    <div className="h-full bg-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
      {/* Export Buttons */}
      <div className="flex justify-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-b print:hidden">
        <button
          onClick={handleExportPDF}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-full hover:from-red-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold"
        >
          <Download className="w-4 h-4 mr-2" />
          📄 Export PDF
        </button>
        <button
          onClick={handleExportImage}
          className="flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-full hover:from-green-500 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold"
        >
          <Image className="w-4 h-4 mr-2" />
          🖼️ Export Image
        </button>
      </div>

      {/* Resume Content - Optimized for single page */}
      <div className="p-4 max-w-4xl mx-auto bg-white print:p-2 print:max-w-none print-area text-xs leading-tight">
        {/* Header - Compact */}
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {resumeData.personalInfo.fullName || 'Your Name'}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-gray-600">
            {resumeData.personalInfo.phone && (
              <div className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                {resumeData.personalInfo.phone}
              </div>
            )}
            {resumeData.personalInfo.email && (
              <div className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                {resumeData.personalInfo.email}
              </div>
            )}
            {resumeData.personalInfo.linkedin && (
              <div className="flex items-center">
                <Linkedin className="w-3 h-3 mr-1" />
                {formatUrl(resumeData.personalInfo.linkedin, 'LinkedIn')}
              </div>
            )}
            {resumeData.personalInfo.github && (
              <div className="flex items-center">
                <Github className="w-3 h-3 mr-1" />
                {formatUrl(resumeData.personalInfo.github, 'GitHub')}
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1" />
                {resumeData.personalInfo.location}
              </div>
            )}
          </div>
        </div>

        {/* Professional Summary - Compact */}
        {resumeData.professionalSummary && (
          <section className="mb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              {renderFormattedText(resumeData.professionalSummary)}
            </p>
          </section>
        )}

        {/* Education - Compact */}
        {resumeData.education.length > 0 && (
          <section className="mb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Education
            </h2>
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xs text-gray-900">
                      {edu.schoolUrl ? formatUrl(edu.schoolUrl, edu.school) : edu.school}
                    </h3>
                    <p className="text-xs text-gray-700">
                      {edu.degree}
                      {edu.gpa && `, GPA: ${edu.gpa}`}
                    </p>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>{edu.startDate} - {edu.endDate}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Experience - Compact */}
        {resumeData.experiences.length > 0 && (
          <section className="mb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Experience
            </h2>
            {resumeData.experiences.map((exp) => (
              <div key={exp.id} className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-xs text-gray-900">{exp.title}</h3>
                    <p className="text-xs text-gray-700">
                      {exp.companyUrl ? formatUrl(exp.companyUrl, exp.company) : exp.company}
                    </p>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                {exp.description.length > 0 && (
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    {exp.description.filter(desc => desc.trim()).map((desc, index) => (
                      <li key={index} className="flex">
                        <span className="mr-1">•</span>
                        <span>{renderFormattedText(desc)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Projects - Compact */}
        {resumeData.projects.length > 0 && (
          <section className="mb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Projects
            </h2>
            {resumeData.projects.map((proj) => (
              <div key={proj.id} className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-bold text-xs text-gray-900">{proj.name}</h3>
                      {proj.liveUrl && (
                        <a 
                          href={proj.liveUrl.startsWith('http') ? proj.liveUrl : `https://${proj.liveUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-gray-700"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a 
                          href={proj.githubUrl.startsWith('http') ? proj.githubUrl : `https://${proj.githubUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800"
                          title="GitHub Repository"
                        >
                          <Github className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-gray-700 italic">{proj.technologies}</p>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>{proj.startDate} - {proj.endDate}</p>
                  </div>
                </div>
                {proj.description.length > 0 && (
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    {proj.description.filter(desc => desc.trim()).map((desc, index) => (
                      <li key={index} className="flex">
                        <span className="mr-1">•</span>
                        <span>{renderFormattedText(desc)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Certifications - Compact */}
        {resumeData.certifications.length > 0 && (
          <section className="mb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Certifications
            </h2>
            {resumeData.certifications.map((cert) => (
              <div key={cert.id} className="mb-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xs text-gray-900">
                      {cert.credentialUrl ? formatUrl(cert.credentialUrl, cert.name) : cert.name}
                    </h3>
                    <p className="text-xs text-gray-700">
                      {cert.issuerUrl ? formatUrl(cert.issuerUrl, cert.issuer) : cert.issuer}
                    </p>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Extra Curricular - Compact */}
        {resumeData.extraCurricular.length > 0 && (
          <section className="mb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Extra Curricular
            </h2>
            {resumeData.extraCurricular.map((activity) => (
              <div key={activity.id} className="mb-2">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-xs text-gray-900">{activity.role} - {activity.activity}</h3>
                    <p className="text-xs text-gray-700">
                      {activity.organizationUrl ? formatUrl(activity.organizationUrl, activity.organization) : activity.organization}
                    </p>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>{activity.startDate} - {activity.endDate}</p>
                  </div>
                </div>
                {activity.description.length > 0 && (
                  <ul className="text-xs text-gray-700 space-y-0.5">
                    {activity.description.filter(desc => desc.trim()).map((desc, index) => (
                      <li key={index} className="flex">
                        <span className="mr-1">•</span>
                        <span>{renderFormattedText(desc)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Awards - Compact */}
        {resumeData.awards.length > 0 && (
          <section className="mb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Awards
            </h2>
            {resumeData.awards.map((award) => (
              <div key={award.id} className="mb-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xs text-gray-900">{award.title}</h3>
                    <p className="text-xs text-gray-700">
                      {award.issuerUrl ? formatUrl(award.issuerUrl, award.issuer) : award.issuer}
                    </p>
                    {award.description && (
                      <p className="text-xs text-gray-600">{renderFormattedText(award.description)}</p>
                    )}
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>{award.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Achievements - Compact */}
        {resumeData.achievements.length > 0 && (
          <section className="mb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Achievements
            </h2>
            {resumeData.achievements.map((achievement) => (
              <div key={achievement.id} className="mb-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xs text-gray-900">
                      {achievement.url ? formatUrl(achievement.url, achievement.title) : achievement.title}
                    </h3>
                    <p className="text-xs text-gray-600">{renderFormattedText(achievement.description)}</p>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    <p>{achievement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Technical Skills - Compact */}
        {(resumeData.technicalSkills.languages.length > 0 ||
          resumeData.technicalSkills.frameworks.length > 0 ||
          resumeData.technicalSkills.tools.length > 0 ||
          resumeData.technicalSkills.libraries.length > 0) && (
          <section className="mb-3">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Technical Skills
            </h2>
            <div className="text-xs text-gray-700 space-y-1">
              {resumeData.technicalSkills.languages.length > 0 && (
                <div>
                  <span className="font-bold">Languages:</span>{' '}
                  {resumeData.technicalSkills.languages.join(', ')}
                </div>
              )}
              {resumeData.technicalSkills.frameworks.length > 0 && (
                <div>
                  <span className="font-bold">Frameworks:</span>{' '}
                  {resumeData.technicalSkills.frameworks.join(', ')}
                </div>
              )}
              {resumeData.technicalSkills.tools.length > 0 && (
                <div>
                  <span className="font-bold">Developer Tools:</span>{' '}
                  {resumeData.technicalSkills.tools.join(', ')}
                </div>
              )}
              {resumeData.technicalSkills.libraries.length > 0 && (
                <div>
                  <span className="font-bold">Libraries:</span>{' '}
                  {resumeData.technicalSkills.libraries.join(', ')}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Language Proficiency - Compact */}
        {resumeData.languageProficiency.length > 0 && (
          <section className="mb-2">
            <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
              Language Proficiency
            </h2>
            <div className="text-xs text-gray-700">
              {resumeData.languageProficiency.map((lang, index) => (
                <span key={index}>
                  {lang.language}{' '}
                  {'★'.repeat(lang.proficiency)}{'☆'.repeat(5 - lang.proficiency)}
                  {index < resumeData.languageProficiency.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};