'use client'
import Typewriter from 'typewriter-effect';


export default function TypeWords({ input }) {
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