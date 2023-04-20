import { ArrowUpOutlined } from "@ant-design/icons"

export default function Top () {
  const goTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  return(
    <div style={{margin: "50px auto 0 auto", display: 'flex', justifyContent: 'center'}}>
      <ArrowUpOutlined onClick={goTop} style={{textAlign: "center", fontSize: '30px'}}/>
    </div>
  )
}