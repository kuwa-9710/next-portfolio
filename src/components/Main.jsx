export function Main(props) {
  return (
    <main className="min-h-[730px] h-full w-full">      
      <div className="fixed top-0 left-0 -z-10 w-full h-full bg-[url('/bg.jpg')] bg-cover "></div>
      {props.children}
    </main>
  );
}
