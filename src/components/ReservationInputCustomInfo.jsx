import { titles } from "../text/titles"
import TitleLabel from "./TitleLabel"

export default function ReservationInputCustomInfo() {
  return (
    <>
      <TitleLabel title={titles.inputCustomInfo.title} subTitle={titles.inputCustomInfo.subTitle} />
    </>
  )
}