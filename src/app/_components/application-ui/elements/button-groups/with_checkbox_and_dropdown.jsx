import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <span className="inline-flex">
      <span className="inline-flex shrink-0 items-center rounded-l-md border border-gray-300 bg-white px-2 py-2">
        <div className="group grid size-4 grid-cols-1">
          <input
            name="select-all"
            type="checkbox"
            aria-label="Select all"
            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
          />
          <svg
            fill="none"
            viewBox="0 0 14 14"
            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-checked:opacity-100"
            />
            <path
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-indeterminate:opacity-100"
            />
          </svg>
        </div>
      </span>
      <div className="-ml-px grid grid-cols-1">
        <select
          id="message-type"
          name="message-type"
          aria-label="Select message type"
          className="col-start-1 row-start-1 w-full appearance-none rounded-r-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
          <option>Unread messages</option>
          <option>Sent messages</option>
          <option>All messages</option>
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        />
      </div>
    </span>
  )
}
