import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface RichTextEditorProps {
  onChange: (content: string) => void;
  key: string; // Add a key prop
  error?: string; // Add an error prop
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  onChange,
  key,
  error,
}) => {
  const [code, setCode] = useState("");

  const handleProcedureContentChange = (content: string) => {
    setCode(content);
    onChange(content);
  };

  useEffect(() => {
    setCode(""); // Reset the code state when the key prop changes
  }, [key]);

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={code}
        onChange={handleProcedureContentChange}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default RichTextEditor;