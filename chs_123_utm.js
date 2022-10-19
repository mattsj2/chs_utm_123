jQuery(document).ready(function() {
  setTimeout(function() {
    var parentFrame = window.location;
    var urlObject = new URL(parentFrame);
    var utm_source = urlObject.searchParams.get('utm_source');
    var utm_medium = urlObject.searchParams.get('utm_medium');
    var utm_campaign = urlObject.searchParams.get('utm_campaign');
    var utm_content = urlObject.searchParams.get('utm_content');
    var utm_term = urlObject.searchParams.get('utm_term');


    var desiredControl = loader.getEngine().getDocument().getControlsList().find(function(control) { 
      return control.id === 103823005; // the desired control id
    });
    desiredControl.setValue({value: utm_source});


    var desiredControl2 = loader.getEngine().getDocument().getControlsList().find(function(control) { 
      return control.id === 103823351; // the desired control id
    });
    desiredControl2.setValue({value: utm_medium});


    var desiredControl3 = loader.getEngine().getDocument().getControlsList().find(function(control) { 
      return control.id === 103823078; // the desired control id
    });
    desiredControl3.setValue({value: utm_campaign});


    var desiredControl4 = loader.getEngine().getDocument().getControlsList().find(function(control) { 
      return control.id === 103929505; // the desired control id
    });
    desiredControl4.setValue({value: utm_content});


    var desiredControl5 = loader.getEngine().getDocument().getControlsList().find(function(control) { 
      return control.id === 103929506; // the desired control id
    });
    desiredControl5.setValue({value: utm_term});
    console.log('custom static resource loaded');
  }, 2000);
});