import * as Yup from 'yup';

export const validationSchema = Yup.object({
            title: Yup.string().required('Please enter title'),
            metaKeyword: Yup.string().required('Please enter meta keyword'),
            blogMetaTag: Yup.string().required('Please enter meta description'),
            altTag: Yup.string().required('Please enter alt tag'),
            blogContent: Yup.string().required('Please enter blog content'),
            category: Yup.string().required('Please select blog category'),
            tags: Yup.array()
             .of(Yup.string())
             .required('Please select tags')
             .min(1, 'Please select minimum 1 tag'),
        //   accessPlatform: Yup.string().required('Please select access platform'),
        //   aliasUrl : Yup.string()
        //   .when("alias", {
        //       is: (aCheckbox :boolean) => aCheckbox === true,
        //       then:()=> Yup.string()
        //         .required('Alias URL is required')
        //         .matches(/^[0-9A-Za-z-]*[0-9A-Za-z]$/, "Invalid alias URL")
        //     })
        })