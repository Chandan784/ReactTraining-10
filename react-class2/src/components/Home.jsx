import style from "./Home.module.css";

function Home() {
  let names = [
    {
      img: "https://secure.gravatar.com/avatar/746ce4be4b792a706e1ca37105b09cf0?s=80&d=retro&r=pg",
      title: "jshfjhsfjsf",
      description: "dfghgfhdgf",
    },
    {
      img: "https://secure.gravatar.com/avatar/746ce4be4b792a706e1ca37105b09cf0?s=80&d=retro&r=pg",
      title: "jshfjhsfjsf",
      description: "dfghgfhdgf",
    },
    {
      img: "https://secure.gravatar.com/avatar/746ce4be4b792a706e1ca37105b09cf0?s=80&d=retro&r=pg",
      title: "jshfjhsfjsf",
      description: "dfghgfhdgf",
    },
  ];
  return (
    <>
      <div className={style.parent}>
        {names.map((card) => {
          return (
            <div className={style.card}>
              <img src={card.img} alt="" />
              <h1>{card.title}</h1>
              <h2>{card.description}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
