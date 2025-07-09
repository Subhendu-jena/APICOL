import { Users } from "lucide-react";
import React from "react";

const VisitorCounter: React.FC = () => {
  // const [, setVisits] = useState<number>(0);

  // useEffect(() => {
  //   const visited = localStorage.getItem("visited");
  //   if (!visited) {
  //     const currentCount =
  //       parseInt(localStorage.getItem("visit-count") || "0") + 5;
  //     localStorage.setItem("visit-count", currentCount.toString());
  //     localStorage.setItem("visited", "true");
  //     setVisits(currentCount);
  //   } else {
  //     const currentCount = parseInt(localStorage.getItem("visit-count") || "0");
  //     setVisits(currentCount);
  //   }
  // }, []);

  return (
    <div className="text-white mt-5 flex gap-2 mx-auto">
      <Users /> Total visits : 
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=21090831&style=0001&nbdigits=4&type=ip&initCount=10"
          title="Counter Widget"
          alt="Visit counter For Websites"
        />
    </div>
  );
};

export default VisitorCounter;
