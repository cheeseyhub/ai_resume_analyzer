import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

interface FileUploaderProps {
  onFileSelect: (file: File | null) => void;
}

export default function FileUploader({ onFileSelect }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const doc = acceptedFiles[0] || null;
      onFileSelect?.(doc);
      setFile(doc);
    },
    [onFileSelect],
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: { "application/pdf": [".pdf"] },
      maxSize: 20 * 1024 * 1024,
    });

  return (
    <div {...getRootProps()} className="w-full flex justify-center">
      <input {...getInputProps()} />
      <div className="space-y-4 cursor-pointer">
        {file ? (
          <div className="flex w-full flex-row text-gray-500 items-center ">
            <img src="/images/pdf.png" alt="pdf" className="size-10" />
            <p className="text-lg text-gray-500">{file.name}</p>
          </div>
        ) : (
          <div>
            <div className="mx-auto w-16 h-16 flex items-center justifiy-content">
              <img src="/icons/info.svg" alt="upload" className="size-20" />
            </div>
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
