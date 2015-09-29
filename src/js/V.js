/* THIS FILE HAS BEEN GENERATED, DO NOT EDIT */

window.V = function(selector)
{
  var elements = typeof(selector) === 'string' ? [].slice.call(document.querySelectorAll(selector)) : [selector];
  function addClass(className)
  {
    elements.map(function(element)
    {
      element.classList.add(className);
    });
  }
  function hasClass(className)
  {
    var classExists = false;

    elements.map(function(element)
    {
      if(element.classList.contains(className))
      {
        classExists = true;
      }
    });
    return classExists;
  }
  function removeClass(className)
  {
    elements.map(function(element)
    {
      element.classList.remove(className);
    });
  }
  function toggleClass(className)
  {
    elements.map(function(element)
    {
      element.classList.toggle(className);
    });
  }
  return {
    addClass: function(className){addClass(className); return new V(selector); },
    hasClass: function(className){hasClass(className); return new V(selector); },
    removeClass: function(className){removeClass(className); return new V(selector); },
    toggleClass: function(className){toggleClass(className); return new V(selector); }
  };
};

/* THIS FILE HAS BEEN GENERATED, DO NOT EDIT */

