// WordCounter.js
import React, { useState } from "react";
import "./WordCounter.css"; // 確保正確引用 CSS

function WordCounter() {
    const [text, setText] = useState("");
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const letterCount = text.length;

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <textarea
                placeholder="Type your text here..."
                onChange={handleTextChange}
                value={text}
                rows={5}
                cols={50}
            />
            <p>Word Count: {wordCount}</p>
            <p>Letter Count: {letterCount}</p>
        </div>
    );
}

export default WordCounter;
