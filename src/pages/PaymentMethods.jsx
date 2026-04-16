import { useState } from "react";
import TopBar from "../compo_sanjo/TopBar";
import PrimaryButton from "../compo_sanjo/PrimaryButton";
import PaymentMethodCard from "../compo_sanjo/PaymentMethodCard";
import { useNavigate } from "react-router-dom";

export default function PaymentMethods() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("mastercard");

  const methods = [
    {
      id: "mastercard",
      type: "mastercard",
      title: "**********4444",
      subtitle: "Expires 09/25",
    },
    {
      id: "visa",
      type: "visa",
      title: "**********3343",
      subtitle: "Expires 09/25",
    },
    {
      id: "paypal",
      type: "paypal",
      title: "Petra-stark@gmail.com",
      subtitle: "",
    },
  ];

  return (
    <div className="min-h-dvh w-full bg-[#fcfcfc] flex flex-col pt-12 pb-8 px-6 font-sans relative">
      <div className="w-full max-w-5xl mx-auto flex flex-col h-full grow">
        <TopBar
          iconType="close"
          onLeftClick={() => navigate(-1)}
          rightText="Done"
        />

        <div className="mt-2 text-[#4B1E51]">
          <h1 className="text-[34px] leading-tight font-semibold tracking-tight">
            Payments methods
          </h1>
        </div>

        <p className="mt-4 text-[13.5px] font-semibold text-black leading-snug pr-4">
          choose desired payment type. We offer easy ways for payments on our
          app
        </p>

        <div className="flex flex-col gap-3. mt-8">
          {methods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              type={method.type}
              title={method.title}
              subtitle={method.subtitle}
              selected={selectedMethod === method.id}
              onClick={() => setSelectedMethod(method.id)}
            />
          ))}
        </div>

        <div className="mt-8 mb-3">
          <h3 className="text-sm font-bold text-black tracking-wide uppercase">
            CURRENT METHOD
          </h3>
        </div>

        <PaymentMethodCard
          type="cash"
          title="Cash payment"
          subtitle="Default method"
          selected={selectedMethod === "cash"}
          onClick={() => setSelectedMethod("cash")}
        />

        <div className="mt-auto pt-6 flex flex-col items-center">
          <PrimaryButton onClick={() => navigate("/add-card")}>
            ADD PAYMENT METHOD
          </PrimaryButton>
          <div className="`w-32.5 `h-0.75 bg-[#1C3E6E] rounded-full mt-8" />
        </div>
      </div>
    </div>
  );
}
