import { useState } from "react";

const Anecdotes = () => {
  const anecdotes = [
    "إذا كان تنقيح الأخطاء هو إزالة الأخطاء، فإن البرمجة هي وضعها.",
    "أفضل طريقة للبدء هي أن تتوقف عن الكلام وتبدأ بالعمل.",
    "أي أحمق يمكنه كتابة كود يفهمه الكمبيوتر. المبرمج الجيد يكتب كوداً يفهمه البشر.",
    "التحسين المبكر هو أصل كل شر.",
    "قبل أن تعمل البرمجيات بشكل جيد، يجب أن تعمل أولاً.",
    "البساطة هي أقصى درجات التطور.",
    "أفضل رسالة خطأ هي التي لا تظهر أبداً.",
    "أصعب جزء في البرمجة هو تسمية الأشياء."
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const next = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const maxVotes = Math.max(...votes);
  const best = votes.indexOf(maxVotes);

  return (
    <div>
      <h1>حكمة اليوم</h1>

      <p>"{anecdotes[selected]}"</p>
      <p>الأصوات: {votes[selected]}</p>

      <button onClick={vote}>تصويت</button>
      <button onClick={next}>التالي</button>
      <h2>الأكثر شعبية</h2>
      {maxVotes > 0 ? (
        <>
          <p>"{anecdotes[best]}"</p>
          <p>بـ {maxVotes} صوت</p>
        </>
      ) : (
        <p>لا توجد أصوات بعد</p>
      )}
    </div>
  );
};

export default Anecdotes;
