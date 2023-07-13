"use client"

import React, { useEffect } from 'react';

const NewsWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "feedMode": "all_symbols",
            "colorTheme": "light",
            "isTransparent": true,
            "displayMode": "adaptive",
            "width": "100%",
            "height": "100%",
            "locale": "en"
        });

        document.getElementById('news-widget-container')!.appendChild(script);

        return () => {
            document.getElementById('news-widget-container')?.removeChild(script);
        };
    }, []);

    return (
        <div className='h-[400px] block'>
            <div id="news-widget-container" className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
};

export default NewsWidget;

