import rentList from "../../data/logements.json";
import { Link } from "react-router-dom";

function RentList() {
  return (
    <section className="rentList">
      {
        rentList.map((logement) => {
          return (
            <Link to={`/logement/${logement.id}`}>
              <article key={ logement.id } className="rentListCard">
                <img className="rentListImg" src={ logement.cover } alt={ logement.title } />
                <p className="rentListTitle">{ logement.title }</p>
              </article>
            </Link>
          )
        })
      }
    </section>
  )
}

export default RentList;