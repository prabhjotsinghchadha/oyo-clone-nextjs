import Image from 'next/image';

import oyologo from '../../public/assets/images/oyo-logo.svg';

function Footer() {
  return (
    <div className="bg-slate-500">
      <div className="flex flex-row items-center justify-center text-2xl text-white">
        <div className="relative my-auto flex h-full cursor-pointer">
          <Image
            src={oyologo}
            layout="fill"
            alt="oyo-logo"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="">World&apos;s leading chain of hotels and homes</div>
        <div className="">Join our network and grow your business!</div>
      </div>
    </div>
  );
}

export default Footer;
