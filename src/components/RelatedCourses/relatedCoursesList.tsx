interface Coach {
    photo: string,
    name: string,
    position: string
}

interface RelatedCourse {
    id: number,
    img: string,
    url: string,
    title: string,
    lessons: string,
    price: string,
    coach: Coach
}

export const relatedCoursesList: RelatedCourse[] = [
    {
        id: 6,
        img: '/img/relatedCourses/related_course_6.png',
        url: 'https://parametric.center/courses/new-revit-architecture/',
        title: 'Revit Architecture',
        lessons: '50 Занять',
        price: '15 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-2.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 7,
        img: '/img/relatedCourses/related_course_7.png',
        url: 'https://parametric.center/courses/new-revit-structure/',
        title: 'Revit Structure',
        lessons: '58 Занять',
        price: '14 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-2.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 10,
        img: '/img/relatedCourses/related_course_10.png',
        url: 'https://parametric.center/courses/revit-mep-2024/',
        title: 'Revit MEP 2024',
        lessons: '27 Занять',
        price: '15 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-1.jpg',
            name: 'Сергій',
            position: 'Викладач'
        }
    },
    {
        id: 3,
        img: '/img/relatedCourses/related_course_3.png',
        url: 'https://parametric.center/courses/autodesk-revit-family-creation/',
        title: 'Autodesk Revit Family Creation',
        lessons: '43 Заняття',
        price: '9 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-2.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 1,
        img: '/img/relatedCourses/related_course_1.png',
        url: 'https://parametric.center/courses/autodesk-autocad/',
        title: 'Autodesk AutoCAD',
        lessons: '19 Занять',
        price: '12 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-2.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 2,
        img: '/img/relatedCourses/related_course_2.png',
        url: 'https://parametric.center/courses/autodesk-dynamo-2023/',
        title: 'Autodesk Dynamo 2023',
        lessons: '43 Заняття',
        price: '9 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-3.png',
            name: 'Маріян',
            position: 'Викладач'
        }
    },
    {
        id: 4,
        img: '/img/relatedCourses/related_course_4.jpeg',
        url: 'https://parametric.center/courses/autodesk-robot/',
        title: 'Autodesk Robot Structural Analysis',
        lessons: '43 Заняття',
        price: '9 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-3.png',
            name: 'Mykhailo',
            position: 'Викладач'
        }
    },
    {
        id: 5,
        img: '/img/relatedCourses/related_course_5.jpeg',
        url: 'https://parametric.center/courses/civil-3d/',
        title: 'Civil 3D',
        lessons: '20 Занять',
        price: '4 950,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-2.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 8,
        img: '/img/relatedCourses/related_course_8.png',
        url: 'https://parametric.center/courses/point-cloud-in-revit/',
        title: 'Point Cloud in Revit',
        lessons: '25 Занять',
        price: '8 800,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-2.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 9,
        img: '/img/relatedCourses/related_course_9.png',
        url: 'https://parametric.center/courses/revit-interior-design/',
        title: 'Revit Interior Design',
        lessons: '43 Заняття',
        price: '9 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-2.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 11,
        img: '/img/relatedCourses/related_course_1.png',
        url: 'https://parametric.center/courses/autodesk-autocad/',
        title: 'Autodesk AutoCAD',
        lessons: '19 Занять',
        price: '12 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-2.png',
            name: 'Захар',
            position: 'Викладач'
        }
    },
    {
        id: 12,
        img: '/img/relatedCourses/related_course_2.png',
        url: 'https://parametric.center/courses/autodesk-dynamo-2023/',
        title: 'Autodesk Dynamo 2023',
        lessons: '43 Заняття',
        price: '9 900,00 ₴',
        coach: {
            photo: '/img/relatedCourses/related_course_teacher-3.png',
            name: 'Маріян',
            position: 'Викладач'
        }
    },
]