import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [birthdays, setBirthdays] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <div className="births-remanining">
            {birthdays.length} Birthdays Today
          </div>
          <List people={birthdays} />
          <button className="clear-list" onClick={() => setBirthdays([])}>
            Clear list
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
