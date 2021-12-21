import file from "../img/file/Park_hyeong_woo.hwp"

const Footer = () => {
  return(
    <footer id="footer" className="bg-gray-800">
      <div className="max-w-screen-lg flex justify-between my-2 mx-auto text-white px-2 md:px-0">
        <p className="text-xl md:block hidden">gudn4338@naver.com</p>
        <p className="hover:font-extrabold"><a className="hover:text-red-400" href="https://github.com/hyeongwoo94/bio" onClick={"_blank"}> 코드 보러가기(제작:React)</a></p>
        <p className="hover:font-extrabold">
          <a className="hover:text-red-400" href={file} download="박형우_이력서.hwp" alt="이력서 다운로드">
            <i className="xi-file-o mr-1"></i>
            이력서 다운로드
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;