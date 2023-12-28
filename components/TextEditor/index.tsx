"use client"
import {uploadFile} from '@/app/services/helper';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(async() => await import("react-quill"), { ssr: false });
import ResizeModule from "@botom/quill-resize-module";
import { Quill } from "react-quill";
const BaseImage = Quill.import('formats/image');
const BaseVideo = Quill.import('formats/video');
const ATTRIBUTES = ['alt', 'height', 'width', 'style'];
const WHITE_STYLE = ['margin', 'display', 'float'];
const sanitize_style = (style: any) => {
  const style_arr = style.split(';');
  let allow_style = '';
  style_arr.forEach((v: any) => {
    if (WHITE_STYLE.indexOf(v.trim().split(':')[0]) !== -1) {
      allow_style += `${v};`;
    }
  });
  return allow_style;
};

const formatsBuild = (domNode: any) => {
  return ATTRIBUTES.reduce((formats: any, attribute) => {
    if (domNode.hasAttribute(attribute)) {
      formats[attribute] = domNode.getAttribute(attribute);
    }
    return formats;
  }, {});
};

const formatsReturn = (domNode: any, name: any, value: any) => {
  if (value) {
    if (name === 'style') {
      value = sanitize_style(value);
    }
    domNode.setAttribute(name, value);
  } else {
    domNode.removeAttribute(name);
  }
}

class Image extends BaseImage {
  static formats(domNode: any) {
    return formatsBuild(domNode);
  }
  format(name: any, value: any) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      formatsReturn(this.domNode, name, value);
    } else {
      super.format(name, value);
    }
  };
}
class Video extends BaseVideo {
  static formats(domNode: any) {
    return formatsBuild(domNode);
  }
  format(fname: any, value: any) {
    if (ATTRIBUTES.indexOf(fname) > -1) {
      formatsReturn(this.domNode, fname, value);
    } else {
      super.format(fname, value);
    }
  }
}
Quill.register(Image, true);
Quill.register(Video, true);
Quill.register("modules/resize", ResizeModule);

export interface EditorProps {
  width: string;
  content: any;
  onUpdate(e: any, length?: any): void;
}

const TextEditor = ({width,content, onUpdate}:EditorProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const isMounted = useIsMounted()

  const modules = {
    toolbar: {
      container: [
        [{ font: [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }, { indent: "-1" }, { indent: "+1" }],
        [{ 'align': [] }],
        ["link", "image", "video"],
        ["clean"]
      ],
      handlers: { image: imageHandler, video: videoHandler 
      }
    },
    clipboard: { matchVisual: false },
    resize: {
      showSize: true,
      showToolbar: true,
      locale: {}
    }
  }

  function imageHandler(this: { image: () => void; }) {
    const self: any = this;
    let fileInput = self.container.querySelector('input.ql-image[type=file]');
    if (fileInput == null) {
      fileInput = document.createElement('input');
      fileInput.setAttribute('type', 'file');
      fileInput.classList.add('ql-image');
      fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
      fileInput.addEventListener('change', async () => {
        if (fileInput.files != null && fileInput.files[0] != null) {
          uploadFile(fileInput.files[0])
            .then((imageUrl: string) => {
              const range = self.quill.getSelection(true);
              self.quill.insertEmbed(range.index, 'image', `${imageUrl}`);
              self.quill.setSelection(range.index + 1);
              fileInput.value = "";
            })
            .catch((error:any) => {
              setError(error?.message)
              fileInput.value = "";
            })
        }
      });
    }
    fileInput.click();
  }
  function videoHandler(this: { video: () => void; }) {
    const self: any = this;
    let url = prompt("Enter Video URL: ");
    url = getVideoUrl(url);
    if (url != null) {
      const range = self.quill.getSelection(true);
      self.quill.insertEmbed(range.index, 'video', url);
      self.quill.setSelection(range.index + 1);
    }
  }

  function getVideoUrl(url: string | null) {
    let match: any = url?.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) ||
      url?.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/) ||
      url?.match(/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
    if (match && match?.[2]?.length === 11) {
      return ('https') + '://www.youtube.com/embed/' + match[2] + '?showinfo=0';
    }
    match = url?.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/);
    if (match && match?.length > 2) { // eslint-disable-line no-cond-assign
      return (match[1] || 'https') + '://player.vimeo.com/video/' + match[2] + '/';
    }
    return null;
  }
  function useIsMounted() {
    const isMounted = useRef(false)
    useEffect(() => {
      isMounted.current = true
      return () => {
        isMounted.current = false
      }
    }, [])
  
    return useCallback(() => isMounted.current, [])
  }

  return (
    <ReactQuill
        onChange={(value: any, _d:any, _s: any, e: any) => onUpdate(value, e?.getText().trim())}
        style={{ width , 
          height:'200px'
        }}
        modules={modules}
        value={content}
        theme="snow"
    />
  );
};

export default TextEditor;
