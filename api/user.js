export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const adviseInfo = [
    { id: 1, advise: "Start where you are. Use what you have. Do what you can." },
    { id: 2, advise: "Small steps every day lead to big changes." },
    { id: 3, advise: "Your future needs you to show up today." },
    { id: 4, advise: "Discipline beats motivation when motivation fades." },
    { id: 5, advise: "Don’t wait for confidence—build it through action." },
    { id: 6, advise: "You’re closer than you think. Keep going." },
    { id: 7, advise: "Progress, not perfection, is the goal." },
    { id: 8, advise: "Hard days are shaping a stronger you." },
    { id: 9, advise: "What you do today can change your tomorrow." },
    { id: 10, advise: "Believe in yourself—even on days when it’s hard." }
  ];

  res.status(200).json(adviseInfo);
}
