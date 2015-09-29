var FILE_SPLIT = '<!--quark-->';

exports.wrapAnonymous = function(content)
{
  return '(function(window) {' + content + '})(window);';
};

exports.constructV = function(content)
{
  var quarks = content.split(FILE_SPLIT),
      quarks_returns = [],
      indent = function(lines, tabSize)
      {
        return lines.map(function(line)
        {
          var tab = new Array(tabSize + 1).join(' ');
          if(line.trim().length < 1)
          {
            tab = '';
          }
          return tab + line;
        });
      };

  quarks = quarks.map(function(quark){
    var bn = quark.split('function ')[1].split('('),
        params = bn[1].split(')')[0],
        fn = bn[0].trim(),
        fnStr = fn + ': function(' + params + '){' + fn + '(' + params + '); return new V(selector); }',
        lines = quark.split('\n');

    quarks_returns.push(fnStr);
    lines = indent(lines, 2);
    return lines.join('\n');
  });

  var EDIT_HINT = '/* THIS FILE HAS BEEN GENERATED, DO NOT EDIT */\n\n';
  var template = EDIT_HINT +
                 'window.V = function(selector)\n' +
                 '{\n'+
                 '  var elements = typeof(selector) === \'string\' ? [].slice.call(document.querySelectorAll(selector)) : [selector];\n' +
                 '' + quarks.join('') + '\n' +
                 '  return {\n'+
                 '' + indent(quarks_returns, 4).join(',\n') + '\n' +
                 '  };\n'+
                 '};\n\n' +
                 EDIT_HINT;

  return template;
};