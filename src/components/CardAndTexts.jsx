



import BoltDescript from '../components/BoltDescript';


const CardAndTexts  = ({image,header,details=[]})=> {
  // const details =[

  //         {
  //           number: 1,
  //           title: "Drive more, earn more",
  //           words:
  //             "Our 150+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.",
  //         },
  //         {
  //           number: 2,
  //           title: "Set your schedule",
  //           words:
  //             "Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle.",
  //         },
  //         {  number:3,
  //           title:"Get paid each week",
  //           words:"You’ll receive your earnings at the end of each week — no need to wait around for payday.",
  //         },

        
  //       {
  //         number: 1,
  //         title: "Earn extra income, fast",
  //         words: "There’s no subscription fee. You’ll receive your earnings at the end of each week.",
  //       },
  //       {
  //         number: 2,
  //         title: "Make money whenever you like",
  //         words: "You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour — it’s up to you.",
  //       },
  //       {
  //         number: 3,
  //         title: "Deliver your way",
  //         words: "Bike, scooter or car — you choose how to make deliveries.",
  //       },

        
  //       {
  //         number: 1,
  //         title: "Reach new customers",
  //         words: "Millions of our users are ordering food or goods from restaurants and stores just like yours.",
  //       },
  //       {
  //         number: 2,
  //         title: "Increase your earnings",
  //         words: "Our large network of users brings more customers and business to you.",
  //       },
  //       {
  //         number: 3,
  //         title: "Let us handle delivery",
  //         words: "We’ll take care of the logistics, while you focus on running your business.",
  //       },
      
      
  //       ]
      
  
  return (
    <div className="container d-flex justify-content-between py-5 px-4 ">
      <div className="w-50 rounded overflow-hidden">
        <img src={image} alt="img" className="img-fluid" />
      </div>
      <div className="text-start">
        <h2>{header}</h2>

        {details.map((detail) => (
          <BoltDescript key={detail.number} {...detail} />
        ))}
      </div>
    </div>
  );
}

export default CardAndTexts;
