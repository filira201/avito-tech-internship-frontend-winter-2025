import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="relative min-h-12 flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        id="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm hover:bg-[#f2f1f0] placeholder:text-[#787774]"
        placeholder="Поиск объявлений..."
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#787774] peer-focus:text-gray-900" />
    </div>
  );
};

export default Search;
