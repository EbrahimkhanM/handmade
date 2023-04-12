import React from 'react'

function index() {
    $(document).ready(function(){
  $(".small-img").hover(function(){
    $(".big-img").attr('src')
  });
    });
    
  return (
    <div>
       
        <ul className=' float-left mt-[5px]'>
        
            <li className='list-none mb-[10px]' ><img id='small-img' src='https://pk.khaadi.com/media/catalog/product/e/s/est22140_red_1.jpg?width=53&height=80&canvas=53:80&quality=95&bg-color=255,255,255&fit=bounds' className='small-img w-[70px] h-[70px] mt-[10px] '></img></li>
            <li className='list-none mb-[10px]' ><img id='small-img'src='https://pk.khaadi.com/media/catalog/product/e/s/est22140_red_2.jpg?width=53&height=80&canvas=53:80&quality=95&bg-color=255,255,255&fit=bounds' className='small-img w-[70px] h-[70px] '></img></li>
            <li className='list-none mb-[10px]'><img id='small-img' src='https://pk.khaadi.com/media/catalog/product/e/s/est22140_red_3.jpg?width=53&height=80&canvas=53:80&quality=95&bg-color=255,255,255&fit=bounds' className='small-img w-[70px] h-[70px] '></img></li>
            <li className='list-none mb-[10px]'><img id='small-img' src='https://pk.khaadi.com/media/catalog/product/e/s/est22140_red_4.jpg?width=53&height=80&canvas=53:80&quality=95&bg-color=255,255,255&fit=bounds' className='small-img w-[70px] h-[70px] '></img></li>
        </ul>
        <img src='https://pk.khaadi.com/media/catalog/product/e/s/est22140_red_1.jpg?width=53&height=80&canvas=53:80&quality=95&bg-color=255,255,255&fit=bounds' className='big-img w-[350px] h-[400px] float-left mt-[10px] ml-[10px]'></img>
        
    </div>
  )    
}

export default index