import AnimeList from "./components/AnimeList"
import Header from "./components/AnimeList/Header"


const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=10`)
  const anime = await response.json()

  return (
    <>
    <section>
      <Header title="Paling populer" linkHref="/populer" linkTitle="Lihat semua"/>
      <AnimeList api={anime}/>
      </section>
    </>
  )
}

export default Page