import { Card } from '../../pages/HomeContent'
import Tag from './Tag';

interface HeaderProps {
    className?: string;
    bg?: string;
    card: Card;
}

export default function CardComponent({ className, bg, card }: HeaderProps) {
    return (
        <div id={card.name} className={className}>
            <div className={'shadow-lg rounded-xl p-4 m-4 ring-1 ring-slate-100 ' + bg}>
                <div className={'grid grid-cols-2 grid-rows-[auto, auto, auto] gap-y-2'}>
                    {/* Date */}
                    <div className='row-start-1 row-span-3 col-start-1 text-active italic'>
                        {card.date}
                    </div>

                    {/* Compétences BUT */}
                    {card.competencesBUT &&
                        <div className='row-start-3 col-start-1 text-active text-left flex'>
                            <div className='relative has-tooltip hover:cursor-help'>
                                <span className="tooltip mt-6 bg-white rounded-lg p-4 ring-1 ring-slate-300">Compétences BUT : {card.competencesBUT.join(" ")}</span>
                                <div className='rounded-full bg-secondary h-5 w-5 flex items-center justify-center font-extrabold text-white'>
                                    +
                                </div>
                            </div>
                            <div className='w-full'>
                            </div>
                        </div>
                    }

                    {/* Title */}
                    <div className='row-start-1 col-start-2 font-semibold text-secondary'>
                        {card.name}
                    </div>

                    {/* Content */}
                    <div className='row-start-2 col-start-2 overflow-auto'>
                        {card.description}
                    </div>

                    {/* Tags */}
                    <div id="tags" className='row-start-3 col-start-2 flex space-x-2 overflow-auto'>
                        {card.tags.map((tag) => <Tag key={card.name + ' ' + tag} tag={tag} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
