"use client";

import { Settings } from "lucide-react";
import { Heading } from "@/components/heading";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import React, { useState } from 'react';

// Initialize once (at the start of your app).
const uploader = Uploader({ apiKey: "public_kW15bfN9x77hykZaRfG2dDUKx5u5" }); // Your real API key.
const uploaderOptions = {
    multi: true,
    images: {
        crop: false,
        preview: true,
    },

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
    return (
        <div>
            <Heading
                title="Create Model"
                description="Upload Photos to train a new model"
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">

                <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
                    <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                        1
                    </span>
                                    <span>
                        <h3 className="font-medium leading-tight">User info</h3>
                        <p className="text-sm">Step details here</p>
                    </span>
                                </li>
                                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        2
                    </span>
                                    <span>
                        <h3 className="font-medium leading-tight">Company info</h3>
                        <p className="text-sm">Step details here</p>
                    </span>
                                </li>
                                <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                    <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                        3
                    </span>
                                    <span>
                        <h3 className="font-medium leading-tight">Payment info</h3>
                        <p className="text-sm">Step details here</p>
                    </span>
                    </li>
                </ol>


                <UploadDropzone uploader={uploader}
                                options={uploaderOptions}
                                onUpdate={files => console.log(files.map(x => x.fileUrl).join("\n"))}
                                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                                width="100%"
                                height="375px" />
            </div>
        </div>
    );
}

export default UploadPage;

