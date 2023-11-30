"use client"
import { useState } from "react";
import dynamic from 'next/dynamic';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })
import 'react-quill/dist/quill.snow.css';
//import ResizeModule from "@botom/quill-resize-module";
import { Quill } from "react-quill";
import ResizeModule from "quill-blot-formatter";
Quill.register("modules/resize", ResizeModule);

export interface EditorProps {
  width: string;
  content: any;
  onUpdate(e: any, length?: any): void;
}

const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }


const TextEditorNext=({width,content, onUpdate}:EditorProps) =>  {
    const [value, setValue] = useState('')
    
    return(
        <QuillNoSSRWrapper 
        modules={modules} 
        onChange={setValue}
         theme="snow"
          />
    )
}

export default TextEditorNext;