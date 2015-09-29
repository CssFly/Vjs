function removeClass(className)
{
  elements.map(function(element)
  {
    element.classList.remove(className);
  });
}