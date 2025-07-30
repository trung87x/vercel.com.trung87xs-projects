const transactions = [
  {
    id: 'AAPS0L',
    company: 'Chase & Co.',
    share: 'CAC',
    commission: '+$4.37',
    price: '$3,509.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
  // More transactions...
]

export default function Example() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Transactions</h1>
          <p className="mt-2 text-sm text-gray-700">
            A table of placeholder stock market data that does not make any sense.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold whitespace-nowrap text-gray-900 sm:pl-0"
                  >
                    Transaction ID
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Share
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Commision
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3.5 text-left text-sm font-semibold whitespace-nowrap text-gray-900"
                  >
                    Net amount
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 whitespace-nowrap sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="py-2 pr-3 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pl-0">{transaction.id}</td>
                    <td className="px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-900">
                      {transaction.company}
                    </td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-900">{transaction.share}</td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500">{transaction.commission}</td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500">{transaction.price}</td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500">{transaction.quantity}</td>
                    <td className="px-2 py-2 text-sm whitespace-nowrap text-gray-500">{transaction.netAmount}</td>
                    <td className="relative py-2 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {transaction.id}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
