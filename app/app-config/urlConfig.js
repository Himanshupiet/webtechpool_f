const localhost = typeof window !== "undefined" && window.location.origin.includes("localhost")
const API_BASE_URL_PROD= process.env.NEXT_PUBLIC_API_BASE_URL_PROD
const API_BASE_URL_LOCAL= process.env.NEXT_PUBLIC_API_BASE_URL_LOCAL
//const API_BASE_URL_LOCAL= process.env.NEXT_PUBLIC_API_BASE_URL_PROD

  export const SETTING = {    
    APP_CONSTANT : {
        API_URL:localhost? API_BASE_URL_LOCAL: API_BASE_URL_PROD,
    },
    HEADER_PARAMETERS: {
        'Accept': '*/*',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': '*'
    },
    token: typeof window !== 'undefined' && localStorage.getItem('token'),
}

