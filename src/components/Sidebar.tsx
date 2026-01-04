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
      <div className='w-full lg:hidden p-3 rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-300 flex flex-col gap-4'>
        <div className='flex flex-row gap-3'>
          <img
            src='/IMG_4999.jpeg'
            alt='Brandon Chu'
            className='rounded-lg max-lg:w-30 max-lg:h-30 ring-2 ring-accent/30 ring-offset-2'
          />
          <div>
            <h3 className='font-semibold'>Brandon Chu</h3>
            <p className='font-semibold'>Software Developer</p>
            {/* <div className='flex gap-2 items-center'>
              <div className='w-4'>
                <div className='h-3 w-3 mx-auto rounded-full bg-green-400 animate-pulse'></div>
              </div>
              <p className='text-sm text-green-600 font-medium'>Open to work</p>
            </div> */}
            <div className='flex gap-2 items-center text-gray-600'>
              <TbMapPin className='text-accent' />
              <p className='text-sm'>Sacramento, California</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 border-t pt-2'>
          <div className='flex gap-2 items-center group'>
            <TbBrandLinkedin className='text-accent' />
            <a
              href='https://www.linkedin.com/in/brandon-chu-02a87b23a/'
              target='_blank'
              className='text-sm text-gray-600 hover:text-accent transition-colors duration-200'
            >
              Linkedin
            </a>
          </div>
          <div className='flex gap-2 items-center group'>
            <TbBrandGithub className='text-accent' />
            <a
              href='https://github.com/BrandonC123'
              target='_blank'
              className='text-sm text-gray-600 hover:text-accent transition-colors duration-200'
            >
              GitHub
            </a>
          </div>
          <div className='flex gap-2 items-center'>
            <TbMail className='text-accent' />
            <a
              href='mailto:brandonchu@gmail.com'
              className='text-sm text-gray-600 underline'
            >
              brandonchu@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className='hidden lg:flex p-3 rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-300 flex-col gap-3'>
        <img
          src='/IMG_4999.jpeg'
          alt='Brandon Chu'
          className='rounded-lg ring-2 ring-accent/30 ring-offset-2'
        />
        <div>
          <h3 className='font-semibold text-black'>Brandon Chu</h3>
          <p className='font-medium text-gray-600'>Software Developer</p>
          {/* <div className='flex gap-2 items-center mt-1'>
            <div className='w-4'>
              <div className='h-3 w-3 mx-auto rounded-full bg-green-400 animate-pulse'></div>
            </div>
            <p className='text-sm text-green-600 font-medium'>Open to work</p>
          </div> */}
          <div className='flex gap-2 items-center mt-1 text-gray-600'>
            <TbMapPin className='text-accent' />
            <p className='text-sm'>Sacramento, California</p>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex p-3 rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-300 flex-col gap-2'>
        <div className='flex gap-2 items-center'>
          <TbBrandLinkedin className='text-accent' />
          <a
            href='https://www.linkedin.com/in/brandon-chu-02a87b23a/'
            target='_blank'
            className='text-sm text-gray-600 hover:text-accent transition-colors duration-200'
          >
            Linkedin
          </a>
        </div>
        <div className='flex gap-2 items-center'>
          <TbBrandGithub className='text-accent' />
          <a
            href='https://github.com/BrandonC123'
            target='_blank'
            className='text-sm text-gray-600 hover:text-accent transition-colors duration-200'
          >
            GitHub
          </a>
        </div>
        <div className='flex gap-2 items-center'>
          <TbMail className='text-accent' />
          <a
            href='mailto:brandonchu@gmail.com'
            className='text-sm text-gray-600 underline'
          >
            brandonchu@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};
