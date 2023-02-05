import React, { useState } from 'react';

export default function TodoItem({ todo, onCheckedChange, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const { todo: thingsTodo, isCompleted, id } = todo;
  const [text, setText] = useState(thingsTodo);
  const handleTextOnchange = (e) => {
    setText(e.target.value);
  };
  const handleCheckedChange = (e) => {
    onCheckedChange({ ...todo, isCompleted: !todo.isCompleted });
  };

  const handleModifyClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };
  return (
    <li className="p-2 flex justify-between w-2/3 my-2">
      <label className="flex  items-center ">
        <input
          className="w-4 h-6 mr-2"
          type="checkbox"
          checked={isCompleted}
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
            <p className="text-xl leading-[22px] p-1">{thingsTodo}</p>
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
              data-testid="modify-button"
              className="bg-sky-300  ml-3 outline p-1"
              onClick={handleModifyClick}
            >
              수정
            </button>
            <button
              data-testid="delete-button"
              className="bg-zinc-100  ml-3 outline p-1 mr-20"
              onClick={handleDeleteClick}
            >
              삭제
            </button>
          </>
        )}
      </div>
    </li>
  );
}