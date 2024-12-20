import React, { useEffect, useState } from "react";

function Apifetch(url, page = 1, limit = 5) {
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSlide, useCurrentSlide] = useState(0);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data please wait</div>;
  }
  if (error !== null) {
    return <div>Error occurred!{error}</div>;
  }
  return <>Images</>;
}

export default Apifetch;
