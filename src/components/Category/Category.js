import style from "./Category.module.css"

function handleClick() {
    alert("success event")
}

function Category() {
    return (
        <>
            <h1>Categories</h1>

            <div className={style["wrapper"]}>
                <div className={style["macbook"]}>
                    <div className={style["img"]}></div>
                    <div className={style["btn"]} onClick={handleClick}>Electronics</div>
                </div>
                <div className={style["boot"]}>
                    <div className={style["img"]}></div>
                    <div className={style["btn"]} onClick={handleClick}>Fashion & accessories</div>
                </div>
                <div className={style["perfume"]}>
                    <div className={style["img"]}></div>
                    <div className={style["btn"]} onClick={handleClick}>Beauty & health</div>
                </div>
                <div className={style["plant"]}>
                    <div className={style["img"]}></div>
                    <div className={style["btn"]} onClick={handleClick}>Home & furniture</div>
                </div>

                <div className={style["btn-view-all"]} onClick={handleClick}>View all
                    <div className={style["arrow"]}></div>
                </div>
            </div>
        </>
    )
}

export default Category