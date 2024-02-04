
type HeaderProps = {
    className: string
}

export default function Footer({ className }: HeaderProps) {
    return (
        <footer id="copyright" className={className}>
            <p className={""}>Portfolio par Hugo Castell</p>
            <p className={""}>©Copyright 2024 - Hugo Castell</p>
        </footer>
    )
}
