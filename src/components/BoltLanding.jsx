





import { useState } from "react";
// import BoltButton from "../shared/BoltButton";
// import BoltCardAndText from "../shared/BoltCardAndText";
import CardWithTexts from "../components/CardWithTexts";
import Button from "../components/shared/Button";
import BoltButton from "./shared/BoltButton";

const BoltLanding = () => {
  const allMyDetails = [
    {
      id: 1,
      image:
        "https://bolt.eu/static/dbd8bd233040ef350fbe8692cbec3475/1e482/feature-car.webp",
      header: "Drive and earn money",
      details: [
        {
          numbering: 1,
          title: "Drive more, earn more",
          text: "Our 150+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.",
        },
        {
          numbering: 2,
          title: "Set your schedule",
          text: "Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle.",
        },
        {
          numbering: 3,
          title: "Get paid each week",
          text: "You’ll receive your earnings at the end of each week — no need to wait around for payday.",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://bolt.eu/static/bd7db0a3dfc3fdb460fd3dcdd353db18/1e482/feature-courier.webp",
      header: "Make money delivering food",
      details: [
        {
          numbering: 1,
          title: "Earn extra income, fast",
          text: "There’s no subscription fee. You’ll receive your earnings at the end of each week.",
        },
        {
          numbering: 2,
          title: "Make money whenever you like",
          text: "You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour — it’s up to you.",
        },
        {
          numbering: 3,
          title: "Deliver your way",
          text: "Bike, scooter or car — you choose how to make deliveries.",
        },
      ],
    },
    {
      id: 3,
      image:
        "https://bolt.eu/static/64bd80dc26b2419e926d744915ea71d6/1e482/feature-restaurant-payment.webp",
      header: "Increase your sales",
      details: [
        {
          numbering: 1,
          title: "Reach new customers",
          text: "Millions of our users are ordering food or goods from restaurants and stores just like yours.",
        },
        {
          numbering: 2,
          title: "Increase your earnings",
          text: "Our large network of users brings more customers and business to you.",
        },
        {
          numbering: 3,
          title: "Let us handle delivery",
          text: "We’ll take care of the logistics, while you focus on running your business.",
        },
      ],
    },
    {
      id: 4,
      image:
        "https://bolt.eu/static/8727ed14828b20b12521cb1f41d0821e/1e482/feature-tesla-fleet.webp",
      header: "Grow your transport business",
      details: [
        {
          numbering: 1,
          title: "Boost your earnings",
          text: "Our large rider community means more orders per day and higher earnings.",
        },
        {
          numbering: 2,
          title: "Manage your assets",
          text: "Easily view your vehicles, drivers and their current status.",
        },
        {
          numbering: 3,
          title: "Keep track of performance",
          text: "Get easy access to each driver’s completed trips, invoices, and payout information.",
        },
      ],
    },
  ];

  const boltDetails = [
    {
      id: 1,
      text: "Driver",
    },
    {
      id: 2,
      text: "Courier",
    },
    {
      id: 3,
      text: "Restaurant or store owner",
    },
    {
      id: 4,
      text: "Fleet owner",
    },
  ];

  const [tabs, setTabs] = useState(1);

  function updateTabs(whatTab) {
    setTabs(whatTab);
  }

  return (
    <div className="w-100 text-center" style={{ height: "100vh" }}>
      <h1>Earn money with Bolt</h1>
      <div className="d-flex justify-content-center gap-3">
        {boltDetails.map((boltDetail) => (
          <BoltButton
            key={boltDetail.id}
            text={boltDetail.text}
            onClick={() => updateTabs(boltDetail.id)}
            style={
              tabs === boltDetail.id
                ? { border: "none", background: "black", color: "white" }
                : { border: "2px solid #cfd3d9", background: "white" }
            }
          />
        ))}
      </div>
      <div className="mt-4">
        {allMyDetails.map(
          (allMyDetail) =>
            tabs === allMyDetail.id && (
              <CardWithTexts key={allMyDetail.id} {...allMyDetail} />
            )
        )}
      </div>
    </div>
  );
};

export default BoltLanding;
