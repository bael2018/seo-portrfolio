interface IFaq {
    id: number,
    title: string
}

export const faqState: IFaq[] = [
    {
        id: 1,
        title: 'Когда мой сайт будет в ТОПЕ?'
    },
    {
        id: 2,
        title: 'Когда будут первые результаты?'
    },
    {
        id: 3,
        title: 'Есть ли у вас опыт работы с нашей тематикой?'
    },
    {
        id: 4,
        title: 'Что будет с моим сайтом после того, как вы закончите с ним работать?'
    },
    {
        id: 5,
        title: 'Что будет в случае невыполнения гарантий в срок?'
    },
    {
        id: 6,
        title: 'Повысятся ли у меня продажи и количество звонков?'
    },
    {
        id: 7,
        title: 'Почему вы берете 100%-предоплату? Ведь работа должна оплачиваться после ее выполнения. Разве нет?'
    },
    {
        id: 8,
        title: 'Я уже работаю со своим программистом/контент-менеджером. Что делать?'
    }
]

interface ILinks {
    id: number,
    href: string,
    title: string
}

export const navLinks: ILinks[] = [
    {
        id: 1,
        href: '#about',
        title: 'ОБО МНЕ'
    },
    {
        id: 2,
        href: '#clients',
        title: 'КЛИЕНТЫ'
    },
    {
        id: 3,
        href: '#reviews',
        title: 'ОТЗЫВЫ'
    },
    {
        id: 4,
        href: '#services',
        title: 'УСЛУГИ'
    },
    {
        id: 5,
        href: '#faq',
        title: 'FAQ'
    },
    {
        id: 6,
        href: '#contacts',
        title: 'КОНТАКТЫ'
    }
]

export interface IServices {
    id: number,
    title: string,
    content: string
}

export const servicesList: IServices[] = [
    {
        id: 1,
        title: 'Техническое SEO',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius nihil laboriosam sit, placeat dolor aut. Necessitatibus, ratione fugit id culpa quo laborum! Laudantium, veniam. Placeat laboriosam iure cupiditate molestias!'
    },
    {
        id: 2,
        title: 'Постройка ссылочной массы',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius nihil laboriosam sit, placeat dolor aut. Necessitatibus, ratione fugit id culpa quo laborum! Laudantium, veniam. Placeat laboriosam iure cupiditate molestias!'
    },
    {
        id: 3,
        title: 'PPC - платное продвижение',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius nihil laboriosam sit, placeat dolor aut. Necessitatibus, ratione fugit id culpa quo laborum! Laudantium, veniam. Placeat laboriosam iure cupiditate molestias!'
    },
    {
        id: 4,
        title: 'CRO (conversion rate optimization) - UX/UI',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius nihil laboriosam sit, placeat dolor aut. Necessitatibus, ratione fugit id culpa quo laborum! Laudantium, veniam. Placeat laboriosam iure cupiditate molestias!'
    },
    {
        id: 5,
        title: 'ASO (app store optimization)',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius nihil laboriosam sit, placeat dolor aut. Necessitatibus, ratione fugit id culpa quo laborum! Laudantium, veniam. Placeat laboriosam iure cupiditate molestias!'
    },
    {
        id: 6,
        title: 'Content (написание SEO контента)',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius nihil laboriosam sit, placeat dolor aut. Necessitatibus, ratione fugit id culpa quo laborum! Laudantium, veniam. Placeat laboriosam iure cupiditate molestias!'
    }
]