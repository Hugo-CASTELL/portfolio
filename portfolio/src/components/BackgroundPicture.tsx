interface HeaderProps {
    className?: string;
    title?: string;
    alt?: string;
    source?: string;
}

export default function Header({ className, title, alt, source }: HeaderProps) {
    return (
        <div className={className + " overflow-hidden pointer-events-none"}>
            <div title={title} className={"relative"}>
                <picture>
                    <source srcSet={source + ".avif"} type="image/avif"/>
                    <img src={source + ".webp"} alt={alt}/>
                </picture>
            </div>
        </div>
    )
}
