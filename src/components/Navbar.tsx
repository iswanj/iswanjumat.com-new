import Link from 'next/link';
import Image from 'next/image';
import DownloadButton from '@/components/DownloadButton';

import {buttonVariants} from '@/components/ui/Button';
import ThemeToggle from '@/components/ThemeToggle';

const Navbar = async () => {
  return (
    <div className="fixed backdrop-blur-sm bg-slate-100 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-28 flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={buttonVariants({variant: 'link'})}>
          <Image
            className="image-light dark:image-dark"
            src="/assets/logo.svg"
            alt="iswanjumat.com"
            width={50}
            height={50}
          />
        </Link>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link href="https://blog.iswanjumat.com/" target="_blank" className={buttonVariants({ variant: "ghost" })}>
            Blog
          </Link>
          <DownloadButton label="My Resume" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
