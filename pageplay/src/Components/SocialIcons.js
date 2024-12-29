import PropTypes from "prop-types";
import React from "react";
import { PlatformAppleColorNegative } from "./PlatformAppleColorNegative";
import { PlatformClubhouseColorNegative } from "./PlatformClubhouseColorNegative";
import { PlatformClubhouseColorOriginal } from "./PlatformClubhouseColorOriginal";
import { PlatformDiscordColorNegative } from "./PlatformDiscordColorNegative";
import { PlatformDiscordColorOriginal } from "./PlatformDiscordColorOriginal";
import { PlatformDribbbleColorNegative } from "./PlatformDribbbleColorNegative";
import { PlatformDribbbleColorOriginal } from "./PlatformDribbbleColorOriginal";
import { PlatformFacebookColorNegative } from "./PlatformFacebookColorNegative";
import { PlatformFacebookColorOriginal } from "./PlatformFacebookColorOriginal";
import { PlatformFigmaColorNegative } from "./PlatformFigmaColorNegative";
import { PlatformFigmaColorOriginal } from "./PlatformFigmaColorOriginal";
import { PlatformGithubColorNegative } from "./PlatformGithubColorNegative";
import { PlatformGoogleColorOriginal } from "./PlatformGoogleColorOriginal";
import { PlatformInstagramColorNegative } from "./PlatformInstagramColorNegative";
import { PlatformLinkedinColorNegative } from "./PlatformLinkedinColorNegative";
import { PlatformLinkedinColorOriginal } from "./PlatformLinkedinColorOriginal";
import { PlatformMediumColorOriginal } from "./PlatformMediumColorOriginal";
import { PlatformMessengerColorNegative } from "./PlatformMessengerColorNegative";
import { PlatformMessengerColorOriginal } from "./PlatformMessengerColorOriginal";
import { PlatformPinterestColorNegative } from "./PlatformPinterestColorNegative";
import { PlatformPinterestColorOriginal } from "./PlatformPinterestColorOriginal";
import { PlatformRedditColorNegative } from "./PlatformRedditColorNegative";
import { PlatformRedditColorOriginal } from "./PlatformRedditColorOriginal";
import { PlatformSignalColorNegative } from "./PlatformSignalColorNegative";
import { PlatformSnapchatColorNegative } from "./PlatformSnapchatColorNegative";
import { PlatformSnapchatColorOriginal } from "./PlatformSnapchatColorOriginal";
import { PlatformSpotifyColorOriginal } from "./PlatformSpotifyColorOriginal";
import { PlatformTelegramColorNegative } from "./PlatformTelegramColorNegative";
import { PlatformTelegramColorOriginal } from "./PlatformTelegramColorOriginal";
import { PlatformThreadsColorNegative } from "./PlatformThreadsColorNegative";
import { PlatformTiktokColorNegative } from "./PlatformTiktokColorNegative";
import { PlatformTiktokColorOriginal } from "./PlatformTiktokColorOriginal";
import { PlatformTumblrColorOriginal } from "./PlatformTumblrColorOriginal";
import { PlatformTwitchColorNegative } from "./PlatformTwitchColorNegative";
import { PlatformTwitchColorOriginal } from "./PlatformTwitchColorOriginal";
import { PlatformVkColorNegative } from "./PlatformVkColorNegative";
import { PlatformVkColorOriginal } from "./PlatformVkColorOriginal";
import { PlatformWhatsappColorNegative } from "./PlatformWhatsappColorNegative";
import { PlatformXTwitterColorNegative } from "./PlatformXTwitterColorNegative";
import { PlatformYoutubeColorNegative } from "./PlatformYoutubeColorNegative";
import { PlatformYoutubeColorOriginal } from "./PlatformYoutubeColorOriginal";
export const SocialIcons = ({ platform, color }) => {
  return (
    <>
      {color === "negative" && platform === "messenger" && (
        <PlatformMessengerColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "negative" && platform === "twitch" && (
        <PlatformTwitchColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "spotify" && (
        <PlatformSpotifyColorOriginal
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "#1ED760" : "white"}
        />
      )}
      {platform === "VK" && color === "negative" && (
        <PlatformVkColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "signal" && (
        <PlatformSignalColorNegative
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "#3A76F0" : "white"}
        />
      )}
      {platform === "clubhouse" && color === "negative" && (
        <PlatformClubhouseColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "negative" && platform === "telegram" && (
        <PlatformTelegramColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "tumblr" && (
        <PlatformTumblrColorOriginal
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "#001935" : "white"}
        />
      )}
      {platform === "tik-tok" && color === "negative" && (
        <PlatformTiktokColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "negative" && platform === "discord" && (
        <PlatformDiscordColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "negative" && platform === "reddit" && (
        <PlatformRedditColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "negative" && platform === "dribbble" && (
        <PlatformDribbbleColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "negative" && platform === "figma" && (
        <PlatformFigmaColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "whats-app" && (
        <PlatformWhatsappColorNegative
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "#25D366" : "white"}
        />
      )}
      {platform === "threads" && (
        <PlatformThreadsColorNegative
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "black" : "white"}
        />
      )}
      {platform === "github" && (
        <PlatformGithubColorNegative
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "#24292F" : "white"}
        />
      )}
      {platform === "medium" && (
        <PlatformMediumColorOriginal
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "black" : "white"}
        />
      )}
      {color === "negative" && platform === "pinterest" && (
        <PlatformPinterestColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "snapchat" && color === "negative" && (
        <PlatformSnapchatColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "apple" && (
        <PlatformAppleColorNegative
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "black" : "white"}
        />
      )}
      {color === "negative" && platform === "you-tube" && (
        <PlatformYoutubeColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "google" && (
        <PlatformGoogleColorOriginal
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "#4285F4" : "white"}
          color1={color === "original" ? "#FBBC05" : "white"}
          color2={color === "original" ? "#EA4335" : "white"}
          fill={color === "original" ? "#34A853" : "white"}
        />
      )}
      {color === "negative" && platform === "linked-in" && (
        <PlatformLinkedinColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "instagram" && (
        <PlatformInstagramColorNegative
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "#000100" : "white"}
        />
      )}
      {platform === "x-twitter" && (
        <PlatformXTwitterColorNegative
          className="!absolute !w-12 !h-12 !top-0 !left-0"
          color={color === "original" ? "black" : "white"}
        />
      )}
      {color === "negative" && platform === "facebook" && (
        <PlatformFacebookColorNegative className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "messenger" && (
        <PlatformMessengerColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "twitch" && (
        <PlatformTwitchColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "VK" && (
        <PlatformVkColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "clubhouse" && color === "original" && (
        <PlatformClubhouseColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "telegram" && (
        <PlatformTelegramColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "tik-tok" && color === "original" && (
        <PlatformTiktokColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "discord" && (
        <PlatformDiscordColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "reddit" && (
        <PlatformRedditColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "dribbble" && (
        <PlatformDribbbleColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "figma" && (
        <PlatformFigmaColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "pinterest" && (
        <PlatformPinterestColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {platform === "snapchat" && color === "original" && (
        <PlatformSnapchatColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "you-tube" && (
        <PlatformYoutubeColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "linked-in" && (
        <PlatformLinkedinColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
      {color === "original" && platform === "facebook" && (
        <PlatformFacebookColorOriginal className="!absolute !w-12 !h-12 !top-0 !left-0" />
      )}
    </>
  );
};
SocialIcons.propTypes = {
  platform: PropTypes.oneOf([
    "twitch",
    "facebook",
    "telegram",
    "whats-app",
    "snapchat",
    "github",
    "tik-tok",
    "threads",
    "pinterest",
    "reddit",
    "dribbble",
    "google",
    "you-tube",
    "signal",
    "apple",
    "x-twitter",
    "messenger",
    "VK",
    "spotify",
    "figma",
    "tumblr",
    "linked-in",
    "instagram",
    "discord",
    "clubhouse",
    "medium",
  ]),
  color: PropTypes.oneOf(["negative", "original"]),
};

export default SocialIcons;