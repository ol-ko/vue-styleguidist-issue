module.exports = {
  // set your styleguidist configuration here
  title: "Default Style Guide",
  components: 'src/components/**/[A-Z]*.vue',
  defaultExample: true,
  sections: [
    {
      name: 'First Section',
      components: 'src/components/**/[A-Z]*.vue',
      content: 'src/components/first-section.md',
      sectionDepth: 1
    }
  ],
  // webpackConfig: {
  //   // custom config goes here
  // },
  exampleMode: "expand",
  pagePerSection: true,
};
