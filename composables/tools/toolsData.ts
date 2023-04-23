export const toolsData = () => {
    const toolsDescription = ref([
        {
            id: 'vue',
            icon: 'vue',
            name: 'Vue',
            plugIn: [],
            links: [
                { text: 'На Хабре', href: 'https://habr.com/ru/hub/vuejs/' },
                {
                    text: 'Composition API',
                    href: 'https://tproger.ru/articles/kak-sozdat-prilozhenie-vokrug-composition-api-vo-vue-3/',
                },
                {
                    text: 'Хуки Composition API',
                    href: 'https://v3.ru.vuejs.org/ru/api/composition-api.html#хуки-жизненного-цикла',
                },
            ],
            npm: [],
        },
        {
            id: 'nuxt',
            icon: 'nuxt',
            name: 'Nuxt',
            plugIn: [],
            links: [{ text: 'Fake API', href: 'https://fakestoreapi.com/' }],
            npm: [
                { text: 'prettier', href: 'https://www.npmjs.com/package/prettier' },
                { text: 'autoprefixer', href: 'https://www.npmjs.com/package/autoprefixer' },
                { text: 'postcss', href: 'https://www.npmjs.com/package/postcss' },
                { text: 'sass-loader', href: 'https://www.npmjs.com/package/sass-loader' },
                { text: '@vueuse/nuxt', href: 'https://www.npmjs.com/package/@vueuse/nuxt' },
            ],
        },
        {
            id: 'webstorm',
            icon: 'webstorm',
            name: 'WebStorm',
            plugIn: [
                { name: '.env files support' },
                { name: '.ignore' },
                { name: 'Atom Material Icons' },
                { name: 'Color Highlighter' },
                { name: 'Indent Rainbow' },
                { name: 'Material Theme UI' },
                { name: 'Rainbow Brackets' },
                { name: 'Tabnine AI Code Completion' },
            ],
            links: [],
            npm: [],
        },
        {
            id: 'js',
            icon: 'js',
            name: 'Js',
            plugIn: [],
            links: [],
            npm: [],
        },
        {
            id: 'html',
            icon: 'html',
            name: 'Html',
            plugIn: [],
            links: [
                { text: 'Структура HTML-документа', href: 'https://habr.com/ru/company/macloud/blog/555082/' },
                { text: 'Теги и атрибуты', href: 'https://habr.com/ru/company/macloud/blog/555400/' },
            ],
            npm: [],
        },
        {
            id: 'css',
            icon: 'css',
            name: 'Css',
            plugIn: [],
            links: [
                { text: 'На Хабре', href: 'https://habr.com/ru/hub/css/' },
                { text: 'Справочник HTML и CSS', href: 'https://hcdev.ru/' },
                { text: 'Руководство по Grid', href: 'https://tuhub.ru/posts/css-grid-complete-guide' },
                { text: 'Трюки CSS', href: 'https://habr.com/ru/company/macloud/blog/557796/' },
                { text: 'SVG иконки', href: 'https://icones.js.org/' },
                { text: 'Оптимизация изображений', href: 'https://tinyjpg.com/' },
            ],
            npm: [],
        },
    ])

    return {
        toolsDescription,
    };
};