import rentList from "../../data/logements.json";
console.log(rentList);

function RentList() {
  return (
    <section className="rentList">
      {
        rentList.map((logement) => {
          return (
            <article key={ logement.id } className="rentListCard">
              <img className="rentListImg" src={ logement.cover } alt={ logement.title } />
              <p className="rentListTitle">{ logement.title }</p>
            </article>
          )
        })
      }
    </section>
  )
}

export default RentList;