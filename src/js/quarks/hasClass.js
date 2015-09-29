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