// نسخهٔ بدون بیلد: با Babel Standalone
// نکته: export default لازم نیست؛ در انتهای فایل رندر انجام می‌شود.

function VerseBox({ title, surah, aya, arabic, points = [] }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <p style={{marginTop:6}}><strong>آیهٔ مرجع:</strong> سورهٔ {surah}، آیهٔ {aya}</p>
      <p style={{fontStyle:"italic", fontSize:13, marginTop:4}}>{arabic}</p>
      {points.length > 0 && (
        <ul style={{marginTop:8}}>
          {points.map((p,i)=><li key={i}>{p}</li>)}
        </ul>
      )}
    </section>
  );
}

function LoginBox() {
  const [u, setU] = React.useState("");
  const [p, setP] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [user, setUser] = React.useState(null);

  function login(e){
    e.preventDefault();
    if(u==="user" && p==="password123"){
      setUser({name:"کاربر نمونه"});
      setMsg("");
    }else{
      setMsg("نام کاربری یا رمز عبور اشتباه است. (برای تست: user / password123)");
    }
  }

  if(user){
    return (
      <div className="card">
        <strong>خوش آمدید، {user.name}</strong>
        <p style={{marginTop:6}}>شما وارد شده‌اید.</p>
        <button className="btn" onClick={()=>setUser(null)}>خروج</button>
      </div>
    );
  }

  return (
    <form onSubmit={login} className="card">
      <h3>ورود</h3>
      <label>نام کاربری
        <input value={u} onChange={e=>setU(e.target.value)} style={{display:"block", padding:8, marginTop:6, width:"100%"}} />
      </label>
      <label style={{marginTop:8}}>رمز عبور
        <input type="password" value={p} onChange={e=>setP(e.target.value)} style={{display:"block", padding:8, marginTop:6, width:"100%"}} />
      </label>
      {msg && <div style={{color:"#b91c1c", marginTop:8}}>{msg}</div>}
      <button className="btn" style={{marginTop:10}}>ورود</button>
      <small style={{marginRight:8}}>برای تست: user / password123</small>
    </form>
  );
}

function App(){
  return (
    <div>
      <div className="card">
        <p>این صفحهٔ نمونه برای نمایش مفاهیم <strong>سراب، انکار، هراس</strong> است.</p>
      </div>

      <VerseBox
        title="سراب"
        surah="حجر"
        aya="۳۹"
        arabic="(متن آیه را می‌توانید اینجا قرار دهید)"
        points={[
          "ریشه‌ها: وعده‌های فریبنده، اطلاعات ناقص",
          "راهکار: سواد رسانه‌ای، ارزیابی منبع"
        ]}
      />

      <VerseBox
        title="انکار"
        surah="انعام"
        aya="۱۵۰"
        arabic="(متن آیه را می‌توانید اینجا قرار دهید)"
        points={[
          "ریشه‌ها: تعصب، فشار جمعی",
          "راهکار: گفت‌وگوی منطقی، تفکر انتقادی"
        ]}
      />

      <VerseBox
        title="هراس"
        surah="انفال"
        aya="۳۰"
        arabic="(متن آیه را می‌توانید اینجا قرار دهید)"
        points={[
          "ریشه‌ها: اخبار تهدیدآمیز، ابهام",
          "راهکار: مدیریت اضطراب، تکیه بر منبع مطمئن"
        ]}
      />

      <LoginBox />
    </div>
  );
}

// رندر
const root = ReactDOM.createRoot(document.get
