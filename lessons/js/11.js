// 1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

///

const body = document.body.querySelector('#app');

const list = document.createElement('ul');

const result = technologies.map(tech => {
  const li = document.createElement('li');
  li.textContent = tech;
  return li;
}).reduce((accumulator, currentElement) => {
  accumulator.append(currentElement);
  return accumulator;
}, list);

body.append(result);

//// 2. Створити кілька кнопок на основі масива з обєктами використовуючи createElement

const colors = [
  {
    label: "red",
    color: "#FF0000",
  },
  {
    label: "green",
    color: "#00FF00",
  },
  {
    label: "blue",
    color: "#0000FF",
  },
  {
    label: "yellow",
    color: "#FFFF00",
  },
];

////

const body = document.body.querySelector('#app');

colors.forEach(({ label, color} ) => {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.style.backgroundColor = color;
  body.append(btn);
});


///3. Створити сайт з такою розміткою використовуючи лише JS в html файлі має бути пусто

<main id="main">

<h1 id="title">- Michel Legrand -</h1>

<figure id="img-div">
    <img id="image"
        src="https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg"
        alt="Michel Legrand conducting his orchestra.">
    <figcaption id="img-caption">Michel Legrand conducting his orcherstra.</figcaption>
</figure>

<article id="tribute-info">
    <div id="intro">
        <p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;</p>
    </div>
    <p><u>Here are some major facts about him:</u></p>
    <ul>
        <li>He was born in Paris, France on February 24<sup>th</sup>, 1932.</li>
        <li>His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of
            a
            conductor.</li>
        <li>His sister was a Soprano and a member of the Swingle Singers.</li>
        <li>Along his career, he composed more than two hundred film and television scores.</li>
        <li>He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.</li>
        <li>He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.</li>
        <li>He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the
            American Hospital of Paris.</li>
        <li>He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.</li>
    </ul>
    <blockquote id="quote">
        <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
        <cite>-- Michel Legrand</cite>
    </blockquote>
    <hr>
    <p>To find out more about him, feel free to have a look at his biography on <a id="tribute-link"
            href="https://en.wikipedia.org/wiki/Michel_Legrand" target="_blank">Wikipedia</a>.</p>
</article>
</main>

{/* ///// */}

const body = document.body;

const createElementWithParams = (name, params = null) => {
  const el = document.createElement(name);
  if (params) {
    Object.entries(params).forEach(param => {
      el[param[0]] = param[1];
    });
  }
  
  return el;
};

const main = createElementWithParams('main', { id: 'main' });

body.append(main);

const h1 = createElementWithParams('h1', { id: 'title', textContent: '- Michel Legrand -' });
const figure = createElementWithParams('figure', { id: 'img-div' });
const article = createElementWithParams('article', { id: 'tribute-info' });

main.append(h1, figure, article);

const img = createElementWithParams(
  'img',
  {
    src: 'https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg',
    alt: 'Michel Legrand conducting his orchestra.'
  }
);

const caption = createElementWithParams('figcaption', { id: 'img-caption', textContent: 'Michel Legrand conducting his orcherstra.' });

figure.append(img, caption);

const intro = createElementWithParams('div', { id: 'intro' });
const title = createElementWithParams('p');
const list = createElementWithParams('ul');
const quote = createElementWithParams('blackquote', { id: 'quote' });
const postText = createElementWithParams('p', { textContent: 'To find out more about him, feel free to have a look at his biography on '});

article.append(intro, title, list, quote, createElementWithParams('hr'), postText);

intro.append(createElementWithParams('p', { innerHTML: '&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;' }));
title.append(createElementWithParams('u', { textContent: 'Here are some major facts about him:' }));
list.append(createElementWithParams('li', { innerHTML: 'He was born in Paris, France on February 24<sup>th</sup>, 1932.'}));
list.append(createElementWithParams('li', { textContent: 'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.'}));
list.append(createElementWithParams('li', { textContent: 'His sister was a Soprano and a member of the Swingle Singers.'}));
list.append(createElementWithParams('li', { textContent: 'Along his career, he composed more than two hundred film and television scores.'}));
list.append(createElementWithParams('li', { textContent: 'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.'}));
list.append(createElementWithParams('li', { textContent: 'He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.'}));
list.append(createElementWithParams('li', { innerHTML: 'He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital of Paris.'}));
list.append(createElementWithParams('li', { textContent: 'He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.'}));
quote.append(createElementWithParams('p', { textContent: 'Writing is a mental thing, while playing is essentially a physical feeling.' }));
quote.append(createElementWithParams('cite', { textContent: '-- Michel Legrand' }));
postText.append(createElementWithParams('a', { id: 'tribute-link', href: 'https://en.wikipedia.org/wiki/Michel_Legrand', target: '_blank', textContent: 'Wikipedia' }));