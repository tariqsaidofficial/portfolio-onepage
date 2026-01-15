"use client";
import { useTawk } from '../hooks/useTawk';
import BookMeetingCTA from './BookMeetingCTA';

export default function HomeTawkClient() {
  useTawk(true);
  return <BookMeetingCTA />;
}