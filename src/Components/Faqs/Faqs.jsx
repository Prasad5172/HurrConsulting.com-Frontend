import React, { useContext, useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./Faqs.css";
import { AuthContext } from "../../context/AuthContext";
const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};



const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

export default function App() {

  const {isDarkMode} = useContext(AuthContext);

  const styles = {
    bgColor: `${isDarkMode ? "#292929":"white"}`,
    titleTextColor: `${isDarkMode ? "white":"black"} `,
    rowTitleColor: `${isDarkMode ? "black":"black"} `,
    // rowContentColor: 'grey',
    arrowColor: `${isDarkMode ? "#3c3c3c":"black"} `,
  };

  return (
    <>
        <div className="flex justify-center dark:bg-[#292929] p-2">
          <div className="container 2xl:max-w-[1100px] xl:max-w-[1100px]">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
    </>
  );
}
