import React, { useEffect } from "react";

const TwitterContainer = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return (
        <section className="twitterContainer">
            <div className="twitter-embed">
                <a
                    style={{ borderRadious: '12px' }}
                    className="twitter-timeline"
                    data-theme="light"
                    data-tweet-limit="5"
                    data-width="300px"
                    data-height="500px"
                    data-chrome="noheader nofooter noborders"
                    href="https://twitter.com/FrogsongStudios?ref_src=twsrc%5Etfw"
                >
                    Tweets by Frogsong Studios
                </a>
            </div>
        </section >
    );
};

export default TwitterContainer;