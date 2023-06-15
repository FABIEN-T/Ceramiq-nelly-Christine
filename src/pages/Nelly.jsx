import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeCard from '../components/Homecard'
import datasNelly from '../datas/datasNelly.json'

export default function Nelly() {
  return (
    <>
      <Header />
      <main>
        <h2>Nelly Martinelli</h2>
        <section>
          <article>
            <p>
              Nelly  Martinelli est venue à la céramique après un parcours de
              vie dans l’animation sociale. En plus des techniques classiques,
              elle utilise la méthode du papier porcelaine, mélange de
              porcelaine et de cellulose, qui permet d’obtenir des pièces d’une
              extrême finesse. Elle exposait au Salon Habitat & vie d’Épinal.
              Après la fermeture du centre social où elle travaillait, elle a
              beaucoup voyagé. « J’ai visité 41 pays, fait de la plongée
              sous-marine, confie-t-elle. C’est sûrement de là que m’est venu
              cette fascination pour les coraux ».  Elle découvre sur les
              Salons, l’artisanat d’art une expression à travers différents
              matériaux. Elle « flashe » sur la terre à Auboué, où se déroulent
              les Aubouesielles, qui met en scène 5 artistes, 5 matériaux sur 5
              jours.
            </p>
          </article>
          <div className="homeGallery">
            <ul>
              {datasNelly.map(({ id, title, cover }) => (
                <HomeCard key={id} id={id} title={title} cover={cover} />
              ))}
            </ul>
          </div>
          <article>
            <h3>La céramique par le feu</h3>
            <p>
              « J’ai été attirée par la céramique, explique-t-elle, je ne sais
              pas dire pourquoi. Sûrement à cause du raku, ce système de cuisson
              par le feu où l’objet se transforme sur les différentes étapes
              sans qu’on puisse vraiment savoir ce qui va en sortir ». La
              métamorphose par le feu … « Le feu, symbole de vie, de chaleur
              humaine, de convivialité ». Avec la cuisson raku, le résultat est
              toujours une surprise, une découverte. On ne voit ce que donne sa
              pièce qu’une fois nettoyée. C’est presque magique !
            </p>
          </article>
          <article>
            <h3>Le papier porcelaine</h3>
            <p>
              En octobre 2012, elle intègre une formation de Concepteur Créateur
              au CERFAV de Vannes-le-Châtel et  choisit Christine CECCATO, comme
              maitre de stage. C’est avec elle qu’elle travaille la technique du
              papier porcelaine, qui intègre de la cellulose. A la cuisson, la
              cellulose brûle et laisse un vide, ce qui permet des pièce d’une
              extrême finesse. Un savoir faire ancien oublié, qu’elle remet au
              goût du jour.
            </p>
          </article>
          <article>
            <h3>Laisser surgir les émotions</h3>
            <p>
              Elle, qui semble un peu bourrue, un peu rentre dedans, la vanne
              toujours prête pour cacher une sensibilité à fleur de peau, elle
              s’apaise à travailler la terre. C’est un voyage où les énergies
              s’équilibrent, porteuses des émotions qui échappent au contrôle.
              Elle fait tomber la cuirasse, laisse émerger les émotions qui la
              submergent et se concentre sur ces fines lamelles, coraux d’un
              affect en bouillonnement. « J’ai créé mes larmes « coulures en
              relief » après le décès de ma tante. C’est venu spontanément ».
            </p>
          </article>
          <article>
            <h3>Un atelier à 2</h3>
            <p>
              Elle est sortie en mai 2015, de la couveuse Pacelor qui accompagne
              les créateurs d’entreprise pour leur permettre de tester leur
              activité. Une  aide que Nelly Martinelli a apprécié et trouve
              vraiment efficace. « On nous conseille et on nous
              booste », assure-t-elle. Depuis 4 ans, elle partage un atelier à
              HOMECOURT avec Christine HUMANN. Une façon de réduire les coûts et
              de ne pas être isolée dans son atelier.
            </p>
          </article>
          <article>
            <h3>De l’animation et des Salons</h3>
            <p>
              Mais elle a gardé une partie animation et fait de la céramique
              avec les écoles et les centres de loisirs. C’est sa plongée dans
              le monde. Pas question de rester sans contacts, et pour ça, les
              Salons, c’est le Must !
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}
