interface HeaderProps {
    className?: string;
    tag: string;
}

export default function Tag({ className, tag }: HeaderProps) {
    // Define the color of the tag
    let background: string = 'gray';
    let color: string = 'gray';

    function indigo() {
        background = 'rgb(238 242 255)';
        color = 'rgb(99 102 241)';
    }

    function cyan() {
        background = 'rgb(236 254 255)';
        color = 'rgb(6 182 212)';
    }

    function sky() {
        background = 'rgb(224 242 254)';
        color = 'rgb(14 165 233)';
    }
     
    function blue() {
        background = 'rgb(239 246 255)';
        color = 'rgb(59 130 246)';
    }

    function dark_blue() {
        background = 'rgb(219 234 254)';
        color = 'rgb(37 99 235)';
    }
    
    function green() {
        background = 'rgb(220 252 231)';
        color = 'rgb(34 197 94)';
    }

    function slate() {
        background = 'rgb(248 250 252)';
        color = 'rgb(71 85 105)';
    }

    function dark_slate() {
        background = 'rgb(241 245 249)';
        color = 'rgb(71 85 105)';
    }

    function red() {
        background = 'rgb(254 242 242)';
        color = 'rgb(239 68 68)';
    }

    function violet() {
        background = 'rgb(245 243 255)';
        color = 'rgb(139 92 246)';
    }

    switch (tag.toLowerCase()) {
        case 'python': blue(); break;
        case 'php': blue(); break;
        case 'c#': indigo(); break;
        case 'react': cyan(); break;
        case 'tailwind': sky(); break;
        case 'iot': red(); break;
        case 'symfony': red(); break;
        case 'nodejs': green(); break;
        case 'angular': green(); break;
        case 'mysql': slate(); break;
        case 'ansible': dark_blue(); break;
        case 'shell': dark_slate(); break;
        case 'django': dark_slate(); break;
        case 'asp.net': violet(); break;
        }
    
    const style: React.CSSProperties = {
        backgroundColor: background,
        color: color,
    }
   
    return (
        <div className={className}>
            <div className='rounded-full px-4 py-1 font-medium text-sm ring-1 ring-inset ring-secondary/10 '
                 style={style}> 
                {tag}
            </div>
        </div>
    )
}
