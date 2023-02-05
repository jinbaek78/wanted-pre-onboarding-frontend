import React from 'react';

export default function Header({ name }) {
  return (
    <header className="text-2xl border-b border-b-zinc-300 mb-5 py-4">
      {name}
    </header>
  );
}
