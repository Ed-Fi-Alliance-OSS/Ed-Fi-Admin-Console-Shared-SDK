import { useEffect, useContext } from 'react';
import { TEEAuthDataContext } from "../context";
import { AnalyticsTagManagerTool } from '../enums/enums';

const useMatomoTagManagerStrategy = () => {
  const { edxAppConfig } = useContext(TEEAuthDataContext)

  useEffect(() => {
    if (edxAppConfig 
        && edxAppConfig.app 
        && edxAppConfig.app.webAnalytics
        && edxAppConfig.app.webAnalytics.enableWebAnalytics
        && edxAppConfig.app.webAnalytics.tool.toLowerCase() === AnalyticsTagManagerTool.Matomo
        && edxAppConfig.app.webAnalytics.matomo    
    ) {
      console.log("Adding Matomo tag manager analytics script for react - edx")
      var _mtm = (<any>window)._mtm = (<any>window)._mtm || []

      _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'})

      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]

      g.async=true
      g.src=`${edxAppConfig.app.webAnalytics.matomo?.managerUrl}/js/container_${edxAppConfig.app.webAnalytics.matomo?.containerId}.js`

      if (s.parentNode) {
        console.log('Insert matomo script')
        s.parentNode.insertBefore(g,s)
      }
    }
  }, [])
};

export default useMatomoTagManagerStrategy;
