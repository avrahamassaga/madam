import React, { useState } from "react";
import Answer from "./Answer";
import BodyPage from "./BodyPage";
import Header from "./Header";
export default function HomePage() {
  const [answer, setAnswer] = useState("");
  const [pages, setPages] = useState(true);
  return (
    <div>
      <Header />
      {pages ? (
        <BodyPage
              answer={answer}
              setAnswer={setAnswer}
              pages={pages}
              setPages={setPages}
            />
      ) : (
        <Answer 
          pages={pages}
          setPages={setPages}
          answer={answer}
        />
      )}
    </div>
  );
}
