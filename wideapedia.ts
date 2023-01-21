console.log("Wideapedia active.")

addEventListener('DOMContentLoaded', () => {
  // Offending classes
  let class_names = ['mw-page-container', 'mw-content-container']

  // New layout check
  if (document.getElementsByClassName(class_names[0]).length > 0) {
    class_names.forEach(function(class_name) {
      // grab element by classname
      let element = document.getElementsByClassName(class_name)[0]

      // preserve any existing styles
      if (!element.getAttribute('style')) {
        element.setAttribute('style', "")
      }
      let current_style = element.getAttribute('style')

      // remove max-width
      element.setAttribute("style", current_style + " max-width: none;")
    });
  }
});