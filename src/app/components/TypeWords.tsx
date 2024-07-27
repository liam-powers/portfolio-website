"use client";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

interface TypeWordsProps {
  input: string | string[];
}

export default function TypeWords({ input }: TypeWordsProps) {
  const text = Array.isArray(input) ? input : [input.toString()];
  return (
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        loop: true,
        delay: 75,
      }}
    />
  );
}
