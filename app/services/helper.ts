import { useCallback, useEffect, useRef } from 'react'
import axios from "axios";
import * as CryptoJS from 'crypto-js';

const SECRET_MSG = process.env.NEXT_PUBLIC_SECRET_MSG
const UPLOAD_IMAGE_URL =process.env.NEXT_PUBLIC_API_IMAGE_URL

export const  encryptAES = (text:string) => {

  return CryptoJS.AES.encrypt(text, SECRET_MSG).toString();
}


export const uploadFile =
  async (file: File | string) => {
    const url = `${UPLOAD_IMAGE_URL}admin/uploadImage`;
    const formData = new FormData();
    formData.append('file', file)
    formData.append('fileName', `blogImage${Math.floor(100000 + Math.random() * 900000)}`)
    const config = {
      headers: {
        'Content-Type':"multipart/form-data",
      }
    };
    const response = await axios.post(url, formData, config);
    return response.data.data.url
  }

  export const categoryOption=['Excel','QGIS'].map((data, index)=>{return{value: data, label: data, id:index+1, name: data}})
 
  export const excelTags=[
      'excel-basics',
      'excel-formulas',
      'spreadsheet-fundamentals',
      'cell-reference',
      'excel-functions',
      'vlookup',
      'hlookup',
      'index-match',
      'sumif',
      'countif',
      'if-function',
      'data-analysis',
      'pivot-tables',
      'data-visualization',
      'charts-and-graphs',
      'data-cleaning',
      'sorting-data',
      'data-import',
      'data-export',
      'csv',
      'text-files',
      'external-data',
      'excel-tips',
      'excel-tricks',
      'productivity-hacks',
      'time-saving-tips',
      'excel-templates',
      'spreadsheet-templates',
      'budget-templates',
      'project-management',
      'excel-macros',
      'vba-programming',
      'automation',
      'custom-functions',
      'conditional-formatting',
      'color-scales',
      'data-bars',
      'icon-sets',
      'excel-charts',
      'line-charts',
      'bar-charts',
      'pie-charts',
      'scatter-plots',
      'financial-modeling',
      'budgeting',
      'forecasting',
      'financial-analysis',
      'business-analytics',
      'project-management',
      'decision-support',
      'reporting-tools',
      'excel-shortcuts',
      'keyboard-shortcuts',
      'time-saving-shortcuts',
      'excel-errors',
      '#VALUE!',
      '#REF!',
      'troubleshooting',
      'excel-2010',
      'excel-2013',
      'excel-2016',
      'excel-2019',
      'excel-365',
      'excel-training',
      'excel-tutorials',
      'online-learning',
      'excel-certification'
  ].map((data, index)=> {return{value: data, label: data, id:index+1, name: data}})
