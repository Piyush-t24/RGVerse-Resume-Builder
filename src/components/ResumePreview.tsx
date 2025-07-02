import React from "react";
import { ResumeData } from "../types/Resume";
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Download,
  Image,
  ExternalLink,
} from "lucide-react";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData }) => {
  // Font switcher state
  const fontOptions = [
    { label: "Nunito (Default)", value: "Nunito, sans-serif" },
    { label: "Computer Modern Roman", value: "'Latin Modern Roman', serif" },
    { label: "Roboto", value: "Roboto, sans-serif" },
    { label: "Georgia", value: "Georgia, serif" },
    { label: "Times New Roman", value: "'Times New Roman', Times, serif" },
    { label: "Lato", value: "Lato, sans-serif" },
    { label: "Merriweather", value: "Merriweather, serif" },
    { label: "Montserrat", value: "Montserrat, sans-serif" },
  ];
  const [fontIndex, setFontIndex] = React.useState(0);
  const selectedFont = fontOptions[fontIndex].value;

  const handleChangeFont = () => {
    setFontIndex((prev) => (prev + 1) % fontOptions.length);
  };

  const handleExportPDF = () => {
    window.print();
  };

  const handleExportImage = async () => {
    try {
      // Dynamically import html2canvas
      const html2canvas = await import("html2canvas");

      const resumeElement = document.querySelector(
        ".print-area"
      ) as HTMLElement;
      if (resumeElement) {
        // Create a clone of the element to avoid modifying the original
        const clonedElement = resumeElement.cloneNode(true) as HTMLElement;

        // Create a temporary container
        const tempContainer = document.createElement("div");
        tempContainer.style.position = "absolute";
        tempContainer.style.left = "-9999px";
        tempContainer.style.top = "0";
        tempContainer.style.width = "794px"; // A4 width in pixels at 96 DPI
        tempContainer.style.backgroundColor = "#ffffff";
        tempContainer.style.fontFamily = "Nunito, sans-serif";

        // Fix icon alignment in the cloned element
        const icons = clonedElement.querySelectorAll("svg");
        icons.forEach((icon) => {
          icon.style.verticalAlign = "middle";
          // icon.style.marginTop = "0";
        });

        tempContainer.appendChild(clonedElement);
        document.body.appendChild(tempContainer);

        // Generate canvas
        const canvas = await html2canvas.default(clonedElement, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          width: 794,
          height: 1123, // A4 height in pixels at 96 DPI
          scrollX: 0,
          scrollY: 0,
          windowWidth: 794,
          windowHeight: 1123,
        });

        // Clean up
        document.body.removeChild(tempContainer);

        // Download the image
        const link = document.createElement("a");
        link.download = `resume-${
          resumeData.personalInfo.fullName.replace(/\s+/g, "-").toLowerCase() ||
          "download"
        }.png`;
        link.href = canvas.toDataURL("image/png", 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Error exporting image:", error);
      alert("Error exporting image. Please try the PDF export instead.");
    }
  };

  const formatUrl = (url: string, displayText: string) => {
    if (!url) return displayText;

    const formattedUrl = url.startsWith("http") ? url : `https://${url}`;

    return (
      <a
        href={formattedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black font-bold hover:text-gray-700 no-underline"
      >
        {displayText}
      </a>
    );
  };

  const renderFormattedText = (text: string) => {
    if (!text) return text;

    // Handle markdown-style formatting without link icons
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/__(.*?)__/g, "<u>$1</u>")
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-black font-bold hover:text-gray-700 no-underline">$1</a>'
      );

    return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
  };

  const renderSectionByName = (sectionName: string) => {
    switch (sectionName) {
      case "professionalSummary":
        return (
          resumeData.professionalSummary && (
            <section key="professionalSummary" className="mb-3">
              <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                {renderFormattedText(resumeData.professionalSummary)}
              </p>
            </section>
          )
        );

      case "education":
        return (
          resumeData.education.length > 0 && (
            <section key="education" className="mb-3">
              <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
                Education
              </h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="mb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xs text-gray-900">
                        {edu.schoolUrl
                          ? formatUrl(edu.schoolUrl, edu.school)
                          : edu.school}
                      </h3>
                      <p className="text-xs text-gray-700">
                        {edu.degree}
                        {edu.gpa && `, GPA: ${edu.gpa}`}
                      </p>
                    </div>
                    <div className="text-right text-xs text-gray-600">
                      <p>
                        {edu.startDate} - {edu.endDate}
                      </p>
                      <p>{edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )
        );

      case "experiences":
        return (
          resumeData.experiences.length > 0 && (
            <section key="experiences" className="mb-3">
              <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
                Experience
              </h2>
              {resumeData.experiences.map((exp) => (
                <div key={exp.id} className="mb-2">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-xs text-gray-900 flex items-center gap-1">
                        {exp.companyUrl
                          ? formatUrl(exp.companyUrl, exp.title)
                          : exp.title}
                        {exp.companyUrl && (
                          <a
                            href={
                              exp.companyUrl.startsWith("http")
                                ? exp.companyUrl
                                : `https://${exp.companyUrl}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 inline-flex items-center"
                            title="Company Website"
                          >
                            <ExternalLink
                              className="w-2.5 h-2.5"
                              style={{
                                verticalAlign: "middle",
                                marginTop: "-1px",
                              }}
                            />
                          </a>
                        )}
                      </h3>
                      <p className="text-xs text-gray-700">{exp.company}</p>
                    </div>
                    <div className="text-right text-xs text-gray-600">
                      <p>
                        {exp.startDate} - {exp.endDate}
                      </p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  {exp.description.length > 0 && (
                    <ul className="text-xs text-gray-700 space-y-0.5">
                      {exp.description
                        .filter((desc) => desc.trim())
                        .map((desc, index) => (
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
          )
        );

      case "projects":
        return (
          resumeData.projects.length > 0 && (
            <section key="projects" className="mb-3">
              <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
                Projects
              </h2>
              {resumeData.projects.map((proj) => (
                <div key={proj.id} className="mb-2">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2 flex-1">
                      <h3 className="font-bold text-xs text-gray-900 flex items-center gap-1">
                        {proj.name}
                        {proj.liveUrl && (
                          <a
                            href={
                              proj.liveUrl.startsWith("http")
                                ? proj.liveUrl
                                : `https://${proj.liveUrl}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 inline-flex items-center"
                            title="Live Demo"
                          >
                            <ExternalLink
                              className="w-2.5 h-2.5"
                              style={{
                                verticalAlign: "middle",
                                marginTop: "-1px",
                              }}
                            />
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={
                              proj.githubUrl.startsWith("http")
                                ? proj.githubUrl
                                : `https://${proj.githubUrl}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-800 inline-flex items-center"
                            title="GitHub Repository"
                          >
                            <Github
                              className="w-2.5 h-2.5"
                              style={{
                                verticalAlign: "middle",
                                marginTop: "-1px",
                              }}
                            />
                          </a>
                        )}
                      </h3>
                      <span className="text-xs text-gray-700 italic">
                        {proj.technologies}
                      </span>
                    </div>
                    <div className="text-right text-xs text-gray-600">
                      <p>
                        {proj.startDate} - {proj.endDate}
                      </p>
                    </div>
                  </div>
                  {proj.description.length > 0 && (
                    <ul className="text-xs text-gray-700 space-y-0.5">
                      {proj.description
                        .filter((desc) => desc.trim())
                        .map((desc, index) => (
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
          )
        );

      case "certifications":
        return (
          resumeData.certifications.length > 0 && (
            <section key="certifications" className="mb-3">
              <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
                Certifications
              </h2>
              {resumeData.certifications.map((cert) => (
                <div key={cert.id} className="mb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xs text-gray-900">
                        {cert.credentialUrl
                          ? formatUrl(cert.credentialUrl, cert.name)
                          : cert.name}
                      </h3>
                    </div>
                    {/* <div className="text-right text-xs text-gray-600">
                      <p>{cert.date}</p>
                    </div> */}
                  </div>
                </div>
              ))}
            </section>
          )
        );

      case "extraCurricular":
        return (
          resumeData.extraCurricular.length > 0 && (
            <section key="extraCurricular" className="mb-3">
              <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
                Extra Curricular
              </h2>
              {resumeData.extraCurricular.map((activity) => (
                <div key={activity.id} className="mb-2">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-xs text-gray-900">
                        {activity.role} - {activity.activity}
                      </h3>
                      <p className="text-xs text-gray-700">
                        {activity.organizationUrl
                          ? formatUrl(
                              activity.organizationUrl,
                              activity.organization
                            )
                          : activity.organization}
                      </p>
                    </div>
                    <div className="text-right text-xs text-gray-600">
                      <p>
                        {activity.startDate} - {activity.endDate}
                      </p>
                    </div>
                  </div>
                  {activity.description.length > 0 && (
                    <ul className="text-xs text-gray-700 space-y-0.5">
                      {activity.description
                        .filter((desc) => desc.trim())
                        .map((desc, index) => (
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
          )
        );

      case "awards":
        return (
          resumeData.awards.length > 0 && (
            <section key="awards" className="mb-3">
              <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
                Awards
              </h2>
              {resumeData.awards.map((award) => (
                <div key={award.id} className="mb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xs text-gray-900">
                        {award.title}
                      </h3>
                      <p className="text-xs text-gray-700">
                        {award.issuerUrl
                          ? formatUrl(award.issuerUrl, award.issuer)
                          : award.issuer}
                      </p>
                      {award.description && (
                        <p className="text-xs text-gray-600">
                          {renderFormattedText(award.description)}
                        </p>
                      )}
                    </div>
                    <div className="text-right text-xs text-gray-600">
                      <p>{award.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )
        );

      case "achievements":
        return (
          resumeData.achievements.length > 0 && (
            <section key="achievements" className="mb-3">
              <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
                Achievements
              </h2>
              {resumeData.achievements.map((achievement) => (
                <div key={achievement.id} className="mb-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xs text-gray-900">
                        {achievement.url
                          ? formatUrl(achievement.url, achievement.title)
                          : achievement.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {renderFormattedText(achievement.description)}
                      </p>
                    </div>
                    <div className="text-right text-xs text-gray-600">
                      <p>{achievement.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )
        );

      case "technicalSkills":
        return (
          (resumeData.technicalSkills.languages.length > 0 ||
            resumeData.technicalSkills.frameworks.length > 0 ||
            resumeData.technicalSkills.tools.length > 0 ||
            resumeData.technicalSkills.libraries.length > 0) && (
            <section key="technicalSkills" className="mb-3">
              <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
                Technical Skills
              </h2>
              <div className="text-xs text-gray-700 space-y-1">
                {resumeData.technicalSkills.languages.length > 0 && (
                  <div>
                    <span className="font-bold">Languages:</span>{" "}
                    {resumeData.technicalSkills.languages.join(", ")}
                  </div>
                )}
                {resumeData.technicalSkills.frameworks.length > 0 && (
                  <div>
                    <span className="font-bold">Frameworks:</span>{" "}
                    {resumeData.technicalSkills.frameworks.join(", ")}
                  </div>
                )}
                {resumeData.technicalSkills.tools.length > 0 && (
                  <div>
                    <span className="font-bold">Developer Tools:</span>{" "}
                    {resumeData.technicalSkills.tools.join(", ")}
                  </div>
                )}
                {resumeData.technicalSkills.libraries.length > 0 && (
                  <div>
                    <span className="font-bold">Libraries:</span>{" "}
                    {resumeData.technicalSkills.libraries.join(", ")}
                  </div>
                )}
              </div>
            </section>
          )
        );

      // case "languageProficiency":
      //   return (
      //     resumeData.languageProficiency.length > 0 && (
      //       <section key="languageProficiency" className="mb-2">
      //         <h2 className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide border-b border-gray-300 pb-1">
      //           Language Proficiency
      //         </h2>
      //         <div className="text-xs text-gray-700">
      //           {resumeData.languageProficiency.map((lang, index) => (
      //             <span key={index}>
      //               {lang.language} {"★".repeat(lang.proficiency)}
      //               {"☆".repeat(5 - lang.proficiency)}
      //               {index < resumeData.languageProficiency.length - 1
      //                 ? ", "
      //                 : ""}
      //             </span>
      //           ))}
      //         </div>
      //       </section>
      //     )
      //   );

      default:
        return null;
    }
  };

  return (
    <div className="h-full bg-white" style={{ fontFamily: selectedFont }}>
      {/* Export Buttons and Font Switcher */}
      <div className="flex justify-center gap-4 p-4 bg-green-50 border-b print:hidden items-center">
        <button
          onClick={handleExportPDF}
          className="flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-sm lg:text-base"
        >
          <Download className="w-4 h-4 mr-2" />
          📄 Export PDF
        </button>
        <button
          onClick={handleExportImage}
          className="flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-[#092413] text-white rounded-full hover:bg-green-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-sm lg:text-base"
        >
          <Image className="w-4 h-4 mr-2" />
          🖼️ Export Image
        </button>
        {/* Change Font Button */}
        <button
          onClick={handleChangeFont}
          className="flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-sm lg:text-base"
          title="Change Font"
        >
          Change Font
        </button>
      </div>

      {/* Resume Content - Optimized for single page */}
      <div className="p-4 max-w-4xl mx-auto bg-white print:p-2 print:max-w-none print-area text-xs leading-tight">
        {/* Header - Compact */}
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {resumeData.personalInfo.fullName || "Your Name"}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-gray-600">
            {resumeData.personalInfo.phone && (
              <div className="flex items-center">
                <Phone
                  className="w-3 h-3 mr-1"
                  style={{ verticalAlign: "middle", marginTop: "-1px" }}
                />
                {resumeData.personalInfo.phone}
              </div>
            )}
            {resumeData.personalInfo.email && (
              <div className="flex items-center">
                <Mail
                  className="w-3 h-3 mr-1"
                  style={{ verticalAlign: "middle", marginTop: "-1px" }}
                />
                {resumeData.personalInfo.email}
              </div>
            )}
            {resumeData.personalInfo.linkedin && (
              <div className="flex items-center">
                <Linkedin
                  className="w-3 h-3 mr-1"
                  style={{ verticalAlign: "middle", marginTop: "-1px" }}
                />
                {formatUrl(resumeData.personalInfo.linkedin, "LinkedIn")}
              </div>
            )}
            {resumeData.personalInfo.github && (
              <div className="flex items-center">
                <Github
                  className="w-3 h-3 mr-1"
                  style={{ verticalAlign: "middle", marginTop: "-1px" }}
                />
                {formatUrl(resumeData.personalInfo.github, "GitHub")}
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-center">
                <MapPin
                  className="w-3 h-3 mr-1"
                  style={{ verticalAlign: "middle", marginTop: "-1px" }}
                />
                {resumeData.personalInfo.location}
              </div>
            )}
          </div>
        </div>

        {/* Render sections in the order specified by sectionOrder */}
        {resumeData.sectionOrder.map((sectionName) =>
          renderSectionByName(sectionName)
        )}
      </div>
    </div>
  );
};
