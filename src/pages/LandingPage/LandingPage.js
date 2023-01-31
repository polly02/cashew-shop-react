import Category from "../../components/Category/Category"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import MobileStore from "../../components/MobileStore/MobileStore"
import Preview from "../../components/Preview/Preview"
import style from "./LandingPage.module.css"

function LandingPage() {
    return (
        <>
            <Header></Header>
            <div className={style["preview-page"]}>
                <Preview ></Preview>
            </div>
            <Category></Category>
            <MobileStore></MobileStore>
            <Footer></Footer>
        </>
    )
}

export default LandingPage