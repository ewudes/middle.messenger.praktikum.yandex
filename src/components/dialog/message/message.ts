import message from './message.hbs';
import './message.scss';

const msgs = [
  {
    'className': 'mine',
    'text': 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.'
  },
  {
    'className': 'companion',
    'text': 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
  },
  {
    'className': 'mine',
    'text': 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.'
  },
  {
    'className': 'companion',
    'text': 'Здесь ваш текст...',
  },
  {
    'className': 'mine',
    'text': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33'
  },
  {
    'className': 'companion',
    'text': 'Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
  },
  {
    'className': 'mine',
    'text': 'Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
  },
  {
    'className': 'companion',
    'text': 'Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
  },
  {
    'className': 'mine',
    'text': 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.'
  },
  {
    'className': 'companion',
    'text': 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
  },
  {
    'className': 'mine',
    'text': 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.'
  },
  {
    'className': 'companion',
    'text': 'Здесь ваш текст...',
  },
  {
    'className': 'mine',
    'text': 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33'
  },
  {
    'className': 'companion',
    'text': 'Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32',
  },
  {
    'className': 'mine',
    'text': 'Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
  },
  {
    'className': 'companion',
    'text': 'Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
  }
]

export default() => {
  return message({msgs})
}