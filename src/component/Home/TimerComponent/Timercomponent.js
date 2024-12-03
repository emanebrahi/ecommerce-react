import React, { useEffect, useState } from "react";

function TimerComponent({
  seperatorClass,
  dataGenerator,
  initialTimer = 4 * 24 * 60 * 60,
}) {
  const [timer, setTimer] = useState(initialTimer);

  const timerAddition = () => {
    setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
  };

  useEffect(() => {
    const time = setInterval(timerAddition, 1000);
    return () => clearInterval(time);
  }, []);

  const days = String(Math.floor(timer / 86400)).padStart(2, "0");
  const hours = String(Math.floor((timer % 86400) / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  const data = dataGenerator
    ? dataGenerator(days, hours, minutes, seconds)
    : [];

  return (
    <div className="items-timer-container">
      <div className="items-field-container d-flex">
        {data.map((item, index) => {
          return (
            <div className="d-flex" key={index}>
              <div className="item-field me-2">
                {item.type == "data one" ? (
                  <>
                    <p>{item.text}</p>
                    <h5>{item.value}</h5>
                  </>
                ) : (
                  <>
                    <h5 className="mb-0">{item.value}</h5>
                    <p>{item.text}</p>
                  </>
                )}
              </div>
              {index < data.length - 1 && (
                <span className={`separator ${seperatorClass}`}>:</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimerComponent;
