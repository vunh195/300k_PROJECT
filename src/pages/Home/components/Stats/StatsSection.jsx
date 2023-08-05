import React from "react";
import "./StatsSection.scss";
import { STATS } from "./StatsSection.hard";
export const StatsSection = () => {
  const [branchNum, setBranchNum] = React.useState(0);
  const [foodNum, setFoodNum] = React.useState(0);
  const [chefNum, setChefNum] = React.useState(0);
  const [cusNum, setCusNum] = React.useState(0);
  React.useEffect(() => {
    STATS.map((sta, key) => {
      key === 0 && setBranchNum(Number(sta.value));
      key === 1 && setFoodNum(Number(sta.value));
      key === 2 && setChefNum(Number(sta.value));
      key === 3 && setCusNum(Number(sta.value));
      return 0;
    });
  }, []);
  React.useEffect(() => {
    branchNum > 0 && setBranchNum(branchNum - 1);
  }, [branchNum]);
  React.useEffect(() => {
    chefNum > 0 && setChefNum(chefNum - 1);
  }, [chefNum]);
  React.useEffect(() => {
    foodNum > 0 && setFoodNum(foodNum - 1);
  }, [foodNum]);
  React.useEffect(() => {
    cusNum > 0 && setCusNum(cusNum - 1);
    console.log(cusNum);
  }, [cusNum]);

  return (
    <div className="stats py-4 ">
      <div className="container">
        <div className="row justify-content-center">
          {STATS?.map((item, key) => {
            return (
              <div className="col-md-3 col-6" key={key}>
                <div class="counter">
                  <span class={`${item.img} bg-primary`}></span>
                  <div class="value mt-3">
                    {key === 0
                      ? Number(item.value) - branchNum
                      : key === 1
                      ? Number(item.value) - foodNum
                      : key === 2
                      ? Number(item.value) - chefNum
                      : Number(item.value) - cusNum}
                  </div>
                  <p class="desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
