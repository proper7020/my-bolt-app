

import React, { useState } from "react";
import Button from "../shared/Button";
import CardAndTexts from "../CardAndTexts";

const BoltLandingPage = () => {
  const myDetails = [
    {
      id: 1,
      image:
        "https://bolt.eu/static/dbd8bd233040ef350fbe8692cbec3475/1e482/feature-car.webp",
      header: "Drive and earn money",
      details: [
        {
          number: 1,
          title: "Drive more, earn more",
          words:
            "Our 150+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.",
        },
        {
          number: 2,
          title: "Set your schedule",
          words:
            "Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle.",
        },
        {
          number: 3,
          title: "Get paid each week",
          words:
            "You’ll receive your earnings at the end of each week — no need to wait around for payday.",
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
          number: 1,
          title: "Earn extra income, fast",
          words:
            "There’s no subscription fee. You’ll receive your earnings at the end of each week.",
        },
        {
          number: 2,
          title: "Make money whenever you like",
          words:
            "You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour — it’s up to you.",
        },
        {
          number: 3,
          title: "Deliver your way",
          words: "Bike, scooter or car — you choose how to make deliveries.",
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
          number: 1,
          title: "Reach new customers",
          words:
            "Millions of our users are ordering food or goods from restaurants and stores just like yours.",
        },
        {
          number: 2,
          title: "Increase your earnings",
          words:
            "Our large network of users brings more customers and business to you.",
        },
        {
          number: 3,
          title: "Let us handle delivery",
          words:
            "We’ll take care of the logistics, while you focus on running your business.",
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
          number: 1,
          title: "Boost your earnings",
          words:
            "Our large rider community means more orders per day and higher earnings.",
        },
        {
          number: 2,
          title: "Manage your assets",
          words: "Easily view your vehicles, drivers and their current status.",
        },
        {
          number: 3,
          title: "Keep track of performance",
          words:
            "Get easy access to each driver’s completed trips, invoices, and payout information.",
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

  const [selectedTab, setSelectedTab] = useState(myDetails[0]);

  const handleButtonClick = (id) => {
    const detail = myDetails.find((detail) => detail.id === id);
    setSelectedTab(detail);
  };

  return (
    <div  className="w-100 text-center py-5" style={{ height: "100vh" }}>
      <h1 style={{ fontWeight: "bold" }}>Earn money with Bolt</h1>
      <div className="d-flex justify-content-center gap-3">
        {boltDetails.map((boltDetail) => (
          <Button
            key={boltDetail.id}
            text={boltDetail.text}
            onClick={() => handleButtonClick(boltDetail.id)}
          />
        ))}
      </div>
      <div className="mt-4">
        <CardAndTexts
          image={selectedTab.image}
          header={selectedTab.header}
          details={selectedTab.details}
        />
      </div>
    </div>
  );
};

export default BoltLandingPage
