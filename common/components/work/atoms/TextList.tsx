import { ParaLarge } from "@/components/styled"

const TextList = ({ data }) => {
  let comps
  if (Array.isArray(data)) {
    comps = data.map((el, idx) => {
      return (
        <ParaLarge key={idx}>
          {el}
          {idx < data.length - 1 && ","}
        </ParaLarge>
      )
    })
  } else {
    comps = <ParaLarge>{data}</ParaLarge>
  }

  return <>{comps}</>
}

export default TextList
