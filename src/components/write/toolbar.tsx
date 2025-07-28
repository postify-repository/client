import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Bold,
  Italic,
  Strikethrough,
  Quote,
  Image,
  Link,
  Code,
} from "lucide-react";
import { EditorView } from "@uiw/react-codemirror";
import { toggleMarkdownStyle } from "@/utils/toggleMarkdownUtils";

interface ToolbarProps {
  view: EditorView;
}

interface ToolbarItem {
  id: string;
  items: {
    icon: React.ReactNode;
    onClick: () => void;
    label: string;
  }[];
}

export default function Toolbar({ view }: ToolbarProps) {
  const toolbarItems: ToolbarItem[] = [
    {
      id: "toolbar-heading",
      items: [
        {
          icon: <Heading1 />,
          onClick: () => {
            toggleMarkdownStyle(view, { type: "heading", level: 1 });
          },
          label: "Heading1",
        },
        {
          icon: <Heading2 />,
          onClick: () => {
            toggleMarkdownStyle(view, { type: "heading", level: 2 });
          },
          label: "Heading2",
        },
        {
          icon: <Heading3 />,
          onClick: () => {
            toggleMarkdownStyle(view, { type: "heading", level: 3 });
          },
          label: "Heading3",
        },
        {
          icon: <Heading4 />,
          onClick: () => {
            toggleMarkdownStyle(view, { type: "heading", level: 4 });
          },
          label: "Heading4",
        },
      ],
    },
    {
      id: "toolbar-word",
      items: [
        {
          icon: <Bold />,
          onClick: () => {
            toggleMarkdownStyle(view, { type: "inline", marker: "**" });
          },
          label: "Bold",
        },
        {
          icon: <Italic />,
          onClick: () => {
            toggleMarkdownStyle(view, { type: "inline", marker: "__" });
          },
          label: "Italic",
        },
        {
          icon: <Strikethrough />,
          onClick: () => {
            toggleMarkdownStyle(view, { type: "inline", marker: "~~" });
          },
          label: "Strikethrough",
        },
      ],
    },
    {
      id: "toolbar-etc",
      items: [
        {
          icon: <Quote />,
          onClick: () => {
            toggleMarkdownStyle(view, { type: "quote" });
          },
          label: "Quote",
        },
        {
          icon: <Image />,
          onClick: () => {
            console.log("Image");
          },
          label: "Image",
        },
        {
          icon: <Link />,
          onClick: () => {
            console.log("Link");
          },
          label: "Link",
        },
        {
          icon: <Code />,
          onClick: () => {
            toggleMarkdownStyle(view, { type: "code" });
          },
          label: "Code",
        },
      ],
    },
  ];
  return (
    <div
      id="toolbar"
      className="w-full flex flex-wrap gap-10 text-gray-500 items-center mb-5"
    >
      {toolbarItems.map((item) => (
        <div key={item.id} id={item.id} className="flex gap-2">
          {item.items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100/50"
              onClick={item.onClick}
            >
              {item.icon}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
