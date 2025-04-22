import React, { JSX } from "react";
import "./PageContent.css";

import Transliterator from "../Transliterator/Transliterator.tsx";
import Description from "../Description/Description.tsx";
import { PAGES } from "../../pages.tsx";

interface PageContentProps {
  selectedPage: string;
}

export default function PageContent({
  selectedPage,
}: PageContentProps): JSX.Element {
  const pageData = PAGES[selectedPage] || {};
  const { title, image, whatIs, description } = pageData;

  return (
    <div>
      {title && title !== "Home" && <Transliterator title={title} />}
      <Description image={image} whatIs={whatIs} description={description} />
    </div>
  );
}
