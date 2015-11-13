require.config({
  paths: {
    "react": "components/vendor/react/react-with-addons",
    "JSXTransformer": "components/vendor/react/JSXTransformer",
    "jsx": "components/vendor/requirejs-react-jsx/jsx",
    "text": "components/vendor/requirejs-text/text",
    'jquery':'components/vendor/jquery/dist/jquery.min'
  },
  shim : {
    "react": {
      "exports": "React"
    },
    "JSXTransformer": "JSXTransformer"
  },

  config: {
    jsx: {
      fileExtension: ".jsx",
      transformOptions: {
        harmony: true,
        stripTypes: false,
        inlineSourceMap: true
      },
      usePragma: false
    }
  }
});


require(['jsx!../app/router/router'],function(Router){
    Router.start();
})

