// Calculates BrowserRouter basename from <base href...> html attribute
export const getBaseName = () => {
    const selector = document?.querySelector('base');
    const baseHref = selector?.getAttribute('href') || '';
    return baseHref.replace(/\$/, '');
};