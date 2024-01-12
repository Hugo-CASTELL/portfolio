export enum HOME_PARTS {
    FIRST_SCREEN = 'first-screen',
    SECOND_SCREEN = 'second-screen',
    THIRD_SCREEN = 'third-screen',
    FOURTH_SCREEN = 'fourth-screen',
    FIFTH_SCREEN = 'fifth-screen',
    FOOTER = 'footer',
}

export enum URLS {
    HOME = '/',
    HOME_SECOND_SCREEN = URLS.HOME + '#' + HOME_PARTS.SECOND_SCREEN,
}
