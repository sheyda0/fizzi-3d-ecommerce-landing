import clsx from "clsx";

export default function TextSplitter({
  text,
  className,
  wordDisplayStyle = "inline-block",
}) {
  if (!text) return null;

  const words = text.split(" ");

  return words.map((word, wordIndex) => {
    const splitText = word.split("");
    return (
      <span
        className={clsx("split-word", className)}
        style={{ display: wordDisplayStyle, whiteSpace: "pre" }}
        key={`${wordIndex}-${word}`}
      >
        {splitText.map((char, charIndex) => {
          if (char === " ") return ` `;
          return (
            <span
              key={charIndex}
              className={`split-char inline-block split-char--${wordIndex}-${charIndex}`}
            >
              {char}
            </span>
          );
        })}
        {wordIndex < words.length - 1 ? (
          <span className="split-char">{` `}</span>
        ) : (
          ""
        )}
      </span>
    );
  });
}
