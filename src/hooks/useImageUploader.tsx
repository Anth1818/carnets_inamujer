import { useState, useEffect } from 'react';

function useImageUploader() {
  const [imagePreviews, setImagePreviews] = useState<{ [key: string]: string }>({});
  const [photoIds, setPhotoIds] = useState<string[]>([]);

  const handleImageSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    const photos = files.filter((file) => file.type.includes("image"));

    const previews = photos.reduce((acc, photo) => {
      const id = photo.name.split(".")[0];
      acc[id] = URL.createObjectURL(photo);
      return acc;
    }, {} as { [key: string]: string });

    setImagePreviews(previews);
    setPhotoIds(Object.keys(previews));

    // Opcional: Guardar los IDs en localStorage
    localStorage.setItem("photoIds", JSON.stringify(Object.keys(previews)));
  };

  // Limpiar URLs temporales al desmontar o actualizar las imágenes
  useEffect(() => {
    return () => {
      Object.values(imagePreviews).forEach((src) => URL.revokeObjectURL(src));
    };
  }, [imagePreviews]);

  return {
    imagePreviews,
    photoIds,
    handleImageSelection,
  };
}

export default useImageUploader;
