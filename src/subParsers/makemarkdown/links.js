showdown.subParser('makeMarkdown.links', function (node, globals) {
  'use strict';

  var txt = '';
  if (node.hasChildNodes() && node.hasAttribute('href')) {
    if (node.innerText) {
      if (node.innerText.trim() === node.getAttribute('href').trim()) { return node.getAttribute('href'); }
    }
    var children = node.childNodes,
        childrenLength = children.length;
    txt = '[';
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    txt += '](';
    //we don't need these, and they keep stacking up in plectica
    // txt += '<' + node.getAttribute('href') + '>';
    txt += node.getAttribute('href');
    if (node.hasAttribute('title')) {
      txt += ' "' + node.getAttribute('title') + '"';
    }
    txt += ')';
  }
  return txt;
});
