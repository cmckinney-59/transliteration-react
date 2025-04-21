import React from "react";

interface DescriptionProps {
  image: string;
  description: string;
  whatIs?: string;
}

export default function Description({
  image,
  description,
  whatIs,
}: DescriptionProps) {
  return (
    <div>
      <h2>{whatIs}</h2>
      <img src={image} alt={whatIs} />
      <p>{description}</p>
    </div>
  );
}
