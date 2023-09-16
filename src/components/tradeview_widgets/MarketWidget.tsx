"use client"

import React, { useEffect } from 'react';

const NewsWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": "100%",
            "defaultColumn": "overview",
            "screener_type": "crypto_mkt",
            "displayCurrency": "USD",
            "colorTheme": "light",
            "locale": "en",
            "isTransparent": true
        });

        const container = document.getElementById('market-widget-container');

        container!.appendChild(script);

        return () => {
            if (container && script && container.contains(script))
            {
                container?.removeChild(script);
            }
        };
    }, []);

    return (
        <div className='h-[400px]'>
            <div id="market-widget-container" className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
};

export default NewsWidget;

