"use client";
import { useNewContext } from "@/contexts/NewProvider";
import { ChevronLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function NewPage({}: Props) {
  const router = useRouter();

  const { selectedIndex, setSelectedIndex } = useNewContext();

  return (
    <>
      <div className="w-full overflow-clip">
        <div className="w-full flex gap-5 p-6">
          {selectedIndex == 0 ? (
            <X onClick={router.back} />
          ) : (
            <ChevronLeft onClick={() => setSelectedIndex(selectedIndex - 1)} />
          )}
        </div>
      </div>

      {selectedIndex == 3 && (
        <div className="p-6">
          <div
            onClick={() => setSelectedIndex(selectedIndex - 1)}
            className="absolute w-full h-full left-1/2 top-0 -translate-x-1/2 bg-black bg-opacity-35"
          ></div>
          <div className="flex flex-col gap-4 p-6 rounded-t-3xl z-10 absolute w-full h-1/2 bottom-0 left-1/2 -translate-x-1/2 bg-white">
            <div className="font-GowunBatangRegular text-2xl">
              일기 쓰기 알림 설정하기
            </div>
            <div className="font-PretendardRegular text-[#313131cc]">
              일기 쓰기를 잊지 않도록 알림을 보내드려요.
              <br />
              원하는 시간대를 설정해보세요.
            </div>
          </div>
          <h1 className="text-xl p-6 font-GowunBatangRegular">
            일기장 이름은 무엇으로 할까요?
          </h1>

          <input
            type="text"
            className="w-full h-14 p-5 bg-[#F3F3F3] rounded-2xl"
            placeholder="일기장 이름을 입력해주세요"
          />
          <h1 className="text-xl p-6 font-GowunBatangRegular">
            얼마나 여행을 떠나나요?
          </h1>
          <input
            type="date"
            className="w-full h-14 p-5 bg-[#F3F3F3] rounded-2xl"
            placeholder="여행지를 입력해주세요."
          />
          <h1 className="text-xl p-6 font-GowunBatangRegular">
            어디로 여행을 가시나요?
          </h1>
          <input
            type="text"
            className="w-full h-14 p-5 bg-[#F3F3F3] rounded-2xl"
            placeholder="여행지를 입력해주세요"
          />
        </div>
      )}
      {selectedIndex == 2 && (
        <div className="p-6">
          <h1 className="text-xl p-6 font-GowunBatangRegular">
            일기장 이름은 무엇으로 할까요?
          </h1>

          <input
            type="text"
            className="w-full h-14 p-5 bg-[#F3F3F3] rounded-2xl"
            placeholder="일기장 이름을 입력해주세요"
          />
          <h1 className="text-xl p-6 font-GowunBatangRegular">
            얼마나 여행을 떠나나요?
          </h1>
          <input
            type="date"
            className="w-full h-14 p-5 bg-[#F3F3F3] rounded-2xl"
            placeholder="여행지를 입력해주세요."
          />
          <h1 className="text-xl p-6 font-GowunBatangRegular">
            어디로 여행을 가시나요?
          </h1>
          <input
            type="text"
            className="w-full h-14 p-5 bg-[#F3F3F3] rounded-2xl"
            placeholder="여행지를 입력해주세요"
          />
        </div>
      )}
      {selectedIndex == 1 && (
        <div className="p-6">
          <h1 className="text-xl p-6 font-GowunBatangRegular">
            얼마나 여행을 떠나나요?
          </h1>
          <input
            type="date"
            className="w-full h-14 p-5 bg-[#F3F3F3] rounded-2xl"
            placeholder="여행지를 입력해주세요."
          />
          <h1 className="text-xl p-6 font-GowunBatangRegular">
            어디로 여행을 가시나요?
          </h1>
          <input
            type="text"
            className="w-full h-14 p-5 bg-[#F3F3F3] rounded-2xl"
            placeholder="여행지를 입력해주세요"
          />
        </div>
      )}

      {selectedIndex == 0 && (
        <div className="p-6">
          <h1 className="text-xl p-6 font-GowunBatangRegular">
            어디로 여행을 가시나요?
          </h1>
          <input
            type="text"
            className="w-full h-14 p-5 bg-[#F3F3F3] rounded-2xl"
            placeholder="여행지를 입력해주세요"
          />
        </div>
      )}
      {selectedIndex !== 3 && (
        <button
          onClick={() => setSelectedIndex(selectedIndex + 1)}
          className="font-PretendardBold absolute bottom-0 w-full h-16 left-1/2 -translate-x-1/2 bg-green_first"
        >
          다음
        </button>
      )}
    </>
  );
}

export default NewPage;
