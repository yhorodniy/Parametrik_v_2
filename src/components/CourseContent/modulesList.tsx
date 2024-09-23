export interface Modules {
  id: number,
  name: string,
  title: string,
  lessons: string[]
  result: string[]
}

export const modulesList: Modules[] = [
  {
      id: 1,
      name: '01 Модуль',
      title: 'Загальні принципи. Інтерфейс. Налаштування Revit Interior Design',
      lessons: [
        'Інтерфейс',
        'Інструменти редагування. Вкладка ИЗМЕНИТЬ',
        'Структура моделі. Категорії, типи та екземпляри'
      ],
      result: []
  },
  {
      id: 2,
      name: '02 Модуль',
      title: 'Створення нового проекту. Шаблон, рівні, вигляди',
      lessons: [
        'Шаблон. Частина 1',
        'Шаблон. Частина 2. Створення нового проєкту',
        'Шаблон. Частина 3. Робота з виглядами'
      ],
      result: []
  },
  {
      id: 3,
      name: '03 Модуль',
      title: 'Принципи підвантаження сторонніх файлів',
      lessons: [
        'Знайомство із принципами підвантаження файлів у Revit',
        'Revit to Revit',
        'IFC to Revit',
        'AutoCAD to Revit',
        'Sketchup, Деколь, Jpeg PDF та DWF to Revit'
      ],
      result: []
  },
  {
      id: 4,
      name: '04 Модуль',
      title: 'Створення та редагування елементів моделі',
      lessons: [
        'Багатошарові конструкції',
        'Стіни / Walls',
        'Стіни. Приклад побудови геометрії стін. Частина 1',
        'Стіни. Приклад побудови геометрії стін. Частина 2',
        'Перекриття, підлоги та стеля',
        'Перекриття, підлоги. Робота із “Суб-елементами”',
        'Дах та покрівля',
        'Дах видавлюванням та складні моменти',
        'Несучі конструкції – колони, балки, балочні системи',
      ],
      result: []
  },
  {
      id: 5,
      name: '05 Модуль',
      title: 'Стадії та варіанти конструкції. Послідовне та паралельне проектування',
      lessons: [
        'Стадії та черги. Послідовне проектування у Autodesk Revit',
        'Варіанти конструкції'
      ],
      result: ['Домашнє завдання №1. Перевірка прогресу роботи над елементами моделей']
  },
  {
      id: 6,
      name: '06 Модуль',
      title: 'Створення та редагування елементів моделі',
      lessons: [
        'Сімейства. Вступ. Розміщення Вікон/Дверей/Інших сімейств',
        'Бонус. Платні сімейства з сайту Arquitree',
        'Вентильовані фасади, Вітражні конструкції / Curtain Facades, Curtain Walls',
        'Вентильовані фасади. Вітражі. Розміщення вікон та дверей',
        'Пандус',
        'Сходи та сходові марші',
        'Сходи. Частина 2. Доповнення',
        'Огородження / Railings',
        'Приміщення та Зони'
      ],
      result: []
  },
  {
      id: 7,
      name: '07 Модуль',
      title: 'Інженерні мережі: опалення, вентиляція, водопостачання та каналізація',
      lessons: [
        'Вступ до розділу Інженерні мережі',
        'Повітропровідні системи. Частина 1',
        'Повітропровідні системи. Частина 2',
        'Трубопровідні системи. Частина 1',
        'Трубопровідні системи. Частина 2',
      ],
      result: ['Домашнє завдання №2. Перевірка моделей перед початком тем Оформлення проєкту']
  },
  {
      id: 8,
      name: '08 Модуль',
      title: 'Оформлення проєкту',
      lessons: [
        'Диспетчер проєкту / Project Browser',
        'Листи та вигляди. Диспетчер проєкту. Листи. Створення виглядів. 3D та Камера. Частина 1',
        'Листи та вигляди. Розрізи, фрагменти планів. Частина 2',
        'Листи та вигляди. Легенда, креслярський вигляд та область видимості',
        'Шаблон вигляду, видимість, графіка та фільтри',
        'Аннотації та Розміри / Annotation & – Частина 1',
        'Аннотації та Розміри / Annotation & – Частина 2. Висотні відмітки та ухили',
        'Маркування / Tags',
        'Розріз. Розгортка. Фасад',
        'Анотації. Елементи Вузлів. Вузли у Revit'
      ],
      result: []
  },
  {
      id: 9,
      name: '09 Модуль',
      title: 'Специфікації',
      lessons: [
        'Специфікації'
      ],
      result: []
  },
  {
      id: 10,
      name: '10 Модуль',
      title: 'Експорт та Друк: Export & Print',
      lessons: [
        'Друк Revit 2021 в PDF',
        'Export Revit 2022 в PDF',
        'Export Revit to Autocad. Частина 1',
        'Export Revit to Autocad. Частина 2',
        'Супер друк – DiRoots – порятунок проектанта',
      ],
      result: []
  },
  {
      id: 11,
      name: '11 Модуль',
      title: 'Типові вигляди та рішення',
      lessons: [
        'Розміщення та специфікації розеток і вимикачів',
        'Розміщення та специфікації елементів меблювання',
        'Завдання на меблювання. Збірки',
        'Продовження теми Збірки. Лайфхаки із 3D, розмірами та аннотаціями'
      ],
      result: [
        'Домашнє завдання №3. Фінальна робота. Оформлення проекту, креслень та аркушів',
        'Отримання сертифікату'
      ]
  }
]