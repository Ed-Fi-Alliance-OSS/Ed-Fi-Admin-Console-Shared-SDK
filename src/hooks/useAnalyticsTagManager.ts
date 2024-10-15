import { useContext, useEffect } from "react";
import { TEEAuthDataContext } from "../context";
import useMatomoTagManager from './useMatomoTagManagerStrategy';
import useGoogleAnalyticsTagManager from './useGoogleAnalyticsTagManagerStrategy';

const useAnalyticsTagManager = () => {
   const { edxAppConfig } = useContext(TEEAuthDataContext)
   if(edxAppConfig?.app?.webAnalytics?.enableWebAnalytics){
        console.log('Analytics tag manager');
        if (edxAppConfig?.app.webAnalytics?.tool.toLowerCase() === 'Matomo'.toLowerCase()) {
            useMatomoTagManager();
        } else if (edxAppConfig?.app.webAnalytics?.tool.toLowerCase() === 'GoogleAnalytics'.toLowerCase()) {
            useGoogleAnalyticsTagManager();
        } else {
            console.error('Unsupported analytics tool '+ edxAppConfig?.app.webAnalytics?.tool.toLowerCase());
        }
    }
    else{
        console.log('The use of an Analytics tool is disabled: ');
    }
};

export default useAnalyticsTagManager;