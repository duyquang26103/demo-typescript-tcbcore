class PageNavigator {

    public open (path: string) {
        return browser.url(`https://te-amp-1.cybozu-dev.com/${path}`)
    }
}

export const pageNavigator =  new PageNavigator();