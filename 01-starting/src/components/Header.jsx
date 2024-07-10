import ImgReact from '../assets/react-core-concepts.png'
const reactDescription  =["Fundamental","Core","Crucial"]
function genReactDes(max) {
  return Math.floor(Math.random()*(max+1));
}

export default function Header()
{
  const Description = reactDescription[genReactDes(2)];
  return (
    <header>
    <img src={ImgReact} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {Description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}
