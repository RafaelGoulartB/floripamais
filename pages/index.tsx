import Head from "next/head";

const App: React.FC = () => (
  <>
    <Head>
      <title>Floripa+</title>
    </Head>
    <main className="h-screen w-screen flex justify-center items-center">
      <h1 className="text-gray-900 text-3xl animate-pulse">
        Work in progress
        {" "}
        <span aria-label="Work in progress emoji" role="img">👷‍♀️</span>
      </h1>
    </main>
  </>
);

export default App;
