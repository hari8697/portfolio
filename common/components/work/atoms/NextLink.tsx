import Link from "next/link"

interface Props {
  next: {
    title: string
    id: string
  }
}

const NextLink = ({ next }: Props) => {
  return (
    <div className="next">
      <h5>Next</h5>
      <Link href={`/work/${next.id}`}>
        <>
          <h3>{next.title}</h3>
          <img src="/work/icons/next_arrow.svg" alt="" />
        </>
      </Link>
    </div>
  )
}

export default NextLink
