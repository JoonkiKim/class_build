/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 
  trailingSlash: true,
  generateBuildId: () => "codecamp-deploy-project",


  // 아래의 주소만 out폴더에 만들어줘 (getServerSideProps가 있는 페이지는 제외함) 
  exportPathMap: () => 

 ({
  "/" : {page:"/"},
  "/boards" : {page: "boards"},
  // "/404" : {page: "/404"}
})  
};

export default nextConfig;
