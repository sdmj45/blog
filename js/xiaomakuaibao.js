/*
ul = $('#post-xiaomakuaibao').find('div.article-entry');
ul.children('p').each(function(i,li){ul.prepend(li)})*/

var list = $('#post-xiaomakuaibao').find('div.article-entry');
var listItems = list.children('p');
list.append(listItems.get().reverse());
