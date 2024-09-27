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
                url: 'https://parametric.center/'
            },
            {
                name: 'Про нас',
                url: 'https://parametric.center/about-us'
            },
            {
                name: 'Навчальні курси',
                url: 'https://parametric.center/courses'
            },
            {
                name: 'Новини',
                url: 'https://parametric.center/news-feed'
            },
            {
                name: 'Бібліотека',
                url: 'https://parametric.center/#'
            },
        ]
    },
    {
        title: 'ПОСЛУГИ',
        elements: [
            {
                name: 'Autodesk Revit Architecture',
                url: 'https://parametric.center/autodesk-revit-architecture'
            },
            {
                name: 'Autodesk Revit Interior Design',
                url: 'https://parametric.center/autodesk-revit-interior-design'
            },
            {
                name: 'Autodesk Revit MEP',
                url: 'https://parametric.center/autodesk-revit-mep'
            },
            {
                name: 'Autodesk AutoCAD',
                url: 'https://parametric.center/autodesk-autocad'
            },
            {
                name: 'Autodesk Revit Structure',
                url: 'https://parametric.center/autodesk-revit-structure'
            },
            {
                name: 'Autodesk Robot',
                url: 'https://parametric.center/autodesk-robot'
            },
            {
                name: 'Autodesk Civil 3D',
                url: 'https://parametric.center/autodesk-civil-3d'
            },
            {
                name: 'Autodesk DYNAMO',
                url: 'https://parametric.center/autodesk-dynamo'
            },
            {
                name: 'Autodesk Navisworks',
                url: 'https://parametric.center/autodesk-navisworks'
            },
        ]
    },
    {
        title: 'ІНШЕ',
        elements: [
            {
                name: 'Політика конфіденційності',
                url: 'https://parametric.center/privacy-policy'
            },
            {
                name: 'Публічний договір',
                url: 'https://parametric.center/public-agreement'
            }
        ]
    },
]