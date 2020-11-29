import * as React from 'react';

export interface IPreHeader {
  title: string;
}

function PreHeader(props: IPreHeader) {
  return <div>{props.title}</div>;
}

export default PreHeader;
