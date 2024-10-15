import { useContext, useEffect } from "react";
import { TEEAuthDataContext } from "../context";
import { AnalyticsTagManagerTool } from '../enums/enums';
import useMatomoTagManager from './useMatomoTagManagerStrategy';
import useGoogleAnalyticsTagManager from './useGoogleAnalyticsTagManagerStrategy';


const useAnalyticsTagManager = () => {
   const { edxAppConfig } = useContext(TEEAuthDataContext)
   if(edxAppConfig?.app?.webAnalytics?.enableWebAnalytics){
        switch(edxAppConfig?.app.webAnalytics?.tool.toLowerCase()) {
            case AnalyticsTagManagerTool.Matomo:
                useMatomoTagManager();
                break;
            case AnalyticsTagManagerTool.GoogleAnalytics:
                useGoogleAnalyticsTagManager();
                break;
            default:
                console.error('Unsupported analytics tool');
        }
    }
    else{
        console.log('The use of an Analytics tool is disabled');
    }
};

export default useAnalyticsTagManager;