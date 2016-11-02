(function () {
    // More info https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
        history: true,

        // More info https://github.com/hakimel/reveal.js#dependencies
        dependencies: [
            {
                src: 'plugin/markdown/marked.js'
                },
            {
                src: 'plugin/markdown/markdown.js'
                },
            {
                src: 'plugin/zoom-js/zoom.js',
                async: true
                },
            {
                src: 'plugin/notes/notes.js',
                async: true
                },
            {
                src: 'plugin/highlight/highlight.js',
                async: true,
                callback: function () {
                    hljs.initHighlightingOnLoad();
                    hljs.configure({
                        tabReplace: '&#8203;'
                    }); //Remove tabs
                }
                }
				]
    });
})();