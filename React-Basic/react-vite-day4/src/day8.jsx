import React, { useCallback, useMemo, useState } from "react";

const Sum = React.memo(({ no }) => {
  function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= no; i++) {
      sum += i;
    }
    console.log("Sum Function Render and sum is ", sum);

    return sum;
  }

  const totle = calculateSum();
  console.log("Sum Function Render");

  return (
    <div>
      <h2>
        Sum Componet and Sum and counter is {totle} {no}
      </h2>
    </div>
  );
});

export default function Dya8() {
  const [conter, setCounter] = useState(0);
  const [no, setNo] = useState(10000); // for 100000 browser is lagging
  console.log("Day 8 Render");

  // Without us memo hook this function will render every time when state will change
  // function calculatePrime() {
  //   let total = 0;

  //   for (let i = 2; i <= no; i++) {
  //     let isPrime = true;
  //     for (let j = 2; j < i; j++) {
  //       if (i % j === 0) {
  //         isPrime = false;
  //         break;
  //       }
  //     }

  //     if (isPrime) {
  //       total++;
  //     }
  //   }

  //   return total;
  // }

  // With using useMemo hook
  const primeNo = useMemo(() => {
    let total = 0;

    for (let i = 2; i <= no; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        total++;
      }
    }

    return total;
  }, [no]);

  // const handleClick = () => {
  //   console.log("handleClick");
  // };

  const handleClick = useCallback(() => {
    console.log("useCallback", conter);
  }, [conter]);

  const handleCount = () => {
    setCounter(conter + 1);
  };
  return (
    <div>
      <h2>Day 8</h2>
      {/* <Sum conter={"conter"}></Sum> React Memo will work Propes are static  */}
      {/* <Sum conter={conter}></Sum> child will rerand due to counter change */}
      <p>Your Currunt No value is : {no}</p>
      <button onClick={() => setNo(no + 1000)}>Increament the no</button>
      <Sum no={no}></Sum>
      <p>{conter}</p>
      <button onClick={handleCount}>Increment </button>

      <p>Prime no is {primeNo}</p>

      <p>UseCallback Hook function memoization {conter}</p>
      <button onClick={handleClick}>Click(useCallback)</button>
    </div>
  );
}
