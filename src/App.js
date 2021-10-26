import './App.css';
import Card from "./components/card"
import { useState } from 'react';

function App() {

  let [cardsData, setCardData] = useState(
    [
      {
        title: "ST-200 HIGH BASS, HANDSFREE",
        type: "electronics",
        img: "https://static-01.daraz.pk/p/cf9a45356e37e8b5496c09382789ff28.jpg",
        description: "Product details of ST-200 HIGH BASS, JETT BLACK HANDSFREE, WITH TWO EXTRA EARPLUGS PAIR"
      },
      {
        title: "Slim 2500mAh Power Bank",
        type: "electronics",
        img: "https://static-01.daraz.pk/p/7c91bd165b7eeea573aa518cc0933ae6.jpg",
        description: "We offer quality imported full battery 2500 mAhUltra Slim Credit Card type Power BanK 2500 mAh"
      },
      {
        title: "Latest M5 Smart Fitness",
        type: "electronics",
        img: "https://static-01.daraz.pk/p/93eceef8327e91fe480cadf4c534f050.png",
        description: "Heart rate monitor, Call and SMS reminder, Camera, SMS reminder, SMS reminder,   Lift or turn over your hands, light up screen"
      },
      {
        title: "Mini Speaker Bluetooth Extra",
        type: "electronics",
        img: "https://static-01.daraz.pk/p/5f569321be909df4fec2944c38bd2aa8.jpg",
        description: "Model BT10 Bluetooth speaker Mainly function: Bluetooth(V4.0), TF card, AUX, Calls AnswerMaterial"
      },
      {
        title: "Silicon Pop It Fidget Toy POP",
        type: "toys",
        img: "https://static-01.daraz.pk/p/8d9560e5f7cefd430fa10f3949ac9899.png",
        description: "Product details details details of Silicon Pop It Fidget Toy POP Bubble Squeeze Sensory Fidget Toys Pop It Toy"
      },
      {
        title: "Creative Powerful Seamless Soap",
        type: "toys",
        img: "https://static-01.daraz.pk/p/7313e31494385e326009d6bf8d3ec034.jpg",
        description: "We're on a campaign to reduce the use of plastic, hope to ultimately eradicate the world and City"
      },
      {
        title: "Stickerless 56mm Qiyi Warrior",
        type: "toys",
        img: "https://static-01.daraz.pk/p/5e537dfb7e1f9c60dfbdf90d337f8759.png",
        description: "More than 20 years ago, the Rubik Speed Cube conquered the world with her unique magic power"
      },
      {
        title: "Premium Quality Duck Toy",
        type: "toys",
        img: "https://static-01.daraz.pk/p/b7587d30e50dc49c3a8fb344f075fd89.jpg",
        description: "Yellow Duck Witg Noise Voice Chuchu Character.Soft Rubber with Chuchu Sound.Best Toy For Kids"
      },
      {
        title: "ABC Toy Block Mat Alphabets",
        type: "toys",
        img: "https://static-01.daraz.pk/p/869cc433c498656e278c4ee72ef2c9e2.jpg",
        description: "Baby Toys presenting the English Alphabets ABC And Math Counting Numbers 123 - Puzzle Play Mat"
      },
      {
        title: "Dot Printed Office Wear Gents",
        type: "wear",
        img: "https://static-01.daraz.pk/p/9f2ec6aff7ef49ebedeecd5969112312.jpg",
        description: "Product details of Dot Printed Office Wear Gents Dress Semi Formal Shirt for Men Shirt for Men"
      },
      {
        title: "Office Wear Gents Check Dress Formal",
        type: "wear",
        img: "https://static-01.daraz.pk/p/4d20fd11bcddf85587da001d6df6b21c.jpg",
        description: "This classy shirt for Men gives you a gorgeous look on everyday wear and specially for wears"
      },
      {
        title: "Mens Formal Check Shirt by Chase Value",
        type: "wear",
        img: "https://static-01.daraz.pk/p/89b95e43aecc0c76d970cd42de4d4987.jpg",
        description: "Product details of Mens Formal Check Shirt by Chase Value - Greyish Brown Mens Formal Check Shirt"
      }
    ]
  )



  let filterProduct = (e) => {
    let val = e.target.value
    let arr = cardsData.filter(x=> x.type == val)
    setCardData(arr)
    console.log(val);
    console.log(cardsData);
    // console.log(arr);
  }

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <select className="form-select"onChange={e=>{filterProduct(e)}} >
            <option value="select">Select</option>
            <option value="electronics">Electronics</option>
            <option value="wear">Men Wear</option>
            <option value="toys">Toys</option>
          </select>
        </div>
        <div className="col">
          <input type="text" className="form-control" onChange={(e)=>{filterProduct(e)}} placeholder="Search item " />
        </div>
      </div>
      <div className="row">
        {
          cardsData.map((item, index) => (
            <div className="col-3 my-3" key={index}>
              <Card title={item.title} img={item.img} description={item.description} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App;
