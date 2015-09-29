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
          var tab = line.trim().length < 1 ? new Array(tabSize + 1).join(' ') : '';
          return tab + line;
        });
      };

  quarks = quarks.map(function(quark)
  {
    var bn = quark.split('function ')[1].split('('),
        params = bn[1].split(')')[0],
        fn = bn[0].trim(),
        fnStr = fn + ': ' + fn,
        lines = quark.split('\n');

    quarks_returns.push(fnStr);
    return indent(lines, 2).join('\n');
  });

  var editHint = '/* THIS FILE HAS BEEN GENERATED, DO NOT EDIT */\n\n',
      template = editHint +
                 'window.V = function(selector)\n' +
                 '{\n'+
                 '  var elements = typeof(selector) === \'string\' ? [].slice.call(document.querySelectorAll(selector)) : [selector];\n' +
                 '' + quarks.join('') + '\n' +
                 '  function self()\n' +
                 '  {\n' +
                 '    return {\n'+
                        indent(quarks_returns, 6).join(',\n') + '\n' +
                 '    };\n'+
                 '  }\n' +
                 '  return self();\n'+
                 '};\n\n' +
                 editHint;

  return template;
};

