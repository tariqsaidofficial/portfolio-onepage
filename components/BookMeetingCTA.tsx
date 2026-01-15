// components/BookMeetingCTA.tsx
import React from 'react';
import { showWidget, openChat } from '../lib/tawk';

export default function BookMeetingCTA() {
  const handleClick = async () => {
    await showWidget();
    await openChat();
  };
  return (
    <button type="button" onClick={handleClick}>
      Book a meeting
    </button>
  );
}
