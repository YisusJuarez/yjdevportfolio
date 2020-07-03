import Header from "../components/Header/Header";
import HeadContent from '../components/HeadContent/HeadContent';
export default function Home() {
  return (
    <div className="container">
     <Header></Header>
      <HeadContent></HeadContent>
      <style jsx global>{`
      body{
         margin:0px;
        }
      `}</style>
    </div>
  )
}
