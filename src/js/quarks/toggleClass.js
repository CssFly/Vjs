function toggleClass(className)
{
  elements.map(function(element)
  {
    element.classList.toggle(className);
  });
}