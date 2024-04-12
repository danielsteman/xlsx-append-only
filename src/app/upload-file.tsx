"use client";

import { useS3Upload } from "next-s3-upload";
import { useState } from "react";
import Image from "next/image";

export function UploadFile() {
  let [imageUrl, setImageUrl] = useState<string>();
  let { uploadToS3, FileInput, openFileDialog } = useS3Upload();

  let handleFileChange = async (file: File) => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);
  };

  return (
    <div className="flex flex-col h-screen p-6">
      <FileInput
        onChange={handleFileChange}
        data-test="file-input"
        className="block"
      />
      <button onClick={openFileDialog}>Select file</button>
      <div className="flex flex-1 overflow-hidden">
        {imageUrl && (
          <Image
            alt="file"
            className="object-contain"
            src={imageUrl}
            data-test="image"
          />
        )}
      </div>
    </div>
  );
}
