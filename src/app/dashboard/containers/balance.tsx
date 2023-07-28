
import { ChevronDownIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import { Menu } from "@headlessui/react"

const balance = () => {
    return (
        <>

            <section className="px-6 py-8 flex flex-col gap-3">
                <div>
                    <p className="flex gap-2 items-cente font-semibold text-xl">Estimated Balance
                        <label className="bg-gray-100 p-1 rounded-md cursor-pointer" htmlFor="balanceCheck">
                            <input type="checkbox" className="hidden peer" name="" id="balanceCheck" />
                            {/* <EyeIcon className="w-4 h-4 text-gray-400 peer-checked:hidden" /> */}
                            <EyeSlashIcon className="w-4 h-4 text-gray-400 " />
                        </label></p>
                </div>
                <div className="flex gap-1 text-2xl items-center border-b border-dotted w-fit">
                    <p className="font-medium">0.00</p>
                    <div className="flex gap-1 items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white font-semibold text-gray-900">
                                    BTC
                                    <ChevronDownIcon className="h-5 w-5 p-1 bg-gray-100 text-gray-500" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Menu.Items className="absolute left-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        <p className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">BTC</p>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <p className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">USDT</p>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <p className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">ETH</p>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <p className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">BNB</p>
                                    </Menu.Item>


                                </div>
                            </Menu.Items>
                        </Menu>
                    </div>
                    <div className="flex gap-2 ml-2">
                        <p>=</p>
                        <h1 className="text-gray-500">$0.00</h1>
                    </div>
                </div>

            </section>
        </>
    )
}

export default balance