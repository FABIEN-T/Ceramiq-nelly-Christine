// import Banner from '../../common/Banner'
// import HomeCard from '../../components/HomeCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import Collapse from '../components/Collapse'

export default function Home() {
  // let finalJson=JSON.parse(json);

  // console.log(finalJson.one)
  // console.log(finalJson.trucInfo)
  return (
    <>
      <Header />
      {/* <div className="banner bannerHomeMobile">
        <Banner
          title={'Chez vous, partout et ailleurs'}
          imageBanner="bannerLittoral"
        />
      </div> */}
      <main>
        <section>
          <article>
            <h2>Céramique</h2>
            <p>
              Utilisant la céramique comme moyen d'expression nous créons
              manuellement des collections uniques et luxueuses pour la maison
              et l'art de la table, des objets décoratifs et utilitaires, des
              pièces d'architecture intérieures ou extérieures.
            </p>
            <p>
              Chaque pièce est caressée, formée, déformée, oubliée, retrouvée,
              émaillée, chauffée pour donner un objet unique porteur d'énergie
              et d'émotion.
            </p>
            <p>
              Notre quotidien est une fusion de certitudes et d'erreurs, de
              précision technique, d'expérimentations constantes, d’accidents,
              de travail dur et de déceptions, de simplicité et de bonheur.
            </p>
            <p>
              Bonheur que nous aimerions vous transmettre à travers ces petits
              morceaux d'argiles.
            </p>
          </article>

          <article>
            <h2>Fabrication</h2>
            <p>
              La porcelaine est préparée à l'atelier à partir de minéraux de
              carrière, un subtil mélange de kaolin, silice et feldspath.
            </p>
            <p>Les autres argiles sont utilisées brutes ou en mélange.</p>
            <p>
              Les différents objets sont mis en forme par modelage, tournage,
              estampage, calibrage...
            </p>
            <p>Tout est fait à la main.</p>
            <p>
              Après séchage, une première cuisson à 1000 °c permet de solidifier
              les pièces, pour l'émaillage.
            </p>
            <p>
              Tous les émaux sont élaborés par nos soins, matières premières
              minérales, quelques oxydes métalliques pour les couleurs et un peu
              d'eau...
            </p>
            <p>
              Une cuisson à 1300°c sert de révélateur à toutes les étapes
              précédentes.
            </p>
            <p>Chaque pièce est unique.</p>
          </article>

          {/* <ul>
          {workData.map(({ id, title, cover }) => (
            <HomeCard key={id} id={id} title={title} cover={cover} />
          ))}
        </ul> */}
          {/* <section className="about">
        {datas_twoCeramist.map(({ title, description }, index) => (
          <div key={`${title}-${index}`}>
            <Collapse title={title} content={description} type={'paragraph'} />
          </div>
        ))}
        </section> */}
        </section>
        <h3>Du chaos naît l'harmonie </h3>
      </main>
      <Footer />
    </>
  )
}
