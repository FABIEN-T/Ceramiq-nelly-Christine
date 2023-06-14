import { useState } from 'react'
import Chevron from '../assets/chevronUp.svg'

function Collapse({ title, content, type }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <article className="Collapse">
      <div className="CollapseHeader" onClick={() => setIsOpen(false)}>
        <h3>{title}</h3>
        <img src={Chevron} alt="chevron" className="chevronUp" />
      </div>
      <div className="CollapseParagrah">
        {type === 'paragraph' ? (
          <p>{content}</p>
        ) : (
          <ul>
            {content.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  ) : (
    <article className="Collapse">
      <div className="CollapseHeader" onClick={() => setIsOpen(true)}>
        <h3>{title}</h3>
        <img src={Chevron} alt="chevron" className="chevronDown" />
      </div>
    </article>
  )
}

export default Collapse
