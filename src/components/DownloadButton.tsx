'use client';

import {FC, useState} from 'react';
import {Button} from './ui/Button';

interface DownloadButtonProps {
  label: string;
}

const DownloadButton: FC<DownloadButtonProps> = ({label}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const downloadMyResume = () => {};

  return <Button onClick={downloadMyResume}>{label}</Button>;
};

export default DownloadButton;
