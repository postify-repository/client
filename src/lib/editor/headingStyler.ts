import {
  Decoration,
  DecorationSet,
  EditorView,
  RangeSetBuilder,
  ViewPlugin,
  ViewUpdate,
} from "@uiw/react-codemirror";

export const headingStyler = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;

    constructor(view: EditorView) {
      this.decorations = this.getDecorations(view);
    }

    update(update: ViewUpdate) {
      if (update.docChanged || update.viewportChanged) {
        this.decorations = this.getDecorations(update.view);
      }
    }

    getDecorations(view: EditorView): DecorationSet {
      const builder = new RangeSetBuilder<Decoration>();

      for (const { from, to } of view.visibleRanges) {
        let line = view.state.doc.lineAt(from);
        while (line.from <= to) {
          const text = line.text;
          if (/^#{1,4} /.test(text)) {
            const level = text.match(/^#{1,4}/)?.[0].length || 1;
            const deco = Decoration.line({
              attributes: { class: `cm-heading-${level}` },
            });
            builder.add(line.from, line.from, deco);
          }
          if (line.to + 1 > view.state.doc.length) break;
          line = view.state.doc.lineAt(line.to + 1);
        }
      }
      return builder.finish();
    }
  },
  {
    decorations: (plugin) => plugin.decorations,
  },
);
