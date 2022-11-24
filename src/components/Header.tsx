import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import oyologo from '../../public/assets/images/oyo-logo.svg';

function Header() {
  const styles = {
    container: {
      className: `
          grid grid-cols-6 
          px-8 md:px-16
          bg-white shadow 
          desktop: grid-cols-8
      `,
    },
  };

  return (
    <header {...styles.container}>
      {/* Left */}
      <div className="relative my-auto flex h-full cursor-pointer items-center">
        <Image
          src={oyologo}
          layout="fill"
          alt="oyo-logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="grid cursor-pointer grid-flow-col grid-rows-2 border-r-2 border-gray-300">
        <UserGroupIcon className="row-span-3 mx-4 h-6 w-6 self-center" />
        <span className="col-span-2 text-sm font-semibold">
          Become a member
        </span>
        <span className="col-span-2 row-span-2 text-xs font-light">
          Additional 10% off on stays
        </span>
      </div>
      <div className="grid cursor-pointer grid-flow-col grid-rows-2 border-r-2 border-gray-300">
        <BriefcaseIcon className="row-span-3 mx-4 h-6 w-6 self-center" />
        <span className="col-span-2 text-sm font-semibold">
          OYO for Business
        </span>
        <span className="col-span-2 row-span-2 text-xs font-light">
          Corporate booking solution
        </span>
      </div>
      <div className="grid cursor-pointer grid-flow-col grid-rows-2 border-r-2 border-gray-300">
        <BuildingOffice2Icon className="row-span-3 mx-4 h-6 w-6 self-center" />
        <span className="col-span-2 text-sm font-semibold">
          List your property
        </span>
        <span className="col-span-2 row-span-2 text-xs font-light">
          Start earning in 30 mins
        </span>
      </div>
      {/* Right */}
      <div className="flex cursor-pointer flex-row items-center justify-center border-r-2 border-gray-300">
        <GlobeAltIcon className="mr-1 h-6 w-6" />
        <span className="text-sm font-bold">English</span>
      </div>
      <div className="flex cursor-pointer flex-row items-center justify-center">
        <UserIcon className="mx-1 ml-3 h-6 w-6" />
        <span className="text-sm font-bold">Login / Signup</span>
      </div>
    </header>
  );
}

export default Header;
