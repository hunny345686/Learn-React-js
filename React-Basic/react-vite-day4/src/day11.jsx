import { useRef } from "react";
// One way to do it assign variable out side of your function
// let intervel = null;

const Day11 = () => {
  // ===== Controlled Component
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  //  uncontrolled Comoponent
  const email = useRef(null);
  const password = useRef(null);
  const video = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);

    //   const formdata = new FormData(e.target);
    //   console.log(formdata.get("email"));
  };

  const handleStart = () => {
    video.current.playbackRate = 1.5;
    video.current.play();
  };
  const handleStop = () => {
    video.current.pause();
  };
  const handleReset = () => {
    video.current.currentTime = 10;
  };

  // const handleStop = () => {
  //   video.current.Pause();
  // };
  return (
    <div>
      <h2>Day 11 useRaf</h2>
      <form onSubmit={handleSubmit} action="">
        <input type="text" placeholder="email" name="email" ref={email} />
        <input
          type="text"
          placeholder="password"
          name="password"
          ref={password}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <video
          ref={video}
          width={300}
          height={300}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ></video>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Day11;
