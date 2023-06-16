import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeCard from '../components/Homecard'
import datasChristine from '../datas/datasChristine.json'

export default function Christine() {
  return (
    <>
      <Header />
      <main>
        <h2>Christine Humann</h2>
        {/* <img src="src/assets/christine_cover/cs003Cover.jpg" alt="aaa" /> */}

        <section>
          <article>
            <h3>1- Fabrication de l’objet :</h3>
            <p>
              J’utilise de la porcelaine, une argile très blanche et très fine
              qui fait bien ressortir les couleurs des émaux. Les pièces sont
              réalisées par tournage, estampage ou modelage puis mises à sécher.
            </p>
          </article>
          <div className="homeGallery">
            <ul>
              {datasChristine.map(({ id, title, cover }) => (
                <HomeCard key={id} id={id} title={title} cover={cover} />
              ))}
            </ul>
          </div>
          <article>
            <h3>2 - Cuisson :</h3>
            <p>Après séchage, première cuisson à 1000°C</p>
          </article>
          <article>
            <h3>3 - Fabrication de l’émail :</h3>
            <p>
              L’émail est composé de différents minéraux broyés sous forme de
              farine très fine, il contient du quartz, du feldspath, du verre
              broyé et de l’oxyde de zinc. On ajoute également quelques oxydes
              de métaux pour donner la couleur : oxyde de cuivre pour le vert,
              oxyde de cobalt pour le bleu, oxydes de fer et de manganèse pour
              le marron…..rien pour le blanc…
            </p>
            <p>
              Ce mélange additionné d’eau est badigeonné sur les objets
              précuits.
            </p>
          </article>
          <article>
            <h3>4 - Cristallisation…</h3>
            <p>
              {' '}
              Les pièces émaillées sont remises au four pour la deuxième
              cuisson.
            </p>
            <p>
              Le four est porté à 1300°C pour faire fondre le mélange de
              minéraux qui va former une fine couche de verre,
            </p>
            <p>
              Pendant le refroidissement, le four est maintenu une dizaine
              d’heure entre 1100 et 1000 °C afin de développer des cristaux dans
              le verre visqueux . Le processus est assez lent car il faut que
              les atomes de silicium et de zinc s’arrangent régulièrement dans
              l’émail pour former des cristaux de willémite en forme d’aiguilles
              de feuilles ou de fleurs.
            </p>
            <p>
              Les deux paramètres les plus importants sont la composition de
              l’émail et le cycle de cuisson.
            </p>
            <p>
              Les émaux cristallisés présentés ici sont alimentaires, les pièces
              résistent au lave vaisselle et au micro onde mais pas toujours aux
              scènes de ménage…
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}
