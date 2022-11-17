import Image from 'next/image';

function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-screen w-full">
        <Image
          src={
            'https://assets.oyoroomscdn.com/cmsMedia/f0be8dc3-e384-40b3-89f9-a0a0109159ce.jpg'
          }
          layout="fill"
          alt="Oyo-Banner"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="relative h-screen w-screen cursor-pointer">
        <Image
          src={
            'https://assets.oyoroomscdn.com/cmsMedia/156ac1e8-1708-4ca6-ad7e-827db7cc3554.png'
          }
          layout="fill"
          alt="Oyo-Banner"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
    </div>
  );
}

export default HeroSection;
