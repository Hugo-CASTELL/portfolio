interface HeaderProps {
    className?: string;
    tag: string;
}

export default function Tag({ className, tag }: HeaderProps) {
    // Define the color of the tag
    let color: string = 'gray';
    switch (tag.toLowerCase()) {
        case 'python':
            color = 'red';
            break;
        case 'languages':
            color = 'green';
            break;
        case 'c#':
            color = 'indigo';
            break;
        }

    // Style
    const style: React.CSSProperties = {
        backgroundColor: color,
        color: color,
    }
   
    return (
        <div className={className}>
            <div className='rounded-full px-4'
                 style={style}> 
                {tag}
            </div>
        </div>
    )
}
