import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// import Tags from '../../components/Tags'
// import Rating from '../../components/Rating'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'
import datasNelly from '../datas/datasNelly.json'
import datasChristine from '../datas/datasChristine.json'

export default function WorkSheet() {
  const { id } = useParams()
  console.log('i', id.slice(0, 1))
  const datas = id.slice(0, 1) === 'n' ? datasNelly : datasChristine
  const name = id.slice(0, 1) === 'n' ? 'Nelly Martinelli' : 'Christine Humann'
  console.log('datas', datas)
  const workSheetSelected = datas.find((work) => work.id === id)
  // console.log('workSheetSelected', workSheetSelected)
  const myCover = 'src/assets/nelly_serie_1/ns1Cover.jpg'
  const {
    title,
    pictures,
    description,
    // host,
    // rating,
    // location,
    // equipments,
    // tags,
  } = workSheetSelected ?? {}

  const navigate = useNavigate()
  useEffect(() => (!workSheetSelected ? navigate('/*') : undefined))

  return (
    <>
      {!workSheetSelected ? (
        <h1>Redirection...</h1>
      ) : (
        <>
          <Header />
          <main className="workSheet">
            <Slideshow pictures={pictures} />
            {/* <img src="src/assets/nelly_serie_1/ns1_01.jpg" alt="ns1_01" /> */}
            {/* <img src={`../${myCover}`} alt="exemple" /> */}
            <section className="workPresentation">
              <div className="workTitleTags">
                <article className="workTitleLocation">
                  <h2>{title}</h2>
                  <h2>{name}</h2>
                  {/* <p>{location}</p> */}
                </article>
                {/* <Tags tags={tags} /> */}
              </div>
            </section>

            <section className="descriptionEquipement">
              <Collapse
                title={'Description'}
                content={description}
                type={'paragraph'}
              />
              {/* <Collapse
              title={'Équipements'}
              content={equipments}
              type={'list'}
            /> */}
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
