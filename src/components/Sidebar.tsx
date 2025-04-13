import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
  TbMapPin,
} from "react-icons/tb";

export const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4 sticky top-10 col-span-3'>
      <div className='p-2 rounded-lg bg-white shadow flex flex-col gap-2'>
        <img src='/IMG_4999.jpeg' alt='' className='rounded-lg mx-auto' />
        <div>
          <h3 className='font-semibold'>Brandon Chu</h3>
          <p className='font-semibold'>Software Developer</p>
          <div className='flex gap-2 items-center'>
            <div className='w-4'>
              <div className='h-3 w-3 mx-auto rounded-full bg-green-300'></div>
            </div>
            <p className='text-sm'>Open to work</p>
          </div>
          <div className='flex gap-2 items-center'>
            <TbMapPin />
            <p className='text-sm'>Sacramento, California</p>
          </div>
        </div>
      </div>
      <div className='p-2 rounded-lg bg-white shadow flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
          <TbBrandLinkedin />
          <a
            href='https://www.linkedin.com/in/brandon-chu-02a87b23a/'
            target='_blank'
            className='text-sm underline'
          >
            Linkedin
          </a>
        </div>
        <div className='flex gap-2 items-center'>
          <TbBrandGithub />
          <a
            href='https://github.com/BrandonC123'
            target='_blank'
            className='text-sm underline'
          >
            GitHub
          </a>
        </div>
        <div className='flex gap-2 items-center'>
          <TbMail /> <p className='text-sm'>brandonchu@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
