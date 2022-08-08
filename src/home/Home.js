import React from "react";
import MyCard from "../common/MyCard";
import MyGrid from "../common/MyGrid";

const FirstCard = {
  header: "Card Header!",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/640px-Andromeda_Galaxy_560mm_FL.jpg",
  title: "Gotta love it.",
  author:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero enim sed hic fugiat eligendi pariatur quaerat, in eum sequi deleniti ea alias. Possimus beatae qui doloremque similique, ex corrupti ratione!",
  buttonText: "Having fun?",
};

function Home() {
  return (
    <section>
      <MyGrid>
        <h1>Hello!</h1>
      </MyGrid>
      <MyCard
        header={FirstCard.header}
        image={FirstCard.image}
        title={FirstCard.title}
        text={FirstCard.text}
      />
    </section>
  );
}

export default Home;
