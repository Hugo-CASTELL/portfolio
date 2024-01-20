import { Card } from '../../pages/HomeContent'
import Tag from './Tag';

interface HeaderProps {
    className?: string;
    divKey: string;
    card: Card;
}

export default function CardComponent({ className, divKey, card }: HeaderProps) {
    return (
        <div id={card.name} className={className} key={divKey}>
            <div className='shadow-xl rounded-xl m-4'>
                <div className='grid grid-cols-2 grid-rows-[auto, 1fr, auto] gap-y-2'>
                    {/* Date */}
                    <div className='row-start-1 row-span-3 col-start-1'>
                        date
                    </div>

                    {/* Title */}
                    <div className='row-start-1 col-start-2'>
                        {card.name}
                    </div>

                    {/* Content */}
                    <div className='row-start-2 col-start-2 overflow-auto'>
                        {card.description}
                    </div>

                    {/* Tags */}
                    <div id="tags" className='row-start-3 col-start-2 flex space-x-2 mt-4 overflow-auto'>
                       {card.tags.map((tag) => <Tag key={card.name + ' ' + tag} tag={tag}/> )}
                    </div>
                </div>
            </div>
        </div>
    )
}
