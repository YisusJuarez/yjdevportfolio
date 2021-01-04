import Header from "../components/Header/Header";
import HeadContent from '../components/HeadContent/HeadContent';
import SkillsExp from "../components/SkillsExp/SkillsExp";
import PortfolioList from '../components/PortfolioList/PortfolioList'
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
export default function Home() {
  return (
    <div className="container">
      <Header></Header>
      <HeadContent></HeadContent>
      <section className="content-cont">
        <Services></Services>
        <SkillsExp></SkillsExp>
        <PortfolioList></PortfolioList>
      </section>

      <Footer></Footer>
      <style jsx global>{`
      body{
         margin:0px;
        }
        .content-cont{
padding-top:70px;
        }
        @media only screen and (max-width: 959px){
          .content-cont{
            padding-top:10px;
                    }
        } 
      `}</style>
    </div>
  )
}
