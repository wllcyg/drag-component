import './App.css'
import Header from "@/component/Header.tsx";
import Slide from "@/component/slide/Slide.tsx";
import Main from "@/component/main/Main.tsx";
import Right from "@/component/right/Right.tsx";
import AppWrapper from "@/app.style.tsx";

function App() {
  return (
    <AppWrapper>
      <Header className='header'/>
      <section className='content'>
        <Slide/>
        <Main className='main'/>
        <Right/>
      </section>
    </AppWrapper>
  )
}

export default App
