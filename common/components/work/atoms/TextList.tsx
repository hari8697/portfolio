const TextList = ({ data }) => {
  let comps
  if (Array.isArray(data)) {
    comps = data.map((el, idx) => {
      return (
        <li key={idx}>
          {el}
          {idx < data.length - 1 && ","}
        </li>
      )
    })
  } else {
    comps = <p>{data}</p>
  }

  return <>{comps}</>
}

export default TextList
