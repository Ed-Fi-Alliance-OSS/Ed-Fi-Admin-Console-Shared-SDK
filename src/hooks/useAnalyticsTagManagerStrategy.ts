import { useContext, useEffect } from "react";
import { TEEAuthDataContext } from "../context";
import useMatomoTagManager from './useMatomoTagManagerStrategy';
import useGoogleAnalyticsTagManager from './useGoogleAnalyticsTagManagerStrategy';

const useAnalyticsTagManagerStrategy = () => {
   const { edxAppConfig } = useContext(TEEAuthDataContext)

    if (edxAppConfig?.app.webAnalytics?.tool === 'Matomo') {
        useMatomoTagManager();
    } else if (edxAppConfig?.app.webAnalytics?.tool === 'GoogleAnalytics') {
        useGoogleAnalyticsTagManager();
    } else {
        console.error('Unsupported analytics tool');
    }
};

export default useAnalyticsTagManagerStrategy;