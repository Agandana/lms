import React, { useRef } from 'react';
import certificateImage from './Certificate.jpg';

const ImageEditor = () => {
  const canvasRef = useRef(null);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const imgData = canvas.toDataURL('image/png');

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = imgData;
    downloadLink.download = 'modified_image.png';
    downloadLink.click();
  };

  const drawImageWithText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = certificateImage; // Replace with your image URL
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the original image
      ctx.drawImage(image, 0, 0);

      // Add text to the image (centered horizontally and vertically)
      const text = 'Agandanas';
      ctx.font = '30px Arial';
      ctx.fillStyle = 'black';

      // Calculate text width and height
      const textWidth = ctx.measureText(text).width;

      // Calculate center position
      const centerX = (canvas.width - textWidth) / 2;

      // Draw text at the center
      ctx.fillText(text, centerX, 280);

      ctx.font = '20px Arial';
      ctx.fillText('08-11-2023', 180, 410);

      
      ctx.font = '30px Helvetica';
      ctx.fillText('A64N', 495, 410);
    };
  };

  return (
    <div>
      <canvas ref={canvasRef} />
      <button type="button" onClick={drawImageWithText}>
        Modify Image
      </button>
      <button type="button" onClick={handleDownload}>
        Download Image
      </button>
    </div>
  );
};

export default ImageEditor;
