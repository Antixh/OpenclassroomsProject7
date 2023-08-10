import rentList from "../../data/logements.json";
import { Link } from "react-router-dom";

function RentList() {
  return (
    <section className="rentList">
      {
        rentList.map((logement) => {
          return (
            <Link key={ logement.id } to={`/logement/${logement.id}`}>
              <article className="rentListCard">
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