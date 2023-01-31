import style from "./Category.module.css"

function Category() {
    return (
        <>
            <h1>Categories</h1>

            <div className={style["wrapper"]}>
                <div className={style["macbook"]}>
                    <div className={style["img"]}></div>
                    <div className={style["btn"]}>Electronics</div>
                </div>
                <div className={style["boot"]}>
                    <div className={style["img"]}></div>
                    <div className={style["btn"]}>Fashion & accessories</div>
                </div>
                <div className={style["perfume"]}>
                    <div className={style["img"]}></div>
                    <div className={style["btn"]}>Beauty & health</div>
                </div>
                <div className={style["plant"]}>
                    <div className={style["img"]}></div>
                    <div className={style["btn"]}>Home & furniture</div>
                </div>

                <div className={style["btn-view-all"]}>View all
                    <div className={style["arrow"]}></div>
                </div>
            </div>
        </>
    )
}

export default Category