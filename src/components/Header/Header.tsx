import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { contact_section, headerRefs, callsToAction } from './HeaderContent.ts'
import {personal_infos} from "../../resources/personal_infos.ts";
import PopoverContact from './PopoverContact.tsx'

type HeaderProps = {
    className: string
}

export default function Header({ className }: HeaderProps) {
    const [mobileMenuOpen, setMenuOpen] = useState(false)

    return (
        <header className={className}>
            {/*
             MOBILE
            */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-end">
                        {mobileMenuOpen && 
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        }
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {headerRefs && (
                                    headerRefs.map((ref) => (
                                        <a
                                            key={ref.name}
                                            href={ref.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {ref.name}
                                        </a>
                                    ))
                                )}
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Contact
                                                <ChevronDownIcon
                                                    className={open ? 'rotate-180 h-5 w-5 flex-none' : 'h-5 w-5 flex-none'}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...contact_section, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        target={"_blank"}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>

            {/*
            WIDE SCREEN
            */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href={"#first"} className="hidden lg:block -m-1.5 p-1.5 transition ease-in-out duration-300 hover:scale-110 hover:drop-shadow-2xl">
                        <span className="sr-only">{personal_infos.full_name()}</span>
                        <img className="h-6 w-auto" src="assets/svg/logo.svg" alt="Logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    {!mobileMenuOpen && 
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMenuOpen(true)}
                        >
                            <span className="sr-only">Menu principal</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    }
                </div>
                <Popover.Group className="hidden lg:flex lg:justify-end lg:gap-x-12">

                    {headerRefs && (
                        headerRefs.map((ref) => (
                            <a
                                key={ref.name}
                                href={ref.href}
                                className="text-sm font-semibold leading-6 text-primary transition ease-in-out duration-150 hover:text-active"
                            >
                                {ref.name}
                            </a>
                        ))
                    )}

                    <Popover className="relative">
                        <Popover.Button
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-primary transition ease-in-out duration-150 hover:text-active border-transparent ring-transparent">
                            Contact
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <PopoverContact/>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </Popover.Group>
            </nav>

        </header>
    )
}
