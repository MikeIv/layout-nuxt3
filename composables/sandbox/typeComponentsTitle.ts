export const typeComponentsTitle = () => {
    const listItems = ref([
        {
            id: 1,
            name: 'Drag&DropCards',
            path: '/sandbox/samples/drag-cards'
        },
        {
            id: 2,
            name: 'Counter',
            path: '/sandbox/samples/counter'
        },
        {
            id: 3,
            name: 'Teleport',
            path: '/sandbox/samples/teleport'
        },
    ]);

    return {
        listItems,
    };
};
