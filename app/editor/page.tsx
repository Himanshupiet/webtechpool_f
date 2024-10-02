"use client"
import React,{useEffect, useMemo, useState} from "react";
import { toast } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import Select from 'react-select'
  const DynamicComponentWithNoSSR = dynamic(
    () => import('../../components/TextEditor'),
    { ssr: false }
    )
import { useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import {SETTING} from "../app-config/urlConfig";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {redirect} from "next/navigation";
import {validationSchema} from "../services/validations";
import {useAppSelector} from "@/lib/hooks";
import {selectTagsState, blogTagsAction} from "@/lib/tags/blogTags";
import {selectAuthState, ExpireToken} from "@/lib/auth/authSlice";
import {useAppDispatch} from "@/lib/hooks";
import Loader from "@/components/Loader/Loader";
import {BlogTagConverter} from "@/modals/BlogTagsConverter";
import {categoryOption, excelTags, uploadFile} from "../services/helper"; 
import UploadImage from "@/components/UploadImage";
import { useRouter } from 'next/navigation'


const EditorPage = ()=> {
  const {token} = useAppSelector(selectAuthState)
  const router = useRouter()
  //const {tags} = useAppSelector(selectTagsState);
  const dispatch = useAppDispatch()
  //const [blogTags, setBlogTags]= useState([])
  const [loading, setLoading]= useState(false)
  const [fileError, setFileError] = useState<boolean>(false);
  const [file, setFile] = useState<File | Blob>();
  const [error, setError] = useState<string>("");

  const FormikForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      //accessPlatform: AccessPlatform.INSIGHTS,
      alias: false,
      aliasUrl: "",
      altTag: "",
      category: "",
      blogContent: "",
      blogMetaTag: "",
      faq: "",
      metaKeyword: "",
      schemaMarkUp: "",
      title: "",
      tags: [],
      canonicalUrl: "",
    },
    validationSchema,
    onSubmit:  async(data: any, _action) => {
      if (!file){
          setFileError(true);
          return false;
      };
      setLoading(true)
    
        try {
          const uploadedImageUrl = await uploadFile({ file, token });
          console.log("File uploaded successfully:", uploadedImageUrl);
          // You can now use the uploadedImageUrl (e.g., set it in state)
          data['bannerImageUrl'] = uploadedImageUrl
          let options = SETTING.HEADER_PARAMETERS;
          options['Authorization'] = JSON.stringify(token)
          // incase case of file and Data both send
          // let formData = new FormData();
          //     formData.append("blogRequest", JSON.stringify(data))
          //     formData.append("image", file);
          //     formData.append("image", file);
          //options['Content-Type']= "multipart/form-data"
          await Axios.post(SETTING.APP_CONSTANT.API_URL+`admin/addBlogPost`,data,{headers: options})
          .then((res) => {
            setLoading(false)
            if (res && res.data.success) {
              toast.success(res.data.message);
              router.push('/blog')
            } else {
              toast["error"](res.data.message);
            }
          })
          .catch((err) =>{
            setLoading(false)
            if(err && err.response && err.response.status===401){
              dispatch(ExpireToken()) 
              toast.error('Token expired.');
            }else{
              const errorMessage= err && err.response && err.response.data && err.response.data.message?err.response.data.message :`Error while posting blog.`
              toast["error"](errorMessage);
            }
          })
        } catch (error) {
          setLoading(false)
          console.error("Error during file upload:", error);
          toast["error"](error.message?error.message:'Error during file upload')
        }
    },
  });

  const EditorMem = useMemo(() => (
    <DynamicComponentWithNoSSR
      width="100"
      content=""
      onUpdate={(value, length) => setFieldValue("blogContent", length ? value.replace(/<p><br\s*\/?><\/p>/g, '<br>') : "")}
    />
  ), []);

  // useEffect(()=>{
  //   dispatch(blogTagsAction()).then((res)=>{
  //     // setBlogTags(res.payload.map((item)=>{
  //     //   return new BlogTagConverter(item)
  //     // }))
  //   })
  // },[])
  const handleImageChange = (event: any) => {
        if(event && event.target && event.target.files && event.target.files[0]){
          setFile(event.target.files[0])
          setFileError(false)
        }
  };
    const {values, handleChange, handleSubmit, setFieldValue} =  FormikForm
    return(
        <>
        <Loader loading={loading}/>
          {
            token ?
            <section className="pt-[150px] pb-[120px]">
              <div className="container">
                <div className="-mx-4 flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-8/12">
                    <div>
                      <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                        New Blog Post
                      </h2>
                      <form onSubmit={handleSubmit}>
                          <div className="mb-8">
                            <label
                              htmlFor="title"
                              className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                              Title*
                            </label>
                            <input
                              type="text"
                              name="title"
                              placeholder="Enter Blog Title"
                              className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                              onChange={handleChange}
                              value={values.title}
                            />
                            {FormikForm.touched.title && FormikForm.errors.title && (
                                <span style={{color:'red'}}>{FormikForm.errors.title.toString()}</span>
                            )}
                          </div>
                          <div className="mb-8">
                            <label
                              htmlFor="blogMetaTag"
                              className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                              Meta Description*
                            </label>
                            <input
                              type="text"
                              name="blogMetaTag"
                              placeholder="Enter blog meta tag"
                              className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                              onChange={handleChange}
                              value={values.blogMetaTag}
                            />
                              <p className="mt-1 text-sm text-neutral-500">
                                Brief description for your article.
                              </p>
                              {FormikForm.touched.blogMetaTag && FormikForm.errors.blogMetaTag && (
                                <span style={{color:'red'}}>{FormikForm.errors.blogMetaTag.toString()}</span>
                            )}
                          </div>
                          <div className="mb-8">
                            <label
                              htmlFor="metaKeyword"
                              className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                              Keywords*
                            </label>
                            <input
                              type="text"
                              name="metaKeyword"
                              placeholder="Enter meta keyword"
                              className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                              onChange={handleChange}
                              value={values.metaKeyword}
                            />
                            {FormikForm.touched.metaKeyword && FormikForm.errors.metaKeyword && (
                                <span style={{color:'red'}}>{FormikForm.errors.metaKeyword.toString()}</span>
                            )}
                          </div>
                          <div className="mb-8">
                            <label
                              htmlFor="metaKeyword"
                              className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                            Banner Image*
                            </label>  
                          <UploadImage
                              error={fileError}
                              title="Banner Image*"
                              image=""
                              handleChange={handleImageChange}
                            />
                             </div>
                          <div className="mb-8">
                            <label
                              htmlFor="altTag"
                              className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                            Banner Image Alt Tag*
                            </label>
                            <input
                              type="text"
                              name="altTag"
                              placeholder="Enter alt tag"
                              className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                              onChange={handleChange}
                              value={values.altTag}
                            />
                            {FormikForm.touched.altTag && FormikForm.errors.altTag && (
                                <span style={{color:'red'}}>{FormikForm.errors.altTag.toString()}</span>
                            )}
                          </div>
                          <div className="mb-8">
                            <label
                              htmlFor="category"
                              className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                            Category*
                            </label>
                            <Select
                              classNamePrefix="react-select"
                              classNames={{ control: () => ("mt-2 submitselect bg-white dark:text-white dark:border-neutral-700 dark:bg-neutral-900") }}
                              options={categoryOption}
                              //getOptionLabel={(option: any) => option.name}
                              //getOptionValue={(option: any) => option.id}
                              //value={categories?.categoryList?.find((i: any) => i?.id === values.category)}
                              onChange={(opt: any) => setFieldValue('category', opt?.value, true)}
                            />
                              {FormikForm.touched.category && FormikForm.errors.category && (
                                <span style={{color:'red'}}>{FormikForm.errors.category.toString()}</span>
                              )}
                          </div> 
                          <div className="mb-8">
                            <label
                              htmlFor="tagsList"
                              className="mb-3 block text-sm font-medium text-dark dark:text-white"
                            >
                            Tag*
                            </label>
                            <Select
                                classNamePrefix="react-select"
                                classNames={{ control: () => ("mt-2 submitselect dark bg-white dark:border-neutral-700 dark:bg-neutral-900") }}
                                isMulti
                                options={excelTags}
                                // getOptionLabel={(option: any) => option.name}
                                // getOptionValue={(option: any) => option.id}
                                // value={tags.filter((i: any) => values.tags.includes(i?.id))}
                                onChange={(opt) => setFieldValue('tags', opt?.map((i: any) => i.value), true)}
                              />
                              {FormikForm.touched.tags && FormikForm.errors.tags && (
                                <span style={{color:'red'}}>{FormikForm.errors.tags.toString()}</span>
                              )}
                          </div> 
                       
                          {/* important */}
                          {/* <div className={`block md:col-span-2 ${touched.blogData && errors.blogData ? "error" : ""}`}> */}
                          <div className="mb-8">
                            <label
                              htmlFor="blogContent"
                              className="mb-6 block text-sm font-medium text-dark dark:text-white"
                            >
                              Blog Content
                            </label>
                              {EditorMem}
                              {FormikForm.touched.blogContent && FormikForm.errors.blogContent && (
                                <span style={{color:'red'}}>{FormikForm.errors.blogContent.toString()}</span>
                              )}
                          </div>
                          <div  style={{marginTop:'5rem'}}>
                            <button 
                              className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp mt-5" 
                              type="submit"
                            >
                              Submit Post
                            </button>
                          </div>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>: redirect('/error')
          }  
        </>
    ) 
    
}
export default EditorPage;