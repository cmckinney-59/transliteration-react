import Description from '../../components/Description/Description.js'
import Transliterator from '../../components/Transliterator/Transliterator.js'

export default function PageContent({image, title, description}) {
  return(
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
      <Description/>
      <Transliterator/>
    </li>
  )
}