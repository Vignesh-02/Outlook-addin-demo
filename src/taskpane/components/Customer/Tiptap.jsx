import React, {useState} from 'react';
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import "./Tiptap.css"
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";

// import { TableOfContents, getHierarchicalIndexes } from '@tiptap-pro/extension-table-of-contents'

// define your extension array
const extensions = [
  StarterKit,
  Table.configure({
    resizable: true
  }),
  TableRow,
  TableHeader,
  TableCell
]

const content = "Dear Customer,<br><br>Thank you for choosing us for your material needs. Please find below a detailed breakdown of the quote for your order:<br><br>Order Details:<br><div style='overflow-x:auto;'><table border='1'><tr><th>Material</th><th>Dimensions</th><th>Quantity</th><th>Color</th><th>Availability</th><th>Individual Cost</th><th>Total Cost</th><th>Lead Time</th><th>Freight Cost</th></tr><tr><td>PVC</td><td>Diameter: 1.25 inch RD, Length: 10 feet</td><td>20 lengths</td><td>Gray</td><td>NOT IN-STOCK</td><td>10.0</td><td>100.0</td><td>3 days</td><td>$50</td></tr><tr><td>PVC</td><td>Diameter: 1.125 inch RD, Length: 10 feet</td><td>28 Lengths</td><td>Gray</td><td>NOT IN-STOCK</td><td>12.0</td><td>120.0</td><td>5 days</td><td>$52</td></tr></table></div><br><br>**PVC**<br>- Specifications: 23-0004-01<br>- Shipping Location: 12060 31st. Ct. N. St. Petersburg FL 33716<br>Eg:- We started working on procuring materials that are not available yet. Rest assured, we are committed to delivering high-quality materials on time. We are open to negotiation and eagerly await your reply.<br><br>Best regards"

const Tiptap = () => {

    const [updatedHtml, setUpdatedHtml] = useState(null);

    const editor = useEditor({
        extensions,
        content,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML()
            setUpdatedHtml(html)
            // send the content to an API here
          },
      })
  return (
    <>
      <EditorContent editor={editor} className="editor__content" />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </>
  )
}

export default Tiptap