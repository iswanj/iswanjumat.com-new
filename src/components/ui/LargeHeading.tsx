import {FC, forwardRef, HTMLAttributes} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import {cn} from '@/lib/utils';

const headingVariants = cva(
  'text-black dark:text-white text-center lg:text-left leading-tight tracking-tighter header-font tracking-normal',
  {
    variants: {
      size: {
        default: 'text-3xl md:text-4xl lg:text-5xl',
        lg: 'text-4xl md:text-5xl lg:text-6xl',
        md: 'text-3xl md:text-4xl lg:text-5xl',
        sm: 'text-1xl md:text-2xl lg:text-3xl',
      },
      defaultVariants: {
        size: 'default',
      },
    },
  },
);

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  function Paragraph({className, size, children, ...props}, ref) {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({size, className}))}>
        {children}
      </h1>
    );
  },
);

export default LargeHeading;
