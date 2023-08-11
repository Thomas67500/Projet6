import '../styles/styles.css'
import BannerIMG from'../img/IMG.png'



export const Banner = () => {
return (
<div className='Banniere'>
<img src={BannerIMG} className='Banniere__IMG' alt='banniere' />
<h2 className='Banniere__Texte'> 
Chez vous,partout et ailleurs
</h2>


</div>




)
}