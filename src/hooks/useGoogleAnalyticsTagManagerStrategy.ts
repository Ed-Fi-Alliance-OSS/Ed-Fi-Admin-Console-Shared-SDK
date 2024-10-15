import { useEffect, useContext } from 'react';
import { TEEAuthDataContext } from "../context";

const useGoogleAnalyticsTagManagerStrategy = () => {
  const { edxAppConfig } = useContext(TEEAuthDataContext)

    useEffect(() => {
        if (edxAppConfig 
            && edxAppConfig.app
            && edxAppConfig.app.webAnalytics
            && edxAppConfig.app.webAnalytics.enableWebAnalytics 
            && edxAppConfig.app.webAnalytics.tool.toLowerCase() === 'GoogleAnalytics'.toLowerCase()) {
            console.log("Adding Google Analytics script for React");

            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${edxAppConfig?.app?.webAnalytics?.googleAnalytics?.googleAnalyticsId}`;
            document.head.appendChild(script);

            script.onload = () => {
                (window as any).dataLayer = (window as any).dataLayer || [];
                const gtag = (...args: any[]) => (window as any).dataLayer.push(args);
                gtag('js', new Date());
                gtag('config', edxAppConfig?.app?.webAnalytics?.googleAnalytics?.googleAnalyticsId);
            };
        }
    }, []);
};

export default useGoogleAnalyticsTagManagerStrategy;
