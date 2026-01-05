import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  icon?: ReactNode;
}

export const SectionHeader = ({ title, icon }: SectionHeaderProps) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-2 border-l-4 border-accent pl-3 py-1'>
        {icon && <span className='text-accent'>{icon}</span>}
        <h3 className='text-black font-semibold text-lg'>{title}</h3>
      </div>
    </div>
  );
};
