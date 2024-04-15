"use client";

import { useS3Upload } from "next-s3-upload";
import { useState } from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";

export function UploadFile() {
  let [fileUrl, setFileUrl] = useState<string>();
  let { uploadToS3, FileInput, openFileDialog } = useS3Upload();

  let handleFileChange = async (file: File) => {
    console.log(file);
    let { url } = await uploadToS3(file);
    setFileUrl(url);
  };

  return (
    <Flex direction="column">
      <FileInput
        onChange={handleFileChange}
        data-test="file-input"
        className="block"
      />
      <button onClick={openFileDialog}>Select file</button>
    </Flex>
  );
}
