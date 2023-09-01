"use client";

import { Settings } from "lucide-react";
import { Heading } from "@/components/heading";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import { checkSubscription } from "@/lib/subscription";
import React, { useState } from 'react';

// Initialize once (at the start of your app).
const uploader = Uploader({ apiKey: "public_kW15bfN9x77hykZaRfG2dDUKx5u5" }); // Your real API key.
const uploaderOptions = {
  multi: true,

  // Comment out this line & use 'onUpdate' instead of
  // 'onComplete' to have the dropzone close after upload.
  showFinishButton: true,

  styles: {
    colors: {
      primary: "#377dff"
    }
  }
}

const UploadPage = async () => {
//   const isPro = await checkSubscription();
//   const [files, setFiles] = useState([])
  return ( 
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
        </div>
        <UploadDropzone uploader={uploader}
                  options={uploaderOptions}
                  onUpdate={files => console.log(files.map(x => x.fileUrl).join("\n"))}
                  onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                  width="600px"
                  height="375px" />
      </div>
    </div>
   );
}
 
export default UploadPage;

