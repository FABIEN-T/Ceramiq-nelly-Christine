import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import datasNelly from '../datas/datasNelly.json'
// import Tags from '../../components/Tags'
// import Rating from '../../components/Rating'
import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'

export default function WorkSheet() {
  const { id } = useParams()
  const workSheetSelected = datasNelly.find((work) => work.id === id)
  // console.log('workSheetSelected', workSheetSelected)

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
        <main className="workSheet">
          {/* <Slideshow pictures={pictures} /> */}
          <img src="src/assets/nelly_serie_1/ns1_01.jpg" alt="ns1_01" />

          <section className="workPresentation">
            <div className="workTitleTags">
              <article className="workTitleLocation">
                <h2>{title}</h2>
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
      )}
    </>
  )
}
