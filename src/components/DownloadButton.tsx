'use client';

import {FC, useState} from 'react';
import {Button} from './ui/Button';
import {toast} from '@/components/ui/Toast';

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      // handle download resume here
    } catch (error) {
      toast({
        title: 'Error downloading resume',
        message: 'There was an error downloading. Please try again later.',
        type: 'error',
      });
    }
  };

  return <Button onClick={signInWithGoogle}>My Resume</Button>;
};

export default SignInButton;
