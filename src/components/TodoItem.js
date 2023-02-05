import React, { useState } from 'react';

export default function TodoItem({ todo }) {
  const { todo: thingsTodo, isCompleted } = todo;

  return (
    <li className="p-2 flex justify-between w-2/3 my-2">
      <label className="flex  items-center ">
        <input className="w-4 h-6 mr-2" type="checkbox" value={isCompleted} />
        <span className="w-full h-6">
          <p className="text-xl leading-[22px] p-1">{thingsTodo}</p>
        </span>
      </label>
      <div className="ml-10">
        <button className="bg-sky-300  ml-3 outline p-1">수정</button>
        <button className="bg-zinc-100  ml-3 outline p-1 mr-20">삭제</button>
      </div>
    </li>
  );
}
