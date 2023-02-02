import style from "./Footer.module.css"

function handleClick() {
    alert("success event")
}

function Footer(){
    return (
        <div className={style["wrapper"]}>
            <div className={style["logo"]}></div>
            <nav>
                <p onClick={handleClick}>Company</p>
                <p onClick={handleClick}>Shoppers</p>
                <p onClick={handleClick}>Merchants</p>
                <p onClick={handleClick}>Subscribe</p>
            </nav>
        </div>
    )
}

export default Footer