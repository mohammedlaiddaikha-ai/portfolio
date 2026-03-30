export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: string;
  questions: Question[];
};

export const advancedModules: Module[] = [
  {
    id: "verbs-of-motion",
    title: "Глаголы движения с приставками",
    description: "Advanced verbs of motion with prefixes (по-, при-, у-, вы-, пере-, etc.)",
    icon: "Move",
    level: "B1-B2",
    questions: [
      {
        id: "vom-1",
        question: "Машина _______ к подъезду, и из неё вышел высокий человек.",
        options: ["отъехала", "подъехала", "заехала", "переехала"],
        correctAnswer: "подъехала",
        explanation: "«Подъехать к» means 'to drive up to' or 'to approach' by vehicle."
      },
      {
        id: "vom-2",
        question: "Осторожно, не _______ лужу, она очень глубокая!",
        options: ["перейди", "войди", "наступи", "наступи в"],
        correctAnswer: "наступи в",
        explanation: "While 'перейди' means cross, 'наступи в' (step into) fits the context of a puddle."
      },
      {
        id: "vom-3",
        question: "Нам нужно _______ через дорогу по пешеходному переходу.",
        options: ["пройти", "перейти", "обойти", "уйти"],
        correctAnswer: "перейти",
        explanation: "«Перейти (через)» means 'to cross' (a street, a bridge, etc.) on foot."
      },
      {
        id: "vom-4",
        question: "Вор _______ в дом через открытое окно.",
        options: ["вылез", "залез", "перелез", "слез"],
        correctAnswer: "залез",
        explanation: "«Залезть» means to climb into or sneak into somewhere."
      },
      {
        id: "vom-5",
        question: "Я _______ к тебе на пять минут после работы, если ты не против.",
        options: ["зайду", "уйду", "сойду", "обойду"],
        correctAnswer: "зайду",
        explanation: "«Зайти к кому-то» means 'to drop by' or 'to visit briefly'."
      }
    ]
  },
  {
    id: "participles",
    title: "Причастия и Деепричастия",
    description: "Active and passive participles, verbal adverbs (gerunds).",
    icon: "BookOpen",
    level: "B2-C1",
    questions: [
      {
        id: "part-1",
        question: "Студент, _______ эту книгу, успешно сдал экзамен.",
        options: ["прочитавший", "прочитанный", "читая", "прочитав"],
        correctAnswer: "прочитавший",
        explanation: "«Прочитавший» is the active past participle (the student who read)."
      },
      {
        id: "part-2",
        question: "_______ статью, он начал писать эссе.",
        options: ["Прочитавший", "Прочитанная", "Прочитав", "Читающий"],
        correctAnswer: "Прочитав",
        explanation: "«Прочитав» is a perfective verbal adverb (having read), indicating an action completed before the main verb."
      },
      {
        id: "part-3",
        question: "Книга, _______ известным автором, стала бестселлером.",
        options: ["написавшая", "написанная", "написав", "пишущая"],
        correctAnswer: "написанная",
        explanation: "«Написанная» is the passive past participle (the book written by)."
      },
      {
        id: "part-4",
        question: "Девушка, _______ у окна, смотрела на дождь.",
        options: ["сидевшая", "сидя", "сидетая", "посидев"],
        correctAnswer: "сидевшая",
        explanation: "«Сидевшая» is the active past participle (the girl who was sitting)."
      },
      {
        id: "part-5",
        question: "_______ по улице, я встретил старого друга.",
        options: ["Шедший", "Идя", "Пройдя", "Идущий"],
        correctAnswer: "Идя",
        explanation: "«Идя» is an imperfective verbal adverb (while walking), indicating simultaneous action."
      }
    ]
  },
  {
    id: "idioms",
    title: "Русские Идиомы (Фразеологизмы)",
    description: "Common Russian idioms and fixed expressions.",
    icon: "MessageCircle",
    level: "B2-C1",
    questions: [
      {
        id: "idiom-1",
        question: "Что означает выражение «водить за нос»?",
        options: ["Показывать дорогу", "Обманывать", "Лечить насморк", "Управлять машиной"],
        correctAnswer: "Обманывать",
        explanation: "«Водить за нос» literally means 'to lead by the nose', but idiomatically means 'to deceive' or 'to fool someone'."
      },
      {
        id: "idiom-2",
        question: "Закончите фразу: «Делать из мухи...»",
        options: ["пчелу", "птицу", "слона", "корову"],
        correctAnswer: "слона",
        explanation: "«Делать из мухи слона» means 'to make an elephant out of a fly' (to make a mountain out of a molehill)."
      },
      {
        id: "idiom-3",
        question: "Что значит «бить баклуши»?",
        options: ["Играть на барабанах", "Тяжело работать", "Бездельничать", "Драться"],
        correctAnswer: "Бездельничать",
        explanation: "«Бить баклуши» means 'to twiddle one's thumbs' or 'to idle away time'."
      },
      {
        id: "idiom-4",
        question: "Если человек «зарубил себе на носу», это значит, что он...",
        options: ["Поранился", "Крепко запомнил", "Обиделся", "Заснул"],
        correctAnswer: "Крепко запомнил",
        explanation: "«Зарубить на носу» means 'to hack it on one's nose' – to remember something very well, once and for all."
      },
      {
        id: "idiom-5",
        question: "Что означает «работать спустя рукава»?",
        options: ["Работать очень быстро", "Работать в жаркую погоду", "Работать небрежно, плохо", "Работать физически"],
        correctAnswer: "Работать небрежно, плохо",
        explanation: "«Работать спустя рукава» means 'to work with sleeves rolled down', i.e., to work carelessly or sloppily."
      }
    ]
  }
];
