import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
  TbMapPin,
} from "react-icons/tb";

export const Sidebar = () => {
  return (
    <div className='max-lg:w-full flex flex-row lg:flex-col gap-4 sticky lg:top-10 col-span-3 mb-6 lg:mb-0'>
      {/* Combined container for mobile */}
      <div className='lg:hidden p-2 rounded-lg bg-white shadow flex flex-col gap-4'>
        <div className='flex flex-row gap-2'>
          <img
            src='/IMG_4999.jpeg'
            alt=''
            className='rounded-lg max-lg:w-30 max-lg:h-30'
          />
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
        <div className='flex flex-col gap-2 border-t pt-2'>
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

      {/* Separate containers for desktop */}
      <div className='hidden lg:flex p-2 rounded-lg bg-white shadow flex-col gap-2'>
        <img src='/IMG_4999.jpeg' alt='' className='rounded-lg' />
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
      <div className='hidden lg:flex p-2 rounded-lg bg-white shadow flex-col gap-2'>
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
