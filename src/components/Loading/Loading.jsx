import cssLoading from './Loading.module.css'

export function Loading () {
    return(
        <div className={cssLoading.loadigConteiner}>
            <p className={cssLoading.loadigText}>Loading...</p>
        </div>
    )
}