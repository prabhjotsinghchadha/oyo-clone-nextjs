import { ChevronDownIcon } from '@heroicons/react/24/outline';

function CityRow() {
  return (
    <div className="my-2 flex flex-row gap-6 border-b-4 px-6 py-1.5 text-sm text-slate-500">
      <div className="flex ">
        <div>Bangalore</div>
        <ChevronDownIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex ">
        <div>Chennai</div>
        <ChevronDownIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex ">
        <div>Delhi</div>
        <ChevronDownIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex ">
        <div>Gurgaon</div>
        <ChevronDownIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex ">
        <div>Hyderabad</div>
        <ChevronDownIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex ">
        <div>Kolkata</div>
        <ChevronDownIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex ">
        <div>Mumbai</div>
        <ChevronDownIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex ">
        <div>Noida</div>
        <ChevronDownIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex ">
        <div>Pune</div>
        <ChevronDownIcon className="h-4 w-4 cursor-pointer" />
      </div>
    </div>
  );
}

export default CityRow;
