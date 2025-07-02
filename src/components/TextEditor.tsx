import React, { useState, useRef } from "react";
import { Bold, Italic, Underline, Link } from "lucide-react";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const TextEditor: React.FC<TextEditorProps> = ({
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [linkText, setLinkText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const applyFormat = (format: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);

    let formattedText = "";
    switch (format) {
      case "bold":
        formattedText = `**${selectedText}**`;
        break;
      case "italic":
        formattedText = `*${selectedText}*`;
        break;
      case "underline":
        formattedText = `__${selectedText}__`;
        break;
    }

    const newValue =
      value.substring(0, start) + formattedText + value.substring(end);
    onChange(newValue);

    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + formattedText.length,
        start + formattedText.length
      );
    }, 0);
  };

  const addLink = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);

    setLinkText(selectedText || "");
    setLinkUrl("");
    setShowLinkDialog(true);
  };

  const insertLink = () => {
    const textarea = textareaRef.current;
    if (!textarea || !linkText || !linkUrl) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const linkMarkdown = `[${linkText}](${linkUrl})`;

    const newValue =
      value.substring(0, start) + linkMarkdown + value.substring(end);
    onChange(newValue);

    setShowLinkDialog(false);
    setLinkText("");
    setLinkUrl("");

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + linkMarkdown.length,
        start + linkMarkdown.length
      );
    }, 0);
  };

  return (
    <div className="relative">
      <div className="flex gap-2 mb-2">
        <button
          type="button"
          onClick={() => applyFormat("bold")}
          className="p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
          title="Bold"
        >
          <Bold className="w-4 h-4 text-purple-600" />
        </button>
        <button
          type="button"
          onClick={() => applyFormat("italic")}
          className="p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
          title="Italic"
        >
          <Italic className="w-4 h-4 text-purple-600" />
        </button>
        <button
          type="button"
          onClick={() => applyFormat("underline")}
          className="p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
          title="Underline"
        >
          <Underline className="w-4 h-4 text-purple-600" />
        </button>
        <button
          type="button"
          onClick={addLink}
          className="p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
          title="Add Link"
        >
          <Link className="w-4 h-4 text-purple-600" />
        </button>
      </div>

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors resize-none ${className}`}
      />

      {showLinkDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Add Link</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Link Text
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  placeholder="Enter link text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL
                </label>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  placeholder="https://example.com"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={insertLink}
                className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors"
              >
                Add Link
              </button>
              <button
                onClick={() => setShowLinkDialog(false)}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
