/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Ваша любимая планета в мире StarCraft",
        ["Слейн", "Айур", "Чар", "Мар-Сара", "Зерус"],
        [
            "this.score.taldarim++",
            "this.score.protoss++",
            "this.score.zerg++",
            "this.score.terran++",
            "this.score.primal++"
        ]
    ],
    [
        "Я река…",
        ["А я звёздный охотник", "Враги плывущие обломки", "Ты моё море"],
        [
            "this.score.protoss++; this.score.terran--",
            "this.score.primal++; this.score.protoss--; this.score.terran--",
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "С кем вы поговорите на копье Адуна?",
        ["С Абатуром", "Со Свонном", "С Караксом"],
        [
            "this.score.protoss--",
            "this.score.protoss--",
            "this.score.protoss++"
        ]
    ],

    [
        "Перед вами хорошо укреплённый терранский бункер",
        ["Я ассимилирую эссенцию тиранозора, который обитает в этих местах и эволюционирую", "Запрошу орбитальный удар если они первые проявят агрессию", "Подойду поговорить с морпехами"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--",
            "this.score.protoss++; this.score.terran--",
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Как насчёт свалить со мной, ковбой?",
        ["Чёрт, давно пора"],
        [
            "this.score.terran++"
        ]
    ],
    [
        "На вас напали",
        ["Нам нужны роевики, споровики и плёточники", "Нужно вызвать кайдариновые монолиты и фотонные пушки", "Возвести планетарную крепость, бункеры и подвести осадные танки"],
        [
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--",
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2",
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2"
        ]
    ],
    [
        "Королева приказывает вам обрушить свой гнев на миры доминиона",
        ["Должен подчиниться", "Пока она собирает, я следую", "Её псионная сила на меня не действует"],
        [
            "this.score.zerg++; this.score.protoss--",
            "this.score.primal++; this.score.protoss--",
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "Перед вами высший тамплиер",
        ["Сильная эссенция, но я не могу её собрать", "Уничтожить протоссов", "Стать архонтом", "Спросить как дела у Артаниса"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--",
            "this.score.zerg++; this.score.protoss--; this.score.terran--",
            "this.score.protoss++; this.score.terran--; this.score.zerg--",
            "this.score.terran++; this.score.protoss--; this.score.zerg--"
        ]
    ],
    [
        "Вы заметили морпеха который не подчиняется вашему приказу",
        ["Уничтожить мимикрида", "Сделать ему выговор"],
        [
            "this.score.terran++",
            "this.score.terran--"
        ]
    ],
    [
        "На вас движется стая саранчидов",
        ["Много эссенции, можно собрать", "Приказать им лететь дальше", "Попытаться уничтожить фениксами пока они в воздухе"],
        [
            "this.score.primal++; this.score.protoss--",
            "this.score.zerg++; this.score.protoss--",
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "Вы видите изначальный омут рождения, что вы сделаете?",
        ["Соберу много эссенции", "Моё тело не выдержит такую мощь", "Попытаюсь уничтожить это место"],
        [
            "this.score.primal++; this.score.protoss--",
            "this.score.zerg++; this.score.protoss--",
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "Вы сильно устали сегодня",
        ["Пойду в бар у Джорея", "Рой не знает усталости", "Слабые, падут первыми"],
        [
            "this.score.terran++; this.score.zerg--",
            "this.score.zerg++; this.score.terran--",
            "this.score.taldarim++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Перед вами иерарх протоссов",
        ["Вызвать на Рак-шир", "Поприветствовать фразой «Эн Таро Тассадар»", "Отправить рой в атаку"],
        [
            "this.score.taldarim++; this.score.zerg--",
            "this.score.protoss++; this.score.zerg--",
            "this.score.zerg++; this.score.protoss--"
        ]
    ],
    [
        "Зератул и Воразун",
        ["Связаны Кхалой", "Муж и жена", "Тёмные тамплиеры", "Новый вид зергов"],
        [
            "this.score.protoss--",
            "this.score.protoss-=2",
            "this.score.protoss++",
            "this.score.protoss-=3"
        ]
    ],
    [
        "В этих местах много источников терразин",
        ["Защищать месторождения от инопланетных захватчиков", "Добыть как можно больше, пока эти Талдаримские живчики не успели ничего понять"],
        [
            "this.score.taldarim++; this.score.terran--",
            "this.score.terran++"
        ]
    ],
    [
        "В лаборатории ставят опыты над бруталиском",
        ["Бруталиск – вершина эволюции, нужен рою", "Поинтересоваться у парней, что интересного они узнали", "Бруталиск очень опасен лучше уничтожить его вместе с терранской лабораторией"],
        [
            "this.score.zerg++; this.score.protoss--; this.score.terran--",
            "this.score.terran++; this.score.protoss--; this.score.zerg--",
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Как зовут Свонна?",
        ["Габриэль", "Джеймс", "Рори"],
        [
            "this.score.terran--",
            "this.score.terran--",
            "this.score.terran++"
        ]
    ],
    [
        "Феникс - ",
        ["Тамплиер", "Неразим", "Чистильщик", "Талдарим"],
        [
            "this.score.protoss--",
            "this.score.protoss--",
            "this.score.protoss++",
            "this.score.protoss--"
        ]
    ],
    [
        "Вам необходимо догнать материнский корабль протоссов",
        ["Использую гиперпрыжок", "Перехвачу его, внедрив паразит", "Отправлю челнок с посланием"],
        [
            "this.score.terran++; this.score.zerg--; this.score.protoss--",
            "this.score.zerg++; this.score.protoss--; this.score.terran--",
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Зерги заразили командные центры Вирофагами",
        ["Нужно уничтожить всех, чтобы эпидемия не распространилась", "Сжечь только зараженные строения и спасти как можно больше людей"],
        [
            "this.score.protoss++; this.score.terran--",
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Пустота…",
        ["Лучший друг человека", "Холодна"],
        [
            "this.score.protoss--",
            "this.score.protoss++"
        ]
    ],
    [
        "Как вы поприветствуете Джеймса Рейнора",
        ["Друг Рейнор", "Привет, ковбой", "Мне нужна твоя эссенция"],
        [
            "this.score.protoss++; this.score.terran--",
            "this.score.terran++; this.score.protoss--",
            "this.score.primal++; this.score.protoss--; this.score.terran--"
        ]
    ],
    [
        "Вы собрали много кредитов на продаже терразина",
        ["Нанять лучших головорезов доминиона", "Усовершенствовать технологии", "Отправить их в фонд Мёбиуса для изучения гибридов"],
        [
            "this.score.terran++",
            "this.score.terran+=2",
            "this.score.terran--"
        ]
    ],
    [
        "Амун собирается уничтожить Айур",
        ["Помочь протоссам в битве", "Послать челноки на Шакурас и запросить помощь Золотой Армады", "Вызвать Флот Смерти и дать Амуну бой"],
        [
            "this.score.terran++; this.score.protoss--",
            "this.score.protoss++; this.score.zerg--",
            "this.score.taldarim++; this.score.zerg--"
        ]
    ],
    [
        "Зачем вы прилетели на Чар?",
        ["Выследить и убить королеву клинков", "Найти Керриган и убедить вернуться на Мар-Сару", "Искупаться в слизи"],
        [
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2",
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2",
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--"
        ]
    ]
];
/* Данные для экранов резултата для каждой расы */
const results = {
    'zerg': {
        name: "Зерг",
        description: "Вы истинный зерг, чистота эссенции и служение во славу роя это ваше предназначение. Ваша стая захватила множество миров и теперь рой стал ещё сильней. Королева Клинков довольна вами, продолжайте и дальше служить ей. Вы уважаете протоссов, но не считаете что у них есть шанс сохраниться как вид. Ведь они не могут эволюционировать и в масштабах вселенной их раса обречена на вымирание. Тераны это биомасса, их эссенция может быть ассимилирована и использована во благо роя.",
        quote1: "-Понятие совершенства растяжимо. Можно стремиться, невозможно достичь. Совершенство, как цель, лишено смысла.",
        quote2: "-Смерть не имеет значения, важна только эссенция.",
        author: "(Абатур)",
        points: "100"
    },
    'primal': {
        name: "Изначальный зерг",
        description: "Всё что вас интересует – это Эссенция, чем её больше тем лучше для вас. Вы эволюционируете, адаптируетесь и подстраиваетесь под окружающую среду. Нет таких проблем, которые вы не решите. Благодаря постоянному сбору эссенции вы можете в любой момент измениться. Эссенция это ваш образ жизни. Так много видов эссенции. Сотни видов. И с каждым годом всё больше. Нужно её всю собрать.",
        quote1: "-Мне нужна эссенция. Эссенция это жизнь. Я жить без неё не могу.",
        quote2: "",
        author: "(Дехака)",
        points: "120"
    },
    'terran': {
        name: "Терран",
        description: "Вас не интересуют проблемы протоссов и зергов, вечная вражда и опустошение миров. Кровавый след, который тянется с незапамятных времён за этими враждующими расами затрагивает и терранов, как бы сильно вы не старались не вмешиваться. Избежать контакта с протоссами не получилось, но с ними можно договориться в отличии от зергов. Простые человеческие радости украшают вашу жизнь. Общение с друзьями, поход в бар с хорошей музыкой, отдых на природе. Что еще нужно человеку.",
        quote1: "-Не связывайтесь с ребятами с Мар-Сары.",
        quote2: "",
        author: "(Рейнор)",
        points: "90"
    },
    'infested': {
        name: "Заражённый терран",
        description: "Судя по всему вас заразили зерги, теперь вы служите рою. Но это не мешает вам мечтать о мести зергам.",
        quote1: "-Зараженные всегда поднимаются вновь.",
        quote2: "-Когда ОЗД вернется в сектор, от вас ничего не останется.",
        author: "(Стуков)",
        points: "160"
    },
    'protoss': {
        name: "Протосс",
        description: "Вы горды и безупречны. Честь ведёт вас сквозь пучину неприятностей, которые подстерегают ваш народ со времён войны со Сверхразумом. За Айур вы готовы сражаться до смерти. Все протоссы стремятся быть похожими на вас. У вашего народа вечная вражда с зергами, очищать миры от их скверны и уничтожать улей за ульем вот что является вашей первостепенной целью. Пока зерги не будут уничтожены, протоссы не смогут спать спокойно.",
        quote1: "-Сила в единстве.",
        quote2: "",
        author: "(Артанис)",
        points: "80"
    },
    'taldarim': {
        name: "Талдарим",
        description: "В былые времена вы служили Амуну, падшему Зел-Нага, сейчас же ваш народ обрёл свободу. После того как Аларак стал владыкой талдаримов победив Малаша в поединке Рак-Шир, он не просто изменил свой статус в цепи вознесения, но и привел талдаримов к мирному сосуществованию с другими народами протоссов. Теперь можно восстанавливать свои миры как один единый сильный народ. И ваши навыки будут очень полезны в этой непростой задаче.",
        quote1: "-Ты разговариваешь с владыкой.",
        quote2: "-Как ты можешь мне послужить?",
        author: "(Аларак)",
        points: "140"
    },
    'hybrid': {
        name: "Гибрид",
        description: "Чистота формы и чистота эссенции присутствует в вашем организме. Вы одно из немногих существ, которых стремились создать Зел-Нага. Доктор Наруд сумел воплотить все планы Зел-Нага в жизнь и теперь вы идеальное орудие. Не смотря на то что вы гибрид зерга и протосса вы не чувствуете симпатии к этим расам, а считаете высшей расой Гибридов.",
        quote1: "-Всё только начинается. Амун шептал об этом с далёких звёзд.",
        quote2: "",
        author: "(Наруд)",
        points: "200"
    }
}

let app = new Vue({
    el: '.main',
    data: {
        showMain: true,
        showSocial: false,
        showAchievements: false,
        showQuestions: false,
        showResult: false,
        number: 0,
        score: {
            'zerg': 0,
            'primal': 0,
            'protoss': 0,
            'taldarim': 0,
            'terran': 0,
        },
        totalGame: localStorage.getItem('sc2TotalGame') ? JSON.parse(localStorage.getItem('sc2TotalGame')) :
            {
                'zerg': 0,
                'primal': 0,
                'protoss': 0,
                'taldarim': 0,
                'terran': 0,
                'infested': 0,
                'hybrid': 0,
            },
        totalGames: localStorage.getItem('sc2TotalGames') ? localStorage.getItem('sc2TotalGames') : 0,
        questions: questions,
        results: results,
        resultRace: 'infested',
    },
    methods: {
        goToMain() {
            this.showMain = true
            this.showSocial = false
            this.showAchievements = false
            this.showQuestions = false
            this.showResult = false
        },
        goToSocial() {
            this.showMain = false
            this.showSocial = true
            this.showAchievements = false
            this.showQuestions = false
            this.showResult = false
        },
        goToAchievements() {
            if (this.totalGames > 0) {
                this.showMain = false
                this.showSocial = false
                this.showAchievements = true
                this.showQuestions = false
                this.showResult = false
            } else {
                this.goToQuestions()
            }
        },
        goToQuestions() {
            this.score = {
                'zerg': 0,
                'primal': 0,
                'protoss': 0,
                'taldarim': 0,
                'terran': 0,
            }
            this.number =0;
            this.showMain = false
            this.showSocial = false
            this.showAchievements = false
            this.showQuestions = true
            this.showResult = false
        },
        goToResults(race) {
            this.showMain = false
            this.showSocial = false
            this.showAchievements = false
            this.showQuestions = false
            this.showResult = true
            this.resultRace = race
        },
        nextQuestion(answer) {
            if (this.number == 24) {
                this.number == 0
                this.endGame()
            } else {
                this.number++
            }
            eval(answer)
        },
        endGame() {
            this.totalGames++;
            localStorage.setItem('sc2TotalGames', this.totalGames);
            // Zerg
            if (this.score.zerg > this.score.protoss && this.score.zerg > this.score.terran && this.score.primal < 8 && Math.abs(this.score.protoss - this.score.zerg) > 3) {
                this.goToResults('zerg')
                this.totalGame.zerg++;
            }
            // Primal
            else if (this.score.primal > this.score.protoss && this.score.primal > this.score.terran && this.score.primal == 8) {
                this.goToResults('primal')
                this.totalGame.primal++
            }
            // Protoss
            else if (this.score.protoss > this.score.zerg && this.score.protoss > this.score.terran && this.score.taldarim < 5 &&
                Math.abs(this.score.protoss - this.score.zerg) > 3) {
                this.goToResults('protoss')
                this.totalGame.protoss++
            }
            // Taldarim
            else if (this.score.protoss > this.score.zerg && this.score.protoss > this.score.terran && this.score.taldarim == 5) {
                this.goToResults('taldarim')
                this.totalGame.taldarim++
            }
            // Terran
            else if (this.score.terran > this.score.zerg && this.score.terran > this.score.protoss) {
                this.goToResults('terran')
                this.totalGame.terran++
            }
            // Hybrid
            else if (Math.abs(this.score.protoss - this.score.zerg) <= 3) {
                this.goToResults('hybrid')
                this.totalGame.hybrid++
            }
            // Infested
            else {
                this.goToResults('infested')
                this.totalGame.infested++
            }
            localStorage.setItem('sc2TotalGame', JSON.stringify(this.totalGame))
        }
    },

    computed: {
        totalScore() {
            let score = 0
            for (let i in this.totalGame) {
                score += (this.totalGame[i] * results[i].points)
            }
            return score
        },
        openRaces() {
            let count = 0
            for (let i in this.totalGame) {
                if (this.totalGame[i] > 0) count++
            }
            return count
        },
        favoriteRaces() {
            let max = 'zerg'
            for (let i in this.totalGame) {
                if(this.totalGame[i]>this.totalGame[max]) {
                    max = i
                }
                return results[max].name
            }
        },
        showResultRace() {
            return {
                'zerg': this.totalGame.zerg > 0 ? true : false,
                'primal': this.totalGame.primal > 0 ? true : false,
                'protoss': this.totalGame.protoss > 0 ? true : false,
                'taldarim': this.totalGame.taldarim > 0 ? true : false,
                'terran': this.totalGame.terran > 0 ? true : false,
                'infested': this.totalGame.infested > 0 ? true : false,
                'hybrid': this.totalGame.hybrid > 0 ? true : false,
            }
        }
    }
})

/* Звук */
let audio = new Audio ('audio/soundtrack.mp3')
let audio_btn = document.querySelector('.btn_sound')
let audio_icon = document.querySelector('.btn_sound i')
audio.muted = true;
audio.autoplay = true;
audio.volume = 0.2
audio.addEventListener ('loadmetadata', function() {
    audio.currentTime = 0 + Math.random () * (audio.duration + 1 - 0)
})
audio_btn.addEventListener('click', function() {
    if(audio.muted) {
        audio.muted = false
        audio_icon.classList.add('fa-volume-up')
        audio_icon.classList.remove('fa-volume-off')
    } else if(!audio.muted) {
            audio.muted= true
        audio_icon.classList.add('fa-volume-off')
        audio_icon.classList.remove( 'fa-volume-up')
}
})