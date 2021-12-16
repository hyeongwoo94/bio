import file from "../img/file/Park_hyeong_woo.hwp"

const Footer = () => {
  return(
    <footer id="footer" className="bg-indigo-400">
      <div className="max-w-screen-lg flex justify-between my-2 mx-auto text-white">
        <p className="text-xl">gudn4338@naver.com</p>
        <p><a href="https://github.com/hyeongwoo94/bio" onClick={"_blank"}> 포트폴리오 코드(제작:React)</a></p>
        <p>
          <a className="hover:text-blue-400" href={file} download="박형우_이력서.hwp" alt="이력서 다운로드">
            <i className="xi-file-o mr-1"></i>
            이력서 다운로드
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;