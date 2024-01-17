import { Card } from '../../pages/HomeContent'
import Tag from './Tag';

interface HeaderProps {
    className?: string;
    card: Card;
}

export default function CardComponent({ className, card }: HeaderProps) {
    return (
        <div id={card.name} className={className}>
            <div className='relative grid grid-cols-2 grid-rows-3'>
                {/* Date */}
                <div className='row-start-1 row-span-3'>
                    date
                </div>

                {/* Title */}
                <div className='row-start-1'>
                    {card.name}
                </div>

                {/* Content */}
                <div className='row-start-2'>
                    {card.description}
                </div>

                {/* Tags */}
                <div className='row-start-3 flex flex-nowrap space-x-2'>
                   {card.tags.map((tag) => <Tag tag={tag}/> )}
                </div>
            </div>
        </div>
    )
}
