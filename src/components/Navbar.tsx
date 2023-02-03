import { AiOutlineHome } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';

export default function Navbar() {
  return (
    <>
      <aside className='flex flex-col items-center bg-zinc-700 text-zinc-400 shadow h-full'>
        <div className='h-16 flex items-center w-full'>
          <a className='h-6 w-6 mx-auto' href='#'>
            Icon
          </a>
        </div>

        <ul>
          <li className='hover:text-zinc-50'>
            <a
              href='#'
              className='h-16 px-6 flex justify-center items-center w-full
					focus:text-orange-500'
            >
              <AiOutlineHome size={25} />
            </a>
          </li>

          <li className='hover:text-zinc-50'>
            <a
              href='#'
              className='h-16 px-6 flex justify-center items-center w-full
					focus:text-orange-500'
            >
              <RxPerson size={25} />
            </a>
          </li>
        </ul>

        <div className='mt-auto h-16 flex items-center w-full'>
          <button
            className='h-16  mx-auto flex justify-center items-center
				w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none'
          >
            <svg
              className='h-5 w-5 text-red-700'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
              <polyline points='16 17 21 12 16 7'></polyline>
              <line x1='21' y1='12' x2='9' y2='12'></line>
            </svg>
          </button>
        </div>
      </aside>
    </>
  );
}
