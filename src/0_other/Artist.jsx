import PropTypes, { element } from 'prop-types'

import Header from '../components/Header'
import Collapse from '../components/Collapse'
// import { mytext } from '../datas/filemytext'
import { datasNelly } from '../datas/datasNelly.js'

const varJson =
  '{"one" : "Céramique\\nUtilisant la céramique comme moyen d\'expression nous créons manuellement des collections uniques et luxueuses pour la maison et l\'art de la table, des objets décoratifs et utilitaires, des pièces d\'architecture intérieures ou extérieures.\\nChaque pièce est caressée, formée, déformée, oubliée, retrouvée, émaillée, chauffée pour donner un objet unique porteur d\'énergie et d\'émotion.\\nNotre quotidien est une fusion de certitudes et d\'erreurs, de précision technique, d\'expérimentations constantes, d’accidents, de travail dur et de déceptions, de simplicité et de bonheur.\\nBonheur que nous aimerions vous transmettre à travers ces petits morceaux d\'argiles.", "trucInfo" : "TrucForGeeks\\n\\nOne stop solution for CS subjects"}'

export default function Artist({ name }) {
  // datasNelly.map((obj) => {
  //   Array.of(obj).forEach(
  //     (elt) => Object.values(elt).map((subE) => subE.map((i) => console.log(i)))
  //     // Object.values(elt).map((subE) => console.log(subE))
  //   )
  // })
  // console.log(datasNelly)
  // datasNelly.map((obj) => obj.map((elt) => console.log(elt)))
  // datasNelly.map((obj) => {
  //   console.log(obj[0])
  // })
  // datasNelly.map((obj) => {
  //   if (typeof obj === 'string') {
  //     console.log('title', obj)
  //   }
  //   if (typeof obj === 'object') {
  //     obj.map((elt) => console.log(elt))
  //   }
  // })
  // console.log(typeof datasNelly[1])

  return (
    <>
      <Header />
      {/* <h2>{name}</h2> */}
      <div>
        {/* {datasNelly.map((obj) => {
          typeof obj === 'object' ? (
            obj.map((elt) => {
              return <p>{elt}</p>
            })
          ) : (
            <h3>{elt}</h3>
          )
        })} */}
        {datasNelly.map(
          (obj) => {
            // if (typeof obj === 'object') {
            //   obj.map((elt, index) => {
            //     return <p key={`${elt}-${index}`}>{elt}</p>
            //   })
            // }
            // if (typeof obj === 'string') {
            //   return <h3 key={`${obj}-${index}`}>{obj}</h3>
            // } else {
            // obj.map((elt, index) => {
            //   return <p key={`${elt}-${index}`}>{elt}</p>
            // })
            // }
            switch (typeof obj) {
              case 'string':
                {
                  return <h3>{obj}</h3>
                }
                break
              case 'object':
                obj.map((elt, index) => {
                  return <p key={`${elt}-${index}`}>{elt}</p>
                })
                break
              default:
                console.log('rien')
            }
          }
          // obj.map((elt, index) => {
          // if (typeof obj === 'object') {
          //   return <p key={`${elt}-${index}`}>{elt}</p>
          // } else {
          //   return <h3>{obj}</h3>
          // }
          // })
        )}
      </div>
    </>
  )
}
// (<h3 key={`${obj}-${index}`}>{obj[0]}</h3>),
