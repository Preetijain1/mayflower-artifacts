module.exports = function(name) {
  if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      $.ajax({
          url : '/assets/js/templates/' + name + '.html',
          success : function(data) {
              if (Handlebars.templates === undefined) {
                  Handlebars.templates = {};
              }
              Handlebars.templates[name] = Handlebars.compile(data);
          },
          async : false
      });
  }
  return Handlebars.templates[name];
};
