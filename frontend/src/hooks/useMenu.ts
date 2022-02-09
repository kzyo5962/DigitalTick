interface Menu {
    label: string,
    route: string,
    active: boolean
} 
const isRouteActive = (route: string) => {
    console.log(window.location.pathname);
    const isActive = route === window.location.pathname || window.location.pathname.includes(route);
    return isActive;
}

export const useMenu = ():Menu[] => {
    const menu = [
        { label : "about", route: '/about', active: isRouteActive('/about')},
        { label: "contact",route: '/contact', active: isRouteActive('/contact')}
    ]
    return menu;
}