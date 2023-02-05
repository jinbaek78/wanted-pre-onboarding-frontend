import React, { useState } from 'react';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const { todo: thingsTodo, isCompleted, id } = todo;
  const [text, setText] = useState(thingsTodo);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCheckedChange = (e) => {
    onUpdate({ ...todo, isCompleted: !todo.isCompleted });
  };

  const handleModifyClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleCancelClick = () => {
    setIsEditMode(!isEditMode);
    setText(thingsTodo);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleSubmitClick = () => {
    onUpdate({ ...todo, todo: text });
    setIsEditMode(!isEditMode);
  };
  return (
    <li className="p-2 flex w-full my-2">
      <label className="flex basis-8/12 items-center ">
        <input
          className="w-7 h-6 mr-2 accent-sky-200"
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckedChange}
        />
        <span className="w-full h-6">
          {isEditMode ? (
            <input
              data-testid="modify-input"
              className="w-full focus:outline mb-1 text-xl outline-sky-300 focus:outline-2"
              onChange={handleTextChange}
              value={text}
              autoFocus
            />
          ) : (
            <p className="text-xl ">{thingsTodo}</p>
          )}
        </span>
      </label>
      <div className="ml-10 basis-4/12">
        {isEditMode ? (
          <>
            {' '}
            <button
              data-testid="submit-button"
              className="bg-sky-300  ml-3 outline p-1"
              onClick={handleSubmitClick}
            >
              제출
            </button>
            <button
              data-testid="cancel-button"
              className="bg-zinc-100  ml-3 outline p-1"
              onClick={handleCancelClick}
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
