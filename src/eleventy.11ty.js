module.exports = class Home {
  get data() {
    return {
      title: "eleventy.11ty.js",
    };
  }
  async render(data) {
    // console.log(Object.keys(data).sort());
    const { site, title } = data;
    return `
      <h1>${ data.title }</h1>
      <pre>${ this.foo(data.bar) }</pre>
      <pre>${ this.fooJs("first", "second", site, title)}</pre>
    `;
  }
};

{/* <h1>{{ title }}</h1>
<pre>{{ bar | foo | safe }}</pre>
<pre>{{ "first" | fooNjk("second") | safe }}</pre> */}
