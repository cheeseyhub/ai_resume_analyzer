import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

interface FileUploaderProps {
  onFileSelect: (file: File | null) => void;
}

export default function FileUploader({ onFileSelect }: FileUploaderProps) {
  const [file, setFile] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Something is happening ");
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="w-full flex justify-center">
      <input {...getInputProps()} />
      <div className="space-y-4 cursor-pointer">
        <div className="mx-auto w-16 h-16 flex items-center justifiy-content">
          <img src="/icons/info.svg" alt="upload" className="size-20" />
        </div>

        {file ? (
          <div></div>
        ) : (
          <div>
            <p className="text-lg text-gray-500  flex flex-col items-center">
              Drag and drop your file here
              <span className="font-semibold">or click to select</span>
            </p>
            <p className="text-lg text-gray-50">PDF (max 20 MB)</p>
          </div>
        )}
      </div>
    </div>
  );
}
