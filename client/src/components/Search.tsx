import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent } from "react";
import { useSearchParams } from "react-router";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value;
      const params = new URLSearchParams(searchParams);
      params.set("page", "1");

      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      setSearchParams(params);
    },
    300
  );

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
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(event) => handleSearch(event)}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#787774] peer-focus:text-gray-900" />
    </div>
  );
};

export default Search;
