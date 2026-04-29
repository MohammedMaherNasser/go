import { useRef, useEffect } from "react";

function StudentCard({ name, major, gpa, imageUrl }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // معادلة لتحويل إحداثيات الماوس إلى دوران ثلاثي الأبعاد قوي وواضح
    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const dx = (x - cx) / cx; // -1 .. 1
      const dy = (y - cy) / cy; // -1 .. 1

      const rotateY = dx * 18; // زاوية قوية وواضحة
      const rotateX = -dy * 14; // زاوية قوية وواضحة

      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      el.style.transition = "transform 0.08s ease-out";
      // إبراز الظل أثناء الحركة
      el.style.boxShadow = `0 30px 50px rgba(0,0,0,0.25), inset 10px 10px 20px rgba(255,255,255,0.02)`;
    }

    function handleLeave() {
      el.style.transform = "";
      el.style.transition = "transform 0.6s cubic-bezier(.2,.9,.2,1)";
      el.style.boxShadow = "";
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchmove", (ev) => {
      if (ev.touches && ev.touches[0]) handleMove(ev.touches[0]);
    });
    el.addEventListener("touchend", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("touchend", handleLeave);
    };
  }, []);

  return (
    <div className="neo-card" ref={cardRef} role="article" aria-label={`${name} بطاقة طالب`}>
      <div className="avatar-wrap">
        <img src={imageUrl} alt={name} className="neo-avatar" />
      </div>

      <h2 className="neo-name">{name}</h2>
      <p className="neo-major">{major}</p>

      <div className="neo-info">
        <span className="label">المعدل</span>
        <span className="value">{gpa.toFixed(2)}</span>
      </div>

      <span className={`neo-badge ${gpa >= 3.5 ? "excellent" : "good"}`}>
        {gpa >= 3.5 ? "متفوق" : "جيد"}
      </span>
    </div>
  );
}

export default StudentCard;
