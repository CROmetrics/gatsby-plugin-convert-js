const React = require("react");

exports.onRenderBody = function ({ setHeadComponents }, pluginOptions) {
  const convertId = pluginOptions.convertId;

  if (convertId){
    const script = <script key="convert-snippet" src={`https://cdn-3.convertexperiments.com/js/${convertId}.js`} />;
    setHeadComponents([script]);
  }else{
    console.error(`gatsby-plugin-convert-js plugin is unable to add the Convert snippet! "convertId" option is required.`);
  }
};
