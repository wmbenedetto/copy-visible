define(function(require, exports, module) {
    var Extensions = require('ft/core/extensions').Extensions,
        Pasteboard = require('ft/system/pasteboard').Pasteboard;

    Extensions.addCommand({
        name: 'copy-visible',
        description: 'Copy visible text',
        performCommand: function(editor) {
            var tree = editor.tree(),
                results = [];

            tree.nodes().forEach(function(each) {
                if (!editor.nodeIsHiddenInFold(each)) {
                    results.push(each.line());
                }
            });

            Pasteboard.writeString(results.join('\n'));
        }
    });

	Extensions.add('com.foldingtext.editor.init', function (editor) {
      editor.addKeyMap({
        'Cmd-Ctrl-C' : 'copy-visible'
      })
    });
});
