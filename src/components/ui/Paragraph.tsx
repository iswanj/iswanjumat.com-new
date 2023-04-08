import {FC, forwardRef, HTMLAttributes} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import {cn} from '@/lib/utils';

const paragraphVariants = cva(
  'max-w-pose text-slate-700 dark:text-slate-300 mb-2 text-center paragraph-font',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        lg: 'text-lg sm:text-xl',
        sm: 'text-sm sm:text-base',
      },
      defaultVariants: {
        size: 'default',
      },
    },
  },
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  function Paragraph({className, size, children, ...props}, ref) {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({size, className}))}>
        {children}
      </p>
    );
  },
);

export default Paragraph;
