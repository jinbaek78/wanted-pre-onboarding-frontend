import React, { useState } from 'react';
const todoType = {
  id: 1992,
  todo: 'todo1',
  isCompleted: false,
  userId: 1075,
};

export default function TodoItem({ todo }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const { todo: thingsTodo, isCompleted } = todo;
  const [text, setText] = useState(thingsTodo);
  const [isChecked, setIsChecked] = useState(isCompleted);
  const handleTextOnchange = (e) => {
    setText(e.target.value);
  };
  const handleCheckedChange = (e) => {
    setIsChecked(e.target.value);
  };

  const handleModifyClick = () => {
    setIsEditMode(!isEditMode);
  };
  return (
    <li className="p-2 flex justify-between w-2/3 my-2">
      <label className="flex  items-center ">
        <input
          className="w-4 h-6 mr-2"
          type="checkbox"
          value={isChecked}
          onChange={handleCheckedChange}
        />
        <span className="w-full h-6">
          {isEditMode ? (
            <input
              className="w-full focus:outline text-xl   mr-5 p-1"
              onChange={handleTextOnchange}
              value={text}
              autoFocus
            />
          ) : (
            <p className="text-xl leading-[22px] p-1">thingsTodo</p>
          )}
        </span>
      </label>
      <div className="ml-10">
        {isEditMode ? (
          <>
            {' '}
            <button className="bg-sky-300  ml-3 outline p-1">제출</button>
            <button
              className="bg-zinc-100  ml-3 outline p-1"
              onClick={handleModifyClick}
            >
              취소
            </button>
          </>
        ) : (
          <>
            {' '}
            <button
              className="bg-sky-300  ml-3 outline p-1"
              onClick={handleModifyClick}
            >
              수정
            </button>
            <button className="bg-zinc-100  ml-3 outline p-1 mr-20">
              삭제
            </button>
          </>
        )}
      </div>
    </li>
  );
}
