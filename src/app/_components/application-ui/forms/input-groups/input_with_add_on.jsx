export default function Example() {
  return (
    <div>
      <label htmlFor="company-website" className="block text-sm/6 font-medium text-gray-900">
        Company website
      </label>
      <div className="mt-2 flex">
        <div className="flex shrink-0 items-center rounded-l-md bg-white px-3 text-base text-gray-500 outline-1 -outline-offset-1 outline-gray-300 sm:text-sm/6">
          https://
        </div>
        <input
          id="company-website"
          name="company-website"
          type="text"
          placeholder="www.example.com"
          className="-ml-px block w-full grow rounded-r-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  )
}
