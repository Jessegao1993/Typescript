enum Status{
    EAT,
    SLEEP,
    RUN,
}

function judgeStatus(status:any){
    if(status===Status.EAT){
        return "eat";
    }else if(status===Status.SLEEP){
        return "sleep";
    }else if(status===Status.RUN){
        return "run";
    }
}
const res = judgeStatus(Status.RUN);
console.log(`我要去${res}`);

  
//   const result = getServe(Status.SPA);
  
//   console.log(`我要去${result}`);
