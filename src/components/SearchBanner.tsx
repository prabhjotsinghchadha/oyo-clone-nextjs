function SearchBanner() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-500">
      <div className="px-40 ">
        <h2 className="my-6 text-center text-3xl font-extrabold text-white">
          Over 157,000 hotels and homes across 35 countries
        </h2>
      </div>
      <div className="flex flex-row gap-2">
        {/* Not able to fix border */}
        <input className="rounded-lg border-black"></input>
        <button className="border border-black ">Near me</button>
        <button className="bg-white">Date Picker</button>
        <button className="border-l-black bg-white">Room, Guest picker</button>
        <button className="bg-green-500 p-4 text-white">Search</button>
      </div>
      <div className="my-6 flex flex-row items-center justify-center">
        <div className="mr-4 text-base text-white ">Continue your search</div>
        <div className="rounded-md border p-2 text-xs text-white">
          {' '}
          Guragon . 17 Nov - 18 Nov | Guests
        </div>
      </div>
    </div>
  );
}

export default SearchBanner;
