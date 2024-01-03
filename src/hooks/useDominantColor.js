
import { useEffect, useState } from "react";

function useDominantColor(imageUrl) {
  const [dominantColor, setDominantColor] = useState(null);
  const [darkerColor, setDarkerColor] = useState(null);
  const [lighterColor, setLighterColor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchDominantColor() {
      try {
        const colors = await extractDominantColors(imageUrl);
        if (isMounted) {
          setDominantColor(colors.dominantColor);
          setDarkerColor(colors.darkerColor);
          setLighterColor((colors.lighterColor));
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    }

    fetchDominantColor();

    return () => {
      isMounted = false;
    };
  }, [imageUrl]);

  return { dominantColor, darkerColor, lighterColor, loading, error };
}

async function extractDominantColors(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const pixels = imageData.data;

      const colorMap = {};
      

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];

        // Excluir píxeles transparentes con bajo nivel de alfa (transparencia)
        if (a >= 125) {
          const color = `rgba(${r},${g},${b},${a})`;
          if (!colorMap[color]) {
            colorMap[color] = 0;
          }
          colorMap[color]++;
        }
      }


      const colors = Object.keys(colorMap).sort((a, b) => colorMap[b] - colorMap[a]);

      let dominantColor = null;
      let darkerColor = null;
      let lighterColor = null;

      if (colors.length > 0) {
        dominantColor = colors[0];
        darkerColor = getDarkerColor(dominantColor);
        lighterColor = getLighterColor(dominantColor);
      }

      resolve({ dominantColor: rgbToHex(dominantColor), darkerColor: rgbToHex(darkerColor), lighterColor: rgbToHex(lighterColor) });
    };

    img.onerror = function(error) {
      reject(error);
    };

    img.src = imageUrl;
  });
}

function getDarkerColor(color) {
  const rgb = color.match(/\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)/);
  if (!rgb) return null;

  const r = parseInt(rgb[1]);
  const g = parseInt(rgb[2]);
  const b = parseInt(rgb[3]);

  const darkerRed = Math.max(0, r - 50);
  const darkerGreen = Math.max(0, g - 50);
  const darkerBlue = Math.max(0, b - 50);

  return `rgb(${darkerRed},${darkerGreen},${darkerBlue})`;
}


function getLighterColor(color) {
  const rgb = color.match(/\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)/);
  if (!rgb) return null;

  const r = parseInt(rgb[1]);
  const g = parseInt(rgb[2]);
  const b = parseInt(rgb[3]);

  const lighterRed = Math.min(255, r + 30);
  const lighterGreen = Math.min(255, g + 30);
  const lighterBlue = Math.min(255, b + 30);

  return `rgb(${lighterRed},${lighterGreen},${lighterBlue})`;
}


function rgbToHex(rgb) {
  const rgbaRegex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)/;
  const match = rgb.match(rgbaRegex);
  if (!match) return null;

  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}


export default useDominantColor;