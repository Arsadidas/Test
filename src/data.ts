export const data = [
    {
        id: 1,
        title: 'В очереди',
        items: [
            {
                id: 1,
                title: 'Comlete todo',
                desc: 'Finish todo',
                dateStart: new Date().toISOString().substr(0, 10),
                dateEnd: new Date().toISOString().substr(0, 10),
                priority: "Свободный",
                status: 'В очереди'

            },
            {
                id: 2,
                title: 'Clean house',
                desc: 'Finish cleaning',
                dateStart: new Date().toISOString(),
                dateEnd: new Date().toISOString(),
                priority: "Свободный",
                status: 'Сделано'
            },
    {
        id: 3,
        title: 'Deal about meeting',
        desc: 'Finish meeting with smbd',
        dateStart: new Date().toISOString(),
        dateEnd: new Date().toISOString(),
        priority: "Важно",
        status: 'В процессе'
    },
            {
                id: 4,
                title: 'Finish task',
                desc: "Finish task about date's",
                dateStart: new Date().toISOString(),
                dateEnd: new Date().toISOString(),
                priority: "Важно",
                status: 'В процессе'
            }
        ]
    },
]