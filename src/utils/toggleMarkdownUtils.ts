import { EditorView } from "@uiw/react-codemirror";

interface MarkdownStyle {
  type: "heading" | "inline" | "quote" | "code";
  level?: 1 | 2 | 3 | 4;
  marker?: string;
}

export const toggleMarkdownStyle = (view: EditorView, style: MarkdownStyle) => {
  if (!view) return;

  const { state } = view;
  const selection = state.selection.main;
  const doc = state.doc;

  const selectedText = state.sliceDoc(selection.from, selection.to);

  // Heading 로직
  if (style.type === "heading") {
    const line = doc.lineAt(selection.from);
    const lineStart = line.from;
    const lineText = state.sliceDoc(lineStart, lineStart + line.length);

    const headingRegex = /^(#{1,4})\s+/;
    const match = lineText.match(headingRegex);
    const existingLevel = match?.[1]?.length ?? 0;
    const headingPrefix = "#".repeat(style.level ?? 1) + " ";

    if (existingLevel === style.level) return;

    const deleteFrom = lineStart;
    const deleteTo = match ? lineStart + match[0].length : lineStart;
    const offset = headingPrefix.length - (match?.[0].length ?? 0);

    view.dispatch({
      changes: {
        from: deleteFrom,
        to: deleteTo,
        insert: headingPrefix,
      },
      selection: {
        anchor: selection.anchor + offset,
        head: selection.head + offset,
      },
      scrollIntoView: true,
    });
    return;
  }

  // 볼드, 이태릭, 글삭제 로직
  if (style.type === "inline") {
    const marker = style.marker;
    const markerLength = marker?.length ?? 0;

    if (!selection.empty) {
      const before = state.sliceDoc(
        selection.from - markerLength,
        selection.from,
      );
      const after = state.sliceDoc(selection.to, selection.to + markerLength);
      const isWrapped = before === marker && after === marker;

      if (isWrapped) {
        view.dispatch({
          changes: [
            { from: selection.to, to: selection.to + markerLength, insert: "" },
            {
              from: selection.from - markerLength,
              to: selection.from,
              insert: "",
            },
          ],
          selection: {
            anchor: selection.anchor - markerLength,
            head: selection.head - markerLength,
          },
          scrollIntoView: true,
        });
        return;
      } else {
        view.dispatch({
          changes: {
            from: selection.from,
            to: selection.to,
            insert: marker + selectedText + marker,
          },
          selection: {
            anchor: selection.anchor + markerLength,
            head: selection.head + markerLength,
          },
          scrollIntoView: true,
        });
        return;
      }
    } else {
      const placeholder = "텍스트";
      const insertText = marker + placeholder + marker;

      view.dispatch({
        changes: {
          from: selection.from,
          to: selection.to,
          insert: insertText,
        },
        selection: {
          anchor: selection.from + markerLength,
          head: selection.from + markerLength + placeholder.length,
        },
        scrollIntoView: true,
      });
      return;
    }
  }

  // 인용 로직
  if (style.type === "quote") {
    const line = doc.lineAt(selection.from);
    const lineStart = line.from;
    const lineText = state.sliceDoc(lineStart, lineStart + line.length);

    const hasQuote = lineText.startsWith("> ");

    view.dispatch({
      changes: {
        from: lineStart,
        to: hasQuote ? lineStart + 2 : lineStart,
        insert: hasQuote ? "" : "> ",
      },
      selection: {
        anchor: selection.anchor + (hasQuote ? -2 : 2),
        head: selection.head + (hasQuote ? -2 : 2),
      },
      scrollIntoView: true,
    });
    return;
  }
  // 코드 로직
  if (style.type === "code") {
    const marker = "```";
    const newline = "\n";
    const openMarker = marker + newline;
    const closeMarker = newline + marker;

    if (!selection.empty) {
      const before = state.sliceDoc(
        selection.from - openMarker.length,
        selection.from,
      );
      const after = state.sliceDoc(
        selection.to,
        selection.to + closeMarker.length,
      );
      const isWrapped = before === openMarker && after === closeMarker;

      if (isWrapped) {
        view.dispatch({
          changes: [
            {
              from: selection.to,
              to: selection.to + closeMarker.length,
              insert: "",
            },
            {
              from: selection.from - openMarker.length,
              to: selection.from,
              insert: "",
            },
          ],
          selection: {
            anchor: selection.anchor - openMarker.length,
            head: selection.head - openMarker.length,
          },
          scrollIntoView: true,
        });
        return;
      } else {
        const insertText = openMarker + selectedText + closeMarker;
        view.dispatch({
          changes: {
            from: selection.from,
            to: selection.to,
            insert: insertText,
          },
          selection: {
            anchor: selection.anchor + openMarker.length,
            head: selection.head + openMarker.length,
          },
          scrollIntoView: true,
        });
        return;
      }
    }

    const placeholder = "코드";
    const insertText = openMarker + placeholder + closeMarker;
    view.dispatch({
      changes: {
        from: selection.from,
        to: selection.to,
        insert: insertText,
      },
      selection: {
        anchor: selection.from + openMarker.length,
        head: selection.from + openMarker.length + placeholder.length,
      },
      scrollIntoView: true,
    });
  }
};
