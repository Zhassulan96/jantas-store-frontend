import { IMobileMenu } from '~/interfaces/menus/mobile-menu'

const dataMobileMenu: IMobileMenu = [
    {
        type: 'link',
        title: 'Главная',
        url: '/',
        children: [
            { type: 'link', title: 'Home 1', url: '/' },
            // { type: 'link', title: 'Home 2', url: '/home-two' },
            { type: 'link', title: 'Offcanvas Cart', url: '/offcanvas-cart' }
        ]
    },

    {
        type: 'link',
        title: 'Категории',
        url: '',
        children: [
            {
                type: 'link',
                title: 'Компьютеры и ноутбуки',
                url: '',
                children: [
                    { type: 'link', title: 'Engravers', url: '' },
                    { type: 'link', title: 'Wrenches', url: '' },
                    { type: 'link', title: 'Wall Chaser', url: '' },
                    { type: 'link', title: 'Pneumatic Tools', url: '' }
                ]
            },
            {
                type: 'link',
                title: 'Machine Tools',
                url: '',
                children: [
                    { type: 'link', title: 'Thread Cutting', url: '' },
                    { type: 'link', title: 'Chip Blowers', url: '' },
                    { type: 'link', title: 'Sharpening Machines', url: '' },
                    { type: 'link', title: 'Pipe Cutters', url: '' },
                    { type: 'link', title: 'Slotting machines', url: '' },
                    { type: 'link', title: 'Lathes', url: '' }
                ]
            }
        ]
    },

    {
        type: 'link',
        title: 'Магазин',
        url: '/shop/category-grid-3-columns-sidebar',
        children: [
            {
                type: 'link',
                title: 'Сетка магазина',
                url: '/shop/category-grid-3-columns-sidebar',
                children: [
                    { type: 'link', title: '3 Columns Sidebar', url: '/shop/category-grid-3-columns-sidebar' },
                    { type: 'link', title: '4 Columns Full', url: '/shop/category-grid-4-columns-full' },
                    { type: 'link', title: '5 Columns Full', url: '/shop/category-grid-5-columns-full' }
                ]
            },
            { type: 'link', title: 'Список Магазинов', url: '/shop/category-list' },
            { type: 'link', title: 'Магазин правой боковой панели', url: '/shop/category-right-sidebar' },
            {
                type: 'link',
                title: 'Товар',
                url: '/shop/product-standard',
                children: [
                    { type: 'link', title: 'Товар', url: '/shop/product-standard' },
                    { type: 'link', title: 'Товар Alt', url: '/shop/product-columnar' },
                    { type: 'link', title: 'Товар Sidebar', url: '/shop/product-sidebar' }
                ]
            },
            { type: 'link', title: '  Корзина', url: '/shop/cart' },
            { type: 'link', title: 'Проверять, выписываться', url: '/shop/checkout' },
            { type: 'link', title: 'Успешный заказ', url: '/shop/checkout/success' },
            { type: 'link', title: 'Список желаний', url: '/shop/wishlist' },
            { type: 'link', title: 'Сравнить', url: '/shop/compare' },
            // { type: 'link', title: 'Track Order', url: '/shop/track-order' }
        ]
    },

    {
        type: 'link',
        title: 'Аккаунт',
        url: '/account',
        children: [
            { type: 'link', title: ' Авторизоваться', url: '/account/login' },
            { type: 'link', title: 'Панель приборов', url: '/account/dashboard' },
            { type: 'link', title: 'Редактировать профиль', url: '/account/profile' },
            { type: 'link', title: 'История заказов', url: '/account/orders' },
            { type: 'link', title: 'Информация для заказа', url: '/account/orders/5' },
            { type: 'link', title: 'Адресная книга', url: '/account/addresses' },
            { type: 'link', title: 'Изменить адрес', url: '/account/addresses/5' },
            { type: 'link', title: 'Изменить пароль', url: '/account/password' }
        ]
    },

    {
        type: 'link',
        title: 'Блог',
        url: '/blog/category-classic',
        children: [
            { type: 'link', title: 'Блог Классический', url: '/blog/category-classic' },
            { type: 'link', title: 'Блог Сетка', url: '/blog/category-grid' },
            { type: 'link', title: 'Список блогов', url: '/blog/category-list' },
            { type: 'link', title: 'Блог слева', url: '/blog/category-left-sidebar' },
            { type: 'link', title: 'Страница сообщения', url: '/blog/post-classic' },
            { type: 'link', title: 'Сообщение без боковой панели', url: '/blog/post-full' }
        ]
    },

    {
        type: 'link',
        title: 'Страницы',
        url: '/site/about-us',
        children: [
            { type: 'link', title: 'О нас', url: '/site/about-us' },
            { type: 'link', title: 'Связаться с нами', url: '/site/contact-us' },
            { type: 'link', title: 'Связаться с нами ALT', url: '/site/contact-us-alt' },
            { type: 'link', title: '404', url: '/site/not-found' },
            { type: 'link', title: 'Условия и положения', url: '/site/terms' },
            { type: 'link', title: 'FAQ', url: '/site/faq' },
            { type: 'link', title: 'Составные части', url: '/site/components' },
            { type: 'link', title: 'Типография', url: '/site/typography' }
        ]
    }
]

export default dataMobileMenu
