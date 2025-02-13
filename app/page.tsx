"use client";

import Image from "next/image";
import Flower from "@/public/catWithFlower.jpeg";
import HappyCat from "@/public/happyCat.gif";
import AngryCat from "@/public/angryCat.gif";
import CatSmile from "@/public/catSmile.gif";
import CatSideEyes from "@/public/sideEyesCat.gif";
import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState<boolean>(false);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [tryAgain, setTryAgain] = useState<boolean>(false);
  const [isTryAgain, setIsTryAgain] = useState<boolean>(false);
  const [isStillNo, setIsStillNo] = useState<boolean>(false);
  const [isAngry, setIsAngry] = useState<boolean>(false);
  const [superAngry, setSuperAngry] = useState<boolean>(false);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const angryNow = () => {
    return (
      <div>
        <Image
          className="dark:invert mx-auto pb-2"
          src={superAngry ? CatSmile : Flower}
          alt="Cat with flower"
          width={500}
          height={500}
        />
        <h1 className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {superAngry
            ? "That looks like you can&apos;t answer no anymore... 😏🔒 Guess you&apos;re trapped now! No escape! 🤣❤️"
            : "Roses are red 🌹, violets are blue 🪻, I have a question—will my Valentine be you?"}
        </h1>

        <div className="flex flex-col gap-4 w-full py-2">
          <button
            className="bg-white text-black px-4 py-2 rounded-md w-full"
            onClick={() => {
              setTryAgain(false);
              setAnswer(true);
              setHasAnswered(true);
            }}
          >
            Yes
          </button>

          {!superAngry && (
            <button
              className="bg-white text-black px-4 py-2 rounded-md w-full"
              onClick={() => {
                setSuperAngry(true);
              }}
            >
              No
            </button>
          )}
        </div>
      </div>
    );
  };

  const tryAgainQuestion = () => {
    return (
      <div>
        {isAngry ? (
          angryNow()
        ) : (
          <div>
            {!isTryAgain ? (
              <div>
                <Image
                  className="dark:invert mx-auto pb-2"
                  src={isStillNo ? CatSideEyes : Flower}
                  alt="Cat with flower"
                  width={500}
                  height={500}
                />
                <h1 className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {isStillNo
                    ? "Why you still click no ? "
                    : "Roses are red 🌹, violets are blue 🪻, I have a question—will my Valentine be you?"}
                </h1>

                {isStillNo && (
                  <div className="py-2">
                    <button
                      className="bg-white text-black px-4 py-2 rounded-md w-full"
                      onClick={() => {
                        setIsAngry(true);
                      }}
                    >
                      Try again
                    </button>
                  </div>
                )}

                {!isStillNo && (
                  <div className="flex flex-col gap-4 w-full py-2">
                    <button
                      className="bg-white text-black px-4 py-2 rounded-md w-full"
                      onClick={() => {
                        setIsTryAgain(true);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className="bg-white text-black px-4 py-2 rounded-md w-full"
                      onClick={() => {
                        setIsTryAgain(false);
                        setIsStillNo(true);
                      }}
                    >
                      No
                    </button>
                  </div>
                )}
              </div>
            ) : (
              answerYes()
            )}
          </div>
        )}
      </div>
    );
  };

  const answerYes = () => {
    return (
      <div>
        <Image
          className="dark:invert mx-auto pb-2"
          src={HappyCat}
          alt="Cat with flower"
          width={500}
          height={500}
        />
        <h1 className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Yay! 🎉 You just made my day. 😊💖 I can&apos;t wait to spend
          Valentine&apos;s Day with you! ❤️✨
        </h1>

        <div className="flex flex-col gap-4 w-full py-2">
          <button
            className="bg-white text-black px-4 py-2 rounded-md w-full"
            onClick={() => {
              setIsDialogOpen(true);
            }}
          >
            ✉️ Message for you
          </button>
        </div>
      </div>
    );
  };

  const answerNo = () => {
    return (
      <div>
        <div>
          <Image
            className="dark:invert mx-auto pb-2"
            src={AngryCat}
            alt="Cat with flower"
            width={500}
            height={500}
          />
          <h1 className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Excuse me? That&apos;s not the answer I was expecting! Let&apos;s
            try that again. 😏❤️
          </h1>
          <div className="flex flex-col gap-4 w-full py-2">
            <button
              className="bg-white text-black px-4 py-2 rounded-md w-full"
              onClick={() => {
                setHasAnswered(false);
                setAnswer(false);
                setTryAgain(true);
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  };

  const question = () => {
    return (
      <div>
        <Image
          className="dark:invert mx-auto pb-2"
          src={Flower}
          alt="Cat with flower"
          width={500}
          height={500}
        />
        <h1 className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Roses are red 🌹, violets are blue 🪻, I have a question—will my
          Valentine be you?
        </h1>

        <div className="flex flex-col gap-4 w-full py-2">
          <button
            className="bg-white text-black px-4 py-2 rounded-md w-full"
            onClick={() => {
              setTryAgain(false);
              setAnswer(true);
              setHasAnswered(true);
            }}
          >
            Yes
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded-md w-full"
            onClick={() => {
              setTryAgain(false);
              setAnswer(false);
              setHasAnswered(true);
            }}
          >
            No
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center">
        {tryAgain
          ? tryAgainQuestion()
          : hasAnswered
          ? answer
            ? answerYes()
            : answerNo()
          : question()}
      </main>
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsDialogOpen(false)}
        >
          <div
            className="bg-pink-400 p-4 rounded-md max-w-[85%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h1 className="font-bold text-white">
                Happy Valentine&apos;s Day, my love! ❤️
              </h1>

              <div className="py-5">
                <p className="text-white">
                  Thank you for everything you do for me—for loving me 😘,
                  supporting me 🤗, and always standing by my side. 💕 You bring
                  so much happiness 😍 and warmth 🔥 into my life, and I&apos;m
                  beyond grateful for you. 💖 Thank you for forgiving my
                  mistakes 🙈, for understanding me even when I&apos;m not at my
                  best 😌, and for loving me unconditionally. You are my
                  greatest blessing 🎁, my safe place 🏡, and the love of my
                  life. 💑✨ I promise that we will celebrate this day together
                  every year 🎉💞, no matter what. Because every
                  Valentine&apos;s Day 💘, and every day in between, belongs to
                  us. Forever and always. ❤️🌹💍
                </p>
                <p className="text-white">
                  I love you more than words can say.
                </p>

                <p className="flex flex-row items-end justify-end pt-5 font-bold text-white">
                  Huot Monirith
                </p>
                <p className="text-sm justify-end flex flex-row text-white">
                  Someone who loves you so much ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
