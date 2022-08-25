import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import { messagesHistoryUser1 } from "./messagesHistory";
import { messagesHistoryUser2 } from "./messagesHistory";
import { messagesHistoryUser3 } from "./messagesHistory";
import { messagesHistoryUser4 } from "./messagesHistory";
import { messagesHistoryUser5 } from "./messagesHistory";

export const usersData = [
  {
    id: 1,
    name: "Alise Freeman",
    avatar: user1,
    messagesHistory: messagesHistoryUser1,
  },
  {
    id: 2,
    name: "Brandon",
    avatar: user2,
    messagesHistory: messagesHistoryUser2,
  },
  {
    id: 3,
    name: "Bill Jonson",
    avatar: user3,
    messagesHistory: messagesHistoryUser3,
  },
  {
    id: 4,
    name: "Boris Johnson",
    avatar: user4,
    messagesHistory: messagesHistoryUser4,
  },
  {
    id: 5,
    name: "Katy Still",
    avatar: user5,
    messagesHistory: messagesHistoryUser5,
  },
];
