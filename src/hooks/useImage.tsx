import { useState, useEffect } from "react";

interface ReturnT {
  loading: boolean;
  error: Error | null;
  path: string | null;
}

const useImage = (
  filePath: string,
  fileName: string,
  fileExt: string,
): ReturnT => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../assets/${filePath}/${fileName}.${fileExt}`
        );
        setPath(response.default);
      } catch (err) {
        const error = err as Error;
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage().then(null);
  }, [filePath, fileExt, fileName]);

  return { loading, error, path };
};

export default useImage;
