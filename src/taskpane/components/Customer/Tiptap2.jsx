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

    resizable: true,
    allowTableNodeSelection: false
  }),
  TableRow,
  TableHeader,
  TableCell
]

const greetingContent = "Dear Customer,<br><br>Thank you for choosing us for your material needs. Please find below a detailed breakdown of the quote for your order:<br><br>Order Details:<br>";

const regardsContent = ">**PVC**<br>- Specifications: 23-0004-01<br>- Shipping Location: 12060 31st. Ct. N. St. Petersburg FL 33716<br>Eg:- We started working on procuring materials that are not available yet. Rest assured, we are committed to delivering high-quality materials on time. We are open to negotiation and eagerly await your reply.<br><br>Best regards";
const specificationContent = "<br><br>**PVC**<br>- Specifications: 23-0004-01<br>- Shipping Location: 12060 31st. Ct. N. St. Petersburg FL 33716<br>Eg:- We started working on procuring materials that are not available yet. Rest assured, we are committed to delivering high-quality materials on time. We are open to negotiation and eagerly await your reply.<br><br>Best regards"
const Tiptap2 = () => {

    const editor = useEditor({
        extensions,
        content: specificationContent,
        editable: true,
      })
  return (
    <>
      <EditorContent editor={editor} className="editor__content" />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      {/* <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </>
  )
}

export default Tiptap2