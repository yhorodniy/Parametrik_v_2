interface Coach {
    photo: string,
    name: string,
    position: string
}

interface RelatedCourse {
    id: number,
    img: string,
    title: string,
    lessons: string,
    price: string,
    coach: Coach
}

export const relatedCoursesList: RelatedCourse[] = [
    {
        id: 1,
        img: '/img/course-1-img.png',
        title: 'Autodesk Revit Family Creation',
        lessons: '43 Заняття',
        price: '9 900,00 ₴',
        coach: {
            photo: '/img/couch-img.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 2,
        img: '/img/course-2-img.png',
        title: 'Autodesk Revit Family Creation',
        lessons: '43 Заняття',
        price: '9 900,00 ₴',
        coach: {
            photo: '/img/couch-img.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 3,
        img: '/img/course-3-img.png',
        title: 'Autodesk Revit Family Creation',
        lessons: '43 Заняття',
        price: '9 900,00 ₴',
        coach: {
            photo: '/img/couch-img.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 4,
        img: '/img/course-4-img.png',
        title: 'Autodesk Revit Family Creation',
        lessons: '43 Заняття',
        price: '9 900,00 ₴',
        coach: {
            photo: '/img/couch-img.png',
            name: 'Захар',
            position: 'Викладач'
        }
    }
]