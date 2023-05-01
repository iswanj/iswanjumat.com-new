'use client';

import {FC, useState} from 'react';
import {Button} from './ui/Button';

interface DownloadButtonProps {
  label: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({label}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const downloadMyResume = () => {
    fetch('/Resume_Iswan.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Resume_Iswan.pdf'; // Change this to the name you want the file to be downloaded as
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(error => {
        console.error('Error downloading PDF file:', error);
      });
  };

  return <Button onClick={downloadMyResume}>{label}</Button>;
};

export default DownloadButton;
