require('../node_modules/reveal.js/css/reveal.scss');
require('../node_modules/reveal.js/css/theme/moon.css');

import Reveal from 'reveal.js'
import head from 'reveal.js/lib/js/head.min.js'
import slides from './slides.js'

window.Reveal = Reveal;

let slidesDiv = document.getElementById('slides');
for (let slide of slides) {
    let section = document.createElement('section');
    section.dataset.markdown = 'slides/' + slide;
    section.dataset.separator = "^------";
    section.dataset.separatorVertical = "^---";
    section.dataset.separatorNotes = "^Info:";

    slidesDiv.appendChild(section);
}

Reveal.initialize({
  history: true,
  slideNumber: true,
  dependencies: [
  { src: 'node_modules/reveal.js/plugin/markdown/marked.js' },
  { src: 'node_modules/reveal.js/plugin/markdown/markdown.js' },
  { src: 'node_modules/reveal.js/plugin/notes/notes.js', async: true },
  { src: 'node_modules/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});
