import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/Carrousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Dropdown from "../../components/Dropdown/Dropdown";

function FicheLogement() {
  const idLogement = useParams();
  const ficheLogement = logements.find((logement) => logement.id === idLogement.id);
  const tags = ficheLogement.tags;
  const equipments = ficheLogement.equipments.map((equip, index) => {
    return (
      <ul key= { index } >
        <li>{ equip }</li>
      </ul>
    )
  })

  return (
    <main>
      <Carousel slides={ ficheLogement.pictures }/>
      <section className="ficheLogeInfosWrapper">
        <div>
          <div className="ficheLogeTitle">
            <h1>{ ficheLogement.title }</h1>
            <h2>{ ficheLogement.location }</h2>
          </div>
          <ul className="ficheLogeTags">
            {
              tags.map((tag, index) => {
                return (
                  <li key={`${tag}-${index}`}>{ tag }</li>
                )
              })
            }
          </ul>
        </div>
        <div className="ficheLogeInfosRight">
          <div className="ficheLogeAuthor">
            <p>{ ficheLogement.host.name }</p>
            <img src={ ficheLogement.host.picture } alt={ ficheLogement.host.name } />
          </div>
          <Rating score={ ficheLogement.rating } />
        </div>
      </section>
      <section className="ficheLogeDropdowns">
        <Dropdown title="Description" content={ ficheLogement.description } />
        <Dropdown title="Equipements" content={ equipments } />
      </section>
    </main>
  )
}

export default FicheLogement;