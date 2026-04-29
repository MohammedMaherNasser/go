import { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import "./dark.css";
import "./StudentCard.css";

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dark-mode");
    if (saved !== null) setDark(saved === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", dark ? "true" : "false");
  }, [dark]);

  return (
    <div className={dark ? "dark-mode app-root" : "app-root"}>
      <div className="top-bar">
        <h1 className="title">بطاقات الطلاب</h1>

        <div className="controls">
          <button
            className={`toggle-btn ${dark ? "active" : ""}`}
            onClick={() => setDark((prev) => !prev)}
            aria-pressed={dark}
            title={dark ? "التبديل إلى وضع النهار" : "التبديل إلى وضع الليل"}
          >
            {dark ? "وضع الليل 🌙" : "وضع النهار ☀️"}
          </button>
        </div>
      </div>

      <main className="grid-layout">
        <StudentCard
          name="أحمد"
          major="علوم الحاسب"
          gpa={3.8}
          imageUrl="https://i.pravatar.cc/300?img=1"
        />

        <StudentCard
          name="سارة"
          major="ذكاء اصطناعي"
          gpa={3.2}
          imageUrl="https://i.pravatar.cc/300?img=2"
        />

        <StudentCard
          name="ليلى"
          major="هندسة برمجيات"
          gpa={3.6}
          imageUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f6b3b2b6f2b9a2f8a9d2b1f6a1c2d3e"
        />
      </main>
    </div>
  );
};

export default App;
