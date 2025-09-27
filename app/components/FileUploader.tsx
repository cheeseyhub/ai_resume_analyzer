import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUploader() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Something is happening ")
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
