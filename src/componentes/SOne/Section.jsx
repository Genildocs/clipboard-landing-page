import React from "react"
import {Title, Paragraph} from "./SectionStyle.js";
export default function Section() {
  const section = [
    {
      title: 'Quick Search',
      paragraph: 'Easily search your snippets by content, category, web address, application, and more.'
    },
    {
      title: 'iCloud Sync',
      paragraph: 'Instantly saves and syncs snippets across all your devices.'
    },
    {
      title: 'Complete History',
      paragraph: 'Retrieve any snippets from the first moment you started using the app.'
    }
  ];

  return (
    <>
      {section.map((style, index) => (
        <TreeStyleItem key={index} title={style.title} paragraph={style.paragraph} />
      ))}
    </>
  );
}

function TreeStyleItem({ title, paragraph }) {
  return (
      <div>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </div>
  );
}
