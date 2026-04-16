import { useState } from "react";
import TopBar from "../compo_sanjo/TopBar";
import PrimaryButton from "../compo_sanjo/PaymentMethodCard";
import InputField from "../compo_sanjo/InputField";
import { Scan } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddCreditCard() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [express, setExpress] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <div className="min-h-dvh w-full bg-[#fcfcfc] flex flex-col pt-12 pb-8 px-6 font-sans relative">
      <div className="w-full max-w-5xl mx-auto flex flex-col h-full grow">
        <TopBar iconType="arrow" onLeftClick={() => navigate(-1)} />

        <div className="mt-2 mb-10 text-[#4B1E51]">
          <h1 className="text-[34px] leading-tight font-semibold tracking-tight">
            Add credit card
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <InputField
            label="Name"
            placeholder="Jorden dagoo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Credit card number"
            placeholder="******_****_*****67"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <button className="flex items-center gap-3 bg-[#4B1E51] rounded-xl px-5 py-3 text-white hover:bg-[#341538] transition-colors">
            <Scan className="w-5 h-5 text-[#DDA9DF]" />
            <span className="font-semibold text-[15px] tracking-wide">
              Scan card
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-10">
          <InputField
            label="Express"
            placeholder="10/25/2030"
            value={express}
            onChange={(e) => setExpress(e.target.value)}
          />
          <InputField
            label="CVV"
            placeholder="**********"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <div className="mt-auto mb-8">
          <p className="text-[10px] text-gray-500 font-medium mb-3">
            Debit cards are accepted at some locations and for some categories.
          </p>
          <div className="flex items-center gap-2">
            {/* Card logos - placeholder divs */}
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center font-bold italic text-blue-800 text-[10px]">
              VISA
            </div>
            <div className="w-12 h-8 bg-red-800 rounded flex items-center justify-center font-bold text-white text-[6px] text-center px-1">
              AMERICAN EXPRESS
            </div>
            <div className="w-12 h-8 bg-gray-300 rounded flex items-center justify-center font-bold text-gray-600 text-[8px]">
              DISCOVER
            </div>
            <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center">
              <div className="bg-red-500 rounded-full w-4 h-4 opacity-80 -mr-1"></div>
              <div className="bg-yellow-500 rounded-full w-4 h-4 opacity-80 -ml-1"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center pb-2">
          <PrimaryButton onClick={() => navigate(-1)}>
            ADD PAYMENT METHOD
          </PrimaryButton>
          <div className="`w-32.5 h-0.75 bg-[#1C3E6E] rounded-full mt-8" />
        </div>
      </div>
    </div>
  );
}
