import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUploader({ onImageSelect }) {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setPreview(URL.createObjectURL(file));
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div className="mb-6">
      <div
        {...getRootProps()}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-green-500/40 bg-white/5 p-8 text-center transition hover:border-green-400"
      >
        <input {...getInputProps()} />

        {isDragActive ? (
          <p className="text-green-400">Drop the crop image here...</p>
        ) : (
          <>
            <p className="text-lg font-semibold">
              📷 Upload Crop Image
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Drag & drop or click to select a leaf image.
            </p>
          </>
        )}
      </div>

      {preview && (
        <div className="mt-4 flex justify-center">
          <img
            src={preview}
            alt="Preview"
            className="max-h-72 rounded-2xl border border-white/10"
          />
        </div>
      )}
    </div>
  );
}