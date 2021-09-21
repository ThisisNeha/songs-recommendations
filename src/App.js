import React, { useState } from "react";
import "./styles.css";

const mySongs = {
  pop: [
    {
      Name: "Cold water",
      Description:
        "Cold Water is a song recorded by Jamaican-American electronic dance music group Major Lazer featuring vocals from Canadian singer Justin Bieber and Danish singer MØ. ",

      Rating: "⭐⭐⭐"
    },
    {
      Name: "Beautiful People ",
      Description:
        "It is an amazing song by English singer-songwriter Ed Sheeran featuring American singer Khalid. ",
      Rating: "⭐⭐⭐⭐⭐"
    }
  ],
  EDM: [
    {
      Name: "The Nights",
      Description:
        "The Nights is a song by Swedish DJ and record producer Avicii and singer/songwriter Nicholas Furlong. He wrote this song as an ode to his father.",
      Rating: "⭐⭐⭐⭐"
    },
    {
      Name: "A Sky Full Of Stars",
      Description:
        "A Sky Full of Stars is a beautiful song by the British rock band Coldplay.",
      Rating: "⭐⭐⭐⭐⭐"
    },
    {
      Name: "Memories",
      Description:
        "Memories is a song by American band Maroon 5, Lyrically, the song pays homage to the memories of a loved one who has since passed.",
      Rating: "⭐⭐⭐⭐"
    }
  ],
  Indian: [
    {
      Name: "Maa Tujhe Salaam ",
      Description:
        "Maa tujhe salaam song from Vande mataram album is composed by A.R. Rahman, while the lyrics are penned by Mehboob. Its a patriotic song.",

      Rating: "⭐⭐⭐⭐⭐"
    },
    {
      Name: "Behti Hawa Sa Tha Woh ",
      Description:
        " It is a hindi song from 3-idiots, sung by Shaan and Shantanu.",
      Rating: "⭐⭐⭐⭐"
    },
    {
      Name: "Neele Neele Ambar Par",
      Description:
        "This iconic composition, sung melodiously by Kishore Kumar, is a musical hit even today. ",
      Rating: "⭐⭐⭐⭐⭐"
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("Indian");

  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> Songs Recommendations 🎙 </h1>
      <h2>
        {" "}
        Here is the compilation of some of my favourite songs. Select a genre!{" "}
      </h2>
      <div>
        {Object.keys(mySongs).map((genre) => (
          <button onClick={() => clickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {mySongs[genre].map((mySongs) => (
            <li key={mySongs.name}>
              {" "}
              <div className="name"> {mySongs.Name} </div>
              <div className="desc"> {mySongs.Description} </div>
              <div className="rating"> {mySongs.Rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
