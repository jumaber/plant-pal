import { useState } from "react";

export function ImageUpload({ onUpload }) {
  const [preview, setPreview] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "plantpal_unsigned"); // your preset

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/jumaber/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setPreview(data.secure_url); // ✅ show image
    if (onUpload) onUpload(data.secure_url); // ✅ send to parent
  };

  return (
    <div className="flex flex-col gap-2">
      <input type="file" onChange={handleImageUpload} />
      {preview && <img src={preview} alt="preview" className="w-32 rounded" />}
    </div>
  );
}
