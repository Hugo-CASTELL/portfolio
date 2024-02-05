import { callsToAction, contact_section } from "./HeaderContent";

export default function PopoverContact() {
    return (
        <div>
        <div className="p-4">
            {contact_section.map((item) => (
                <a href={item.href} key={item.name} target={"_blank"}>
                    <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                        <div
                            className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-primary fill-primary group-hover:text-secondary group-hover:fill-secondary"
                                aria-hidden="true"/>
                        </div>
                        <div className="flex-auto">
                            <div className="block font-semibold text-gray-900">
                                {item.name}
                                <span className="absolute inset-0"/>
                            </div>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target={"_blank"}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true"/>
                        {item.name}
                    </a>
                ))}
            </div>
            </div>
    )
}
