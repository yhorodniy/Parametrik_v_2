interface Element {
    name: string,
    url: string
}

interface MenuItem {
    title: string,
    elements: Element[]
}

export const footerMenuList: MenuItem[] = [
    {
        title: 'МЕНЮ',
        elements: [
            {
                name: 'Головна',
                url: '/'
            },
            {
                name: 'Про нас',
                url: '/about-us'
            },
            {
                name: 'Навчальні курси',
                url: '/courses'
            },
            {
                name: 'Новини',
                url: '/news-feed'
            },
            {
                name: 'Бібліотека',
                url: '/#'
            },
        ]
    },
    {
        title: 'ПОСЛУГИ',
        elements: [
            {
                name: 'Autodesk Revit Architecture',
                url: '/autodesk-revit-architecture'
            },
            {
                name: 'Autodesk Revit Interior Design',
                url: '/autodesk-revit-interior-design'
            },
            {
                name: 'Autodesk Revit MEP',
                url: '/autodesk-revit-mep'
            },
            {
                name: 'Autodesk AutoCAD',
                url: '/autodesk-autocad'
            },
            {
                name: 'Autodesk Revit Structure',
                url: '/autodesk-revit-structure'
            },
            {
                name: 'Autodesk Robot',
                url: '/autodesk-robot'
            },
            {
                name: 'Autodesk Civil 3D',
                url: '/autodesk-civil-3d'
            },
            {
                name: 'Autodesk DYNAMO',
                url: '/autodesk-dynamo'
            },
            {
                name: 'Autodesk Navisworks',
                url: '/autodesk-navisworks'
            },
        ]
    },
    {
        title: 'ІНШЕ',
        elements: [
            {
                name: 'Політика конфіденційності',
                url: '/privacy-policy'
            },
            {
                name: 'Публічний договір',
                url: '/public-agreement'
            }
        ]
    },
]