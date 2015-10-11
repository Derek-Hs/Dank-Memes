console.log('called');

function replaceTextOnPage(from, to){
  getAllTextNodes().forEach(function(node){
    node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
  });

  function getAllTextNodes(){
    var result = [];

    (function scanSubTree(node){
      if(node.childNodes.length) 
        for(var i = 0; i < node.childNodes.length; i++) 
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE) 
        result.push(node);
    })(document);

    return result;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

function dankReplace() { 
  var search = document.getElementById('input').value;
  var repl = document.getElementById('rplc').value;
  replaceTextOnPage(search, repl);
  console.log("Search: " + search + ", Repl: " + repl); 
  return false; 
}

//replaceTextOnPage('Chiang', 'BOYU');
//This is tied to the run_at in manifest and to background
//window.addEventListener("load", function(){replaceTextOnPage('Kevin', 'ANDREW');}, false)

window.onload = function() {
  document.getElementById('subby').onclick = function() {
    console.log('click');
  }
}

document.addEventListener('load', function(){
  console.log('load happened');
  //document.getElementById('subby').addEventListener('click', dankReplace);
});

