console.log('calleddankscript');

function replaceTextOnPage(from, to){
  console.log('calledReplaceText');
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
  console.log(document.getElementById('input'));
  var search = document.getElementById('input').value;
  var repl = document.getElementById('rplc').value;
  replaceTextOnPage(search, repl);
  console.log("Search: " + search + ", Repl: " + repl); 
  return false; 
}
/*
document.addEventListener('load', function(){
  console.log('load happened');
  document.getElementById('subby').addEventListener('click', dankReplace);
});
*/

replaceTextOnPage('Chiang', 'BOYU');
console.log("Reached 1");
//dankReplace();
document.getElementById('subby').addEventListener('click', dankReplace);


//This is tied to the run_at in manifest and to background
//window.addEventListener("load", function(){replaceTextOnPage('Kevin', 'ANDREW');}, false)

/*
window.onload = function() {
  document.getElementById('subby').onclick = function() {
    console.log('click');
  }
}

*/

