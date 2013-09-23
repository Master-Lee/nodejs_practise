exports.page = function(title, content) {

  console.log(content);
  return [
    '<html><head><title>{title}</title></head>',
    '<body><h1>{title}</h1>',
    '{content}',
    '</body></html>'
  ].join('\n')
  .replace(/{title}/g, title)
  .replace('{content}', content);
};