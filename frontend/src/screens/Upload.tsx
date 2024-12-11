import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion, AnimatePresence } from "framer-motion";
import { Dropzone } from "../components/upload/DropZone";
import { UrlInput } from "../components/upload/URLInput";
import { UploadToggle } from "../components/upload/UploadToggle";
import { Button } from "../components/ui/Button";
import { Download, Share2 } from "lucide-react";

export function UploadPage() {
  const [uploadMode, setUploadMode] = useState<"image" | "url">("image");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setQrCodeUrl(url);
  };

  const handleUrlSubmit = (url: string) => {
    setPreviewUrl(url);
    setQrCodeUrl(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Upload Image & Generate QR Code
          </h1>

          <div className="mb-8">
            <UploadToggle mode={uploadMode} onModeChange={setUploadMode} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {uploadMode === "image" ? (
                  <motion.div
                    key="dropzone"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <Dropzone onFileSelect={handleFileSelect} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="url-input"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <UrlInput onUrlSubmit={handleUrlSubmit} />
                  </motion.div>
                )}
              </AnimatePresence>

              {previewUrl && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700"
                >
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </div>

            <div className="space-y-6">
              {qrCodeUrl && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm space-y-4"
                >
                  <div className="flex justify-center">
                    <QRCodeCanvas
                      value={qrCodeUrl}
                      size={200}
                      level="H"
                      includeMargin
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      Download QR
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </motion.div>
              )}

              {!qrCodeUrl && (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    {uploadMode === "image"
                      ? "Upload an image to generate its QR code"
                      : "Enter an image URL to generate its QR code"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
