import { TimeLineEvent } from "../../pages/HomeContent"

type HeaderProps = {
    className?: string,
    events: TimeLineEvent[],
}

export default function TimeLine({ className, events }: HeaderProps) {
    return (
        <div className={className = " flex place-content-center"}>
            <ol className="relative border-s border-primary-200">                  
                {events && events.map((event: TimeLineEvent, index: number) => { return (
                        <li className={index == events.length - 1 ? "mb-1 ms-4" : "mb-10 ms-4"}>
                            <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-secondary"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{event.date}</time>
                            <h3 className="text-lg font-semibold text-secondary">{event.title}</h3>
                            <p className="text-base font-normal text-gray-400">{event.content}</p>
                        </li>
                    )
                }
                )}
            </ol>
        </div>
    )
}
