export const Experience = () => {
  return (
    <div className='flex flex-col gap-4 mb-6'>
      <h3 className='text-black border-b self-start'>Experience</h3>
      <div className='flex flex-col gap-6'>
        <div>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex gap-2 items-center'>
              <img src='/eworld.jpg' alt='' className='h-10 w-10 rounded-lg' />
              <div>
                <h4 className='text-black'>eWorld Enterprise Solutions</h4>
                <p className='text-black'>Software Developer</p>
              </div>
            </div>
            <p className='text-sm text-black'>October 2024 - Present</p>
          </div>
          <ul className='list-disc pl-4'>
            <li>
              Build responsive web applications using HTML, CSS, and JavaScript
              for client projects
            </li>
            <li>
              Integrated client-facing frontend with backend services, ensuring
              reliable data retrieval and dynamic display of information to
              users
            </li>
            <li>
              Conduct peer code reviews as part of the QA pipeline to maintain
              high-quality code
            </li>
            <li>
              Worked cross-functionally using Agile methodology to ensure
              functional and design requirements were met for projects
            </li>
          </ul>
        </div>
        <div>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex gap-2 items-center'>
              <img
                src='/imageapp.jpg'
                alt=''
                className='h-10 w-10 rounded-lg'
              />
              <div>
                <h4 className='text-black'>Image App</h4>
                <p className='text-black'>Software Developer</p>
              </div>
            </div>
            <p className='text-sm text-black'>May 2023 - May 2024</p>
          </div>
          <ul className='list-disc pl-4'>
            <li>
              Refactored infrastructure for handling asynchronous processes with
              WebSockets increasing completion rate by 20%.
            </li>
            <li>
              Implemented Google OAuth2.0 sign-in using Passport middleware and
              session store.
            </li>
            <li>
              Created Rest API endpoints (Node.js, Express) to facilitate user
              subscriptions by integrating with Stripe's financial
              infrastructure using webhooks.
            </li>
            <li>
              Developed core functions of a SaaS platform including user
              sign-flow and launched product to thousands of unique visitors.
            </li>
          </ul>
        </div>
        <div>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex gap-2 items-center'>
              <img
                src='/imageapp.jpg'
                alt=''
                className='h-10 w-10 rounded-lg'
              />
              <div>
                <h4 className='text-black'>Image App</h4>
                <p className='text-black'>Software Development Intern</p>
              </div>
            </div>
            <p className='text-sm text-black'>Nov 2022 - May 2023</p>
          </div>
          <ul className='list-disc pl-4'>
            <li>
              Worked with designers to implement Figma designs to responsive
              frontend components ensuring cross-platform compatibility. (React,
              Typescript)
            </li>
            <li>
              Collaborated with senior team members to create platform-specific
              editing tools by using external APIs.
            </li>
            <li>
              Created server-side rendering routes using Express.js to enable
              cross-platform rich link previews via Open Graph meta tags.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
