import { FC } from "react"

interface IProps {
  title: string
}

const Title: FC<IProps> = ({ title }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div> 
  )
}

export default Title