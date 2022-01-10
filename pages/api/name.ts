// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const adjectives = [
  "Arrogant",
  "Amateur",
  "Amazing",
  "Annoyin’",
  "B-loved",
  "Bittah",
  "Crazy",
  "Drunken",
  "Dynamic",
  "E-ratic",
  "Fearless",
  "Foolish",
  "Gentlemen",
  "Insane",
  "Intellectual",
  "Irate",
  "Lazy-assed",
  "Lucky",
  "Mad",
  "Master",
  "Midnight",
  "Mighty",
  "Misunderstood",
  "Pesty",
  "Phantom",
  "Profound",
  "Quiet",
  "Respected",
  "Ruff",
  "Sarkastik",
  "Scratchin’",
  "Shriekin’",
  "Smilin’",
  "Tha",
  "Thunderous",
  "Tuff",
  "Unlucky",
  "Violent",
  "Vizual",
  "Vulgar",
  "Wacko",
  "Wicked",
  "X-cessive",
  "X-pert",
  "Zexy",
];

const nouns = [
  "Ambassador",
  "Artist",
  "Assassin",
  "Bandit",
  "Bastard",
  "Beggar",
  "Commander",
  "Conqueror",
  "Contender",
  "Criminal",
  "Demon",
  "Desperado",
  "Destroyer",
  "Dominator",
  "Dreamer",
  "Genius",
  "Hunter",
  "Killah",
  "Knight",
  "Leader",
  "Lover",
  "Madman",
  "Magician",
  "Mastermind",
  "Menace",
  "Mercenary",
  "Ninja",
  "Observer",
  "Overlord",
  "Professional",
  "Prophet",
  "Pupil",
  "Samurai",
  "Specialist",
  "Swami",
  "Wanderer",
  "Warrior",
  "Watcher",
  "Wizard",
  "Worlock",
];

function generateHash(input: string) {
  const arr = input.replace(/ /g, "").split("");

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result + input.charCodeAt(i);
  }

  return {
    first: result,
    second: result * arr.length,
  };
}

function generateName(input: string) {
  const hash = generateHash(input);

  const wuFirst = adjectives[hash.first % adjectives.length];
  const wuSecond = nouns[hash.second % adjectives.length];

  return `${wuFirst} ${wuSecond}`;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const input = (req.query.name as string) || "";

  const name = generateName(input);

  res.status(200).json({ name });
}
