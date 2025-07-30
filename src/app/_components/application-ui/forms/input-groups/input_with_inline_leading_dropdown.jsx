import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <div>
      <label htmlFor="phone-number" className="block text-sm/6 font-medium text-gray-900">
        Phone number
      </label>
      <div className="mt-2">
        <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="country"
              name="country"
              autoComplete="country"
              aria-label="Country"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>
          <input
            id="phone-number"
            name="phone-number"
            type="text"
            placeholder="123-456-7890"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>
    </div>
  )
}
