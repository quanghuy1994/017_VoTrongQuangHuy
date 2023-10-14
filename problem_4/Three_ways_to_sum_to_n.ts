const function1 = (n: number) =>
{
  let s=0;
  for(let i=1;i<=n;i++)
  {
    s=s+i;
  }
  return s;
}

const function2 = (n: number) =>
{
  if (n <= 1)
    return n;
  const s = n + function2(n-1);
  return s;

}

const function3 = (n: number) =>
{
  let s=0;
  s = n*(n+1)/2;
  return s;
}
console.log(function1(5))
console.log(function2(5))
console.log(function3(5))
