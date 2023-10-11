
import React, {PropsWithChildren, Suspense, useMemo} from "react";
import {I18nextProvider, initReactI18next,setI18n, } from "react-i18next";
import i18n,{InitOptions} from "i18next";
import backend from "i18next-http-backend/cjs";
import LanguageDetector from "i18next-browser-languagedetector";
const options: InitOptions = {
    returnNull:true,
    resources:{
        "en":{
            "common":{
                "welcome":"Welcome EN"
            }
        },
    },
    ns:["common"],
    defaultNS:"common",
    debug:true,
    interpolation: {
        escapeValue: false // react already safes from xss
    }
} as InitOptions;

const createI18nInstance = (config:Record<string, any>) => {
    const instance = i18n.createInstance();
    instance.use(backend)
        .use(LanguageDetector)
        .use(initReactI18next).init({...options,...config,
        react:{bindI18n:"languageChanged languageChanging loaded",
            bindI18nStore:"loaded"
        }}).then(()=>{
        initReactI18next.init(instance)
        setI18n(instance)
    });

    instance.on("initialized",()=>{
        console.log("isInitialized")
    })

    return instance;


}
export default  function I8NextProvider(props:PropsWithChildren<{options:Record<string, any>}>){
    const { children, options} = props;
    const i18n = useMemo(()=>{
        return createI18nInstance(options);
    },[options]) ;
    return (
        <Suspense fallback={"loading...."} >
            <I18nextProvider i18n={i18n}  defaultNS={"common"} >
                {children}
            </I18nextProvider>
        </Suspense>

    )
}