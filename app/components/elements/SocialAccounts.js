import React from "react";

const SocialAccounts = () => {
   return (
      <ul>
         <li>
            <a href={`${homepageData.InstagramLink || ""}`}>
               <img src="/assets/images/about/icon-1.png" alt="" />
            </a>
         </li>
         <li>
            <a href={`${homepageData.TwitterLink || ""}`}>
               <img src="/assets/images/about/icon-2.png" alt="" />
            </a>
         </li>
         <li>
            <a href={`${homepageData.FacebookLink || ""}`}>
               <img src="/assets/images/about/icon-3.png" alt="" />
            </a>
         </li>
      </ul>
   );
};

export default SocialAccounts;