import Image from 'next/image';
import {Inter} from 'next/font/google';
import styles from './page.module.css';
import Paragraph from '@/components/ui/Paragraph';
import LargeHeading from '@/components/ui/LargeHeading';
import {Icons} from '@/components/Icons';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <div className="realative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full flex justify-between flex-col">
        <div className="gap-6 pt-10 flex flex-col justify-start lg:justify-start items-center lg:items-center">
          <div className="header-highlighter flex justify-center items-center rounded-xl px-6 py-5 pb-3">
            <LargeHeading
              size="lg"
              className="three-d text-slate-900 dark:text-slate-100">
              Hey, I&apos;m Iswan
            </LargeHeading>
          </div>
          <LargeHeading
            size="md"
            className="three-d text-slate-900 dark:text-slate-300 pt-2">
            a Frontend Engineer
          </LargeHeading>
          <Paragraph
            size="lg"
            className="text-center w-3/4 text-slate-900 dark:text-slate-300 pt-2">
            with a passion for creating scalable and efficient web applications
            using the latest technologies and best practices, with a focus on
            architecture and performance optimization.
          </Paragraph>
        </div>
        <div className="flex items-center justify-center gap-5 pb-20">
          <Icons.Github
            size={32}
            className="hover:text-my-yellow text-slate-900 dark:text-slate-300 dark:hover:text-my-yellow"
          />
          <Icons.Linkedin
            size={32}
            className="hover:text-my-yellow text-slate-900 dark:text-slate-300 dark:hover:text-my-yellow"
          />
          <Icons.Instagram
            size={32}
            className="hover:text-my-yellow text-slate-900 dark:text-slate-300 dark:hover:text-my-yellow"
          />
          <Icons.Twitter
            size={32}
            className="hover:text-my-yellow text-slate-900 dark:text-slate-300 dark:hover:text-my-yellow"
          />
          <Icons.Facebook
            size={32}
            className="hover:text-my-yellow text-slate-900 dark:text-slate-300 dark:hover:text-my-yellow"
          />
        </div>
      </div>
    </div>
  );
}
