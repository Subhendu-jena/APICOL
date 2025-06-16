import React, { useEffect } from "react";

const SocialMedia: React.FC = () => {


  const socialEmbeds = {
    Instagram: {
      embedUrl: "https://www.instagram.com/apicolodisha/embed",
      fallbackUrl: "https://www.instagram.com/apicolodisha/",
    },
    Facebook: {
      embedUrl:
        "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fapicolodisha&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
      fallbackUrl: "https://www.facebook.com/apicolodisha/",
    },
    X: {
      handle: "APICOLBBSR",
      fallbackUrl: "https://x.com/APICOLBBSR",
    },
  };

useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://platform.twitter.com/widgets.js";
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  const renderInstagramFeed = () => (
    <iframe
      src={socialEmbeds.Instagram.embedUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      scrolling="yes"
      allowTransparency
      className="rounded-lg"
      title="Instagram Feed"
    />
  );

  const renderFacebookFeed = () => (
    <iframe
      src={socialEmbeds.Facebook.embedUrl}
      width="100%"
      height="100%"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="yes"
      frameBorder="0"
      allow="encrypted-media"
      allowTransparency
      className="rounded-lg"
      title="Facebook Feed"
    />
  );

  const renderXFeed = () => (
    <div className="h-full overflow-auto">
      <a
        className="twitter-timeline"
        data-height="450"
        data-theme="light"
        href={`https://twitter.com/${socialEmbeds.X.handle}?ref_src=twsrc%5Etfw`}
      >
        Tweets by {socialEmbeds.X.handle}
      </a>
      <div className="mt-4 text-center">
        <a
          href={socialEmbeds.X.fallbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          View @{socialEmbeds.X.handle} on X →
        </a>
      </div>
    </div>
  );




  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Instagram */}
    <div className="border rounded-lg bg-white shadow-inner overflow-hidden">
      <div className="bg-gradient-to-r from-pink-50 to-pink-100 px-4 py-3 border-b">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          📷 Latest on Instagram
        </h3>
      </div>
      <div className="h-96">{renderInstagramFeed()}</div>
    </div>

    {/* Facebook */}
    <div className="border rounded-lg bg-white shadow-inner overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 border-b">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          👥 Latest on Facebook
        </h3>
      </div>
      <div className="h-96">{renderFacebookFeed()}</div>
    </div>

    {/* X (Twitter) */}
    <div className="border rounded-lg bg-white shadow-inner overflow-hidden">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 border-b">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          🐦 Latest on X
        </h3>
      </div>
      <div className="h-96">{renderXFeed()}</div>
    </div>
  </div>
  );
};

export default SocialMedia;
