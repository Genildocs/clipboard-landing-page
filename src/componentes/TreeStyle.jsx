import React from "react"
import styled from "styled-components"

export const Wrapper = styled.div`


`

export const Title = styled.h2`

`
export const Paragraph = styled.p`
    

`

export default function TreeStyle() {
  const treeStyles = [
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
      {treeStyles.map((style, index) => (
        <TreeStyleItem key={index} title={style.title} paragraph={style.paragraph} />
      ))}
    </>
  );
}

function TreeStyleItem({ title, paragraph }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
    </Wrapper>
  );
}
