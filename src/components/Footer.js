import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col absolute top-[100%] left-0 w-full">
      <div class="grid grid-cols-12 py-10 px-12 lg:px-16 2xl:px-[20%] min-[1800px]:px-[10%] min-[2200px]:px-[25%]">
        <div class="col-span-6 md:col-span-2">
          <ul class="flex flex-col gap-y-4">
            <li>
              <a
                href="#about"
                class="text-sm font-bold text-black -tracking-wider"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#how-to-buy"
                class="text-sm font-bold text-black -tracking-wider"
              >
                How to Buy
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                class="text-sm font-bold text-black -tracking-wider"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                class="text-sm font-bold text-black -tracking-wider"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div class="col-span-6 md:col-span-8">
          <ul class="flex flex-col gap-y-4">
            <li>
              <a href="#" class="text-sm font-bold text-black -tracking-wider">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="text-sm font-bold text-black -tracking-wider">
                Cookies
              </a>
            </li>
            <li>
              <a href="#" class="text-sm font-bold text-black -tracking-wider">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
        <div class="col-span-12 mt-2 md:col-span-2 md:mt-0">
          <div class="flex flex-col items-center justify-center h-full md:items-end">
            <p class="text-black text-center md:text-right __className_cbf3c0 text-base"></p>
            <a class="underline text-white block text-center md:text-right font-bold text-base __className_cbf3c0">
              contact@megadice.io
            </a>
            <div class="flex mt-4 text-center gap-x-2 md:text-right">
              <a
                href="https://twitter.com/megadice"
                class="flex items-center justify-center w-8 h-8 border border-white rounded-full"
              >
                <img
                  alt="icon"
                  loading="lazy"
                  width="16"
                  height="17"
                  decoding="async"
                  data-nimg="1"
                  className="text-transparent"
                  src="/images/twitter-white.svg"
                />
              </a>
              <a
                href="https://t.me/Megadicecasino"
                class="flex items-center justify-center w-8 h-8 border border-white rounded-full"
              >
                <img
                  alt="icon"
                  loading="lazy"
                  width="14"
                  height="15"
                  decoding="async"
                  data-nimg="1"
                  className="text-transparent"
                  src="/images/telegram-white.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="h-56 px-4 py-4 text-center bg-[#091620] lg:px-16 lg:py-10 lg:flex lg:h-32 md:text-start 2xl:px-[10%] min-[1800px]:px-[10%] min-[2200px]:px-[25%]">
        <div class="flex items-center w-1/3 mx-auto md:mx-0">
          <img
            alt="logo"
            loading="lazy"
            width="148"
            height="49"
            decoding="async"
            data-nimg="1"
            className="text-transparent"
            src="/images/logo.svg"
          />
        </div>
        <div class="flex flex-col mt-2 lg:items-end lg:w-2/3 lg:mt-0">
          <p class="text-sm font-medium text-gray-400">
            Copyright 2024 Mega Dice. All Rights Reserved.
          </p>
          <p class="text-sm font-medium mt-1 lg:text-right text-gray-400">
            <span class="font-bold ">Disclaimer: </span>Cryptocurrency may be
            unregulated in your jurisdiction. The value of cryptocurrencies may
            go down as well as up. Profits may be subject to capital gains or
            other taxes applicable in your jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
