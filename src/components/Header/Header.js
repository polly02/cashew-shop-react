import style from "./Header.module.css"

function handleClick() {
    alert("success event")
}

function Header() {
    return (
        <div className={style["wrapper"]}>
            <div className={style["logo"]}></div>
            <nav>
                <p onClick={handleClick}>Ways to pay</p>
                <p onClick={handleClick}>Shop</p>
                <p onClick={handleClick}>For business</p>
            </nav>
            <div className={style["login-btn"]}>
                <div className={style["merchant-login"]} onClick={handleClick}>Merchant login</div>
                <div className={style["customer-login"]} onClick={handleClick}>Customer login</div>
            </div>
        </div>
    )
}

export default Header