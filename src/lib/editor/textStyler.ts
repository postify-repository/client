import {
  Decoration,
  DecorationSet,
  EditorView,
  RangeSetBuilder,
  ViewPlugin,
  ViewUpdate,
} from "@uiw/react-codemirror";

const patterns = [
  {
    regex: /\*\*([^\*]+?)\*\*/g,
    className: "cm-bold",
  },
  {
    regex: /\_([^_]+?)\_/g,
    className: "cm-italic",
  },
];

export const textStyler = ViewPlugin.fromClass(
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
        let pos = from;

        while (pos <= to) {
          const line = view.state.doc.lineAt(pos);
          const text = line.text;
          const lineStart = line.from;

          for (const { regex, className } of patterns) {
            let match;
            while ((match = regex.exec(text)) !== null) {
              const matchText = match[0];
              const start = lineStart + match.index;
              const end = start + matchText.length;

              const deco = Decoration.mark({
                tagName: "span",
                class: className,
              });

              builder.add(start, end, deco);
            }
          }

          pos = line.to + 1;
        }
      }

      return builder.finish();
    }
  },
  {
    decorations: (plugin) => plugin.decorations,
  },
);
