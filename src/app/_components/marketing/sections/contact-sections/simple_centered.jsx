import { BugAntIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

export default function Example() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact sales</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <ChatBubbleLeftRightIcon aria-hidden="true" className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900">Sales support</h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Ut cursus est ut amet. Lobortis eget egestas leo vitae eget porttitor risus blandit. Nunc a in lorem vel
              iaculis porttitor.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-indigo-600">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <BugAntIcon aria-hidden="true" className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900">Bug reports</h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Expedita qui non ut quia ipsum voluptatum ipsam pariatur. Culpa vitae ipsum minus eius vero quo quibusdam.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-indigo-600">
                Report a bug <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
            <ComputerDesktopIcon aria-hidden="true" className="size-6 text-white" />
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900">Technical support</h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Sint aut modi porro consequatur architecto commodi qui consequatur. Dignissimos adipisci minima.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="#" className="text-indigo-600">
                Join our Discord <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
