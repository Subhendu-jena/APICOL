import React, { useEffect, useState } from "react";

const SocialMedia: React.FC = () => {
  const [socialPlatform, setSocialPlatform] = useState<"Instagram" | "Facebook" | "X">("Instagram");

  const socialEmbeds = {
    Instagram: {
      embedUrl: "https://www.instagram.com/apicolodisha/embed",
      fallbackUrl: "https://www.instagram.com/apicolodisha/"
    },
    Facebook: {
      embedUrl:
        "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fapicolodisha&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
      fallbackUrl: "https://www.facebook.com/apicolodisha/"
    },
    X: {
      handle: "APICOLBBSR",
      fallbackUrl: "https://x.com/APICOLBBSR"
    }
  };

  useEffect(() => {
    if (socialPlatform === "X") {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [socialPlatform]);

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

  const renderAlternativeFeed = () => (
    <div className="h-full flex flex-col items-center justify-center text-center p-6">
      <div className="mb-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">
            {socialPlatform === "Instagram" ? "📷" : socialPlatform === "Facebook" ? "👥" : "🐦"}
          </span>
        </div>
        <h4 className="text-lg font-semibold text-gray-700 mb-2">
          Follow us on {socialPlatform}
        </h4>
        <p className="text-gray-600 mb-4">
          Stay updated with our latest agricultural initiatives and farmer empowerment programs.
        </p>
      </div>

      <a
        href={
          socialPlatform === "Instagram"
            ? socialEmbeds.Instagram.fallbackUrl
            : socialPlatform === "Facebook"
            ? socialEmbeds.Facebook.fallbackUrl
            : socialEmbeds.X.fallbackUrl
        }
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
      >
        Visit {socialPlatform} Page →
      </a>

      <div className="mt-6 text-sm text-gray-500">
        <p>Latest updates • Farmer stories • Agricultural news</p>
      </div>
    </div>
  );

  const renderFeed = () => {
    try {
      switch (socialPlatform) {
        case "Instagram":
          return renderInstagramFeed();
        case "Facebook":
          return renderFacebookFeed();
        case "X":
          return renderXFeed();
        default:
          return renderAlternativeFeed();
      }
    } catch (error) {
      console.error("Social media embed error:", error);
      return renderAlternativeFeed();
    }
  };

  return (
    <div>
      <div className="mb-4 flex gap-2">
        {["Instagram", "Facebook", "X"].map((platform) => (
          <button
            key={platform}
            onClick={() => setSocialPlatform(platform as "Instagram" | "Facebook" | "X")}
            className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
              socialPlatform === platform
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-green-100"
            }`}
          >
            {platform === "Instagram" && "📷 "}
            {platform === "Facebook" && "👥 "}
            {platform === "X" && "🐦 "}
            {platform}
          </button>
        ))}
      </div>

      <div className="border rounded-lg bg-white shadow-inner overflow-hidden">
        <div className="bg-gradient-to-r from-green-50 to-green-100 px-4 py-3 border-b">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <span>
              {socialPlatform === "Instagram" ? "📷" : socialPlatform === "Facebook" ? "👥" : "🐦"}
            </span>
            Latest on {socialPlatform}
          </h3>
        </div>

        <div className="h-96">{renderFeed()}</div>
      </div>
    </div>
  );
};

export default SocialMedia;
