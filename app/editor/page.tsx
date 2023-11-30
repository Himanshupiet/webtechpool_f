"use client"
import React from "react";
//import TextEditor from "@/components/TextEditor";
import {useMemo} from "react";
import dynamic from 'next/dynamic';
import { useState } from "react";

import 'react-quill/dist/quill.snow.css';
  const DynamicComponentWithNoSSR2 = dynamic(
    () => import('../../components/TextEditor'),
    { ssr: false }
    )
  
// import TextEditorNext from "@/components/TextEditorNext";
import TextEditor from "@/components/TextEditor";



const EditorPage = ()=> {
  const [value, setValue] = useState('')
  const [content, setContent] = useState('');
    return(
        <>  <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  New Blog Post
                </h2>
                 <DynamicComponentWithNoSSR2
                  width="100"
                  onUpdate={(value, length) => console.log(value, length)}
                  content={"hhhhhhhhhhhhhhhhhhh"}        
                  /> 
                 {/* <ReactQuill value={value} onChange={setValue}/> */}
                 {/* <DynamicComponentWithNoSSR
                  width="100"
                  onUpdate={(value, length) => console.log(value, length)}
                  content={"hhhhhhhhhhhhhhhhhhh"} 
                 /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    
        </>
    )
    
}
export default EditorPage;