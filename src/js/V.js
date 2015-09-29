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
  function self()
  {
    return {
addClass: addClass,
hasClass: hasClass,
removeClass: removeClass,
toggleClass: toggleClass
    };
  }
  return self();
};

/* THIS FILE HAS BEEN GENERATED, DO NOT EDIT */

