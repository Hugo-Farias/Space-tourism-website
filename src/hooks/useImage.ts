import { useState, useEffect } from "react";

const useImage = (
  filePath: string,
  fileName: string,
  fileExt: string,
): string | null => {
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await import(
        `../assets/${filePath}/${fileName}.${fileExt}`
      );
      setPath(response.default);
    };

    fetchImage().then(null);
  }, [filePath, fileName, fileExt]);

  return path;
};

export default useImage;
